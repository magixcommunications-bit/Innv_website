import React, { useEffect } from 'react'
import { eliteRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { EliteDataType } from 'utils/eliteTypes'

const useFetchElite = () => {
  const { eliteData, setEliteData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(eliteData)[0] as keyof EliteDataType
    const firstValue = eliteData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(eliteRequestURLs).map((url: string) => axios.get(url)),
        )

        // Reducing responses to single data of EliteDataType type
        const newData: EliteDataType = responses.reduce((acc, response, i) => {
          acc[Object.keys(eliteData)[i] as keyof EliteDataType] =
            response.data || {}
          return acc
        }, {} as EliteDataType)

        setEliteData(newData)
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

export default useFetchElite
