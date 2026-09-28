import React, { useEffect } from 'react'
import { newsRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { NewsDataType } from 'utils/newsTypes'

const useFetchNews = () => {
  const { newsData, setNewsData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(newsData)[0] as keyof NewsDataType
    const firstValue = newsData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(newsRequestURLs).map((url: string) => axios.get(url)),
        )

        // Reducing responses to single data of NewsDataType type
        const newData: NewsDataType = responses.reduce((acc, response, i) => {
          acc[Object.keys(newsData)[i] as keyof NewsDataType] =
            response.data || {}
          return acc
        }, {} as NewsDataType)

        setNewsData(newData)
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

export default useFetchNews
