import React, { useEffect } from 'react'
import { awardRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { AwardsDataType } from 'utils/awardTypes'

const useFetchAward = () => {
  const { awardsData, setAwardsData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(awardsData)[0] as keyof AwardsDataType
    const firstValue = awardsData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(awardRequestURLs).map((url: string) => axios.get(url)),
        )

        // Reducing responses to single data of AwardsDataType type
        const newData: AwardsDataType = responses.reduce((acc, response, i) => {
          acc[Object.keys(awardsData)[i] as keyof AwardsDataType] =
            response.data || {}
          return acc
        }, {} as AwardsDataType)

        setAwardsData(newData)
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

export default useFetchAward
