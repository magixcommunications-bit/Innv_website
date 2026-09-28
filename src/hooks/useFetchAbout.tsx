import React, { useEffect } from 'react'
import { aboutRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { AboutDataType } from 'utils/aboutTypes'

const useFetchAbout = () => {
  const { aboutData, setAboutData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(aboutData)[0] as keyof AboutDataType
    const firstValue = aboutData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(aboutRequestURLs).map((url: string) => axios.get(url)),
        )

        // Reducing responses to single data of AboutDataType type
        const newData: AboutDataType = responses.reduce((acc, response, i) => {
          acc[Object.keys(aboutData)[i] as keyof AboutDataType] =
            response.data || {}
          return acc
        }, {} as AboutDataType)

        setAboutData(newData)
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

export default useFetchAbout
