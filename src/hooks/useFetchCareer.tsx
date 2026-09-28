import React, { useEffect } from 'react'
import { careersRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { CareersDataType } from 'utils/careerTypes'

const useFetchCareer = () => {
  const { careersData, setCareersData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(careersData)[0] as keyof CareersDataType
    const firstValue = careersData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(careersRequestURLs).map((url: string) =>
            axios.get(url),
          ),
        )

        // Reducing responses to single data of CareersDataType type
        const newData: CareersDataType = responses.reduce(
          (acc, response, i) => {
            acc[Object.keys(careersData)[i] as keyof CareersDataType] =
              response.data || {}
            return acc
          },
          {} as CareersDataType,
        )

        setCareersData(newData)
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

export default useFetchCareer
