import React, { useEffect } from 'react'
import { cathLabRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { CathLabsDataType } from 'utils/cathLabsTypes'

const useFetchCathLab = () => {
  const { cathLabsData, setCathLabsData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(cathLabsData)[0] as keyof CathLabsDataType
    const firstValue = cathLabsData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(cathLabRequestURLs).map((url: string) =>
            axios.get(url),
          ),
        )

        // Reducing responses to single data of CathLabsDataType type
        const newData: CathLabsDataType = responses.reduce(
          (acc, response, i) => {
            acc[Object.keys(cathLabsData)[i] as keyof CathLabsDataType] =
              response.data || {}
            return acc
          },
          {} as CathLabsDataType,
        )

        setCathLabsData(newData)
        // console.log(newData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])
}

export default useFetchCathLab
