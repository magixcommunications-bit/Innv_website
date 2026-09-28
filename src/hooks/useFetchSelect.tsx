import React, { useEffect } from 'react'
import { selectRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { SelectDataType } from 'utils/selectTypes'

const useFetchSelect = () => {
  const { selectData, setSelectData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(selectData)[0] as keyof SelectDataType
    const firstValue = selectData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(selectRequestURLs).map((url: string) => axios.get(url)),
        )

        // Reducing responses to single data of SelectDataType type
        const newData: SelectDataType = responses.reduce((acc, response, i) => {
          acc[Object.keys(selectData)[i] as keyof SelectDataType] =
            response.data || {}
          return acc
        }, {} as SelectDataType)

        setSelectData(newData)
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

export default useFetchSelect
