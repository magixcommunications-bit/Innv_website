import React, { useEffect } from 'react'
import { pinnacleAgileURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { AgileDataType } from 'utils/agileTypes'

const useFetchAgile = () => {
  const { agileData, setAgileData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(agileData)[0] as keyof AgileDataType
    const firstValue = agileData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(pinnacleAgileURLs).map((url: string) => axios.get(url)),
        )

        // Reducing responses to single data of AgileDataType type
        const newData: AgileDataType = responses.reduce((acc, response, i) => {
          acc[Object.keys(agileData)[i] as keyof AgileDataType] =
            response.data || {}
          return acc
        }, {} as AgileDataType)

        setAgileData(newData)
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

export default useFetchAgile
