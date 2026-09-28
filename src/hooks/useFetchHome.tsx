import React, { useEffect } from 'react'
import { homeRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { HomeDataType } from 'utils/homeTypes'

const useFetchHome = () => {
  const { homeData, setHomeData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(homeData)[0] as keyof HomeDataType
    const firstValue = homeData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(homeRequestURLs).map((url: string) => axios.get(url)),
        )

        // Reducing responses to single data of HomeDataType type
        const newData: HomeDataType = responses.reduce((acc, response, i) => {
          acc[Object.keys(homeData)[i] as keyof HomeDataType] =
            response.data || {}
          return acc
        }, {} as HomeDataType)

        setHomeData(newData)
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

export default useFetchHome
