import React, { useEffect } from 'react'
import { homeRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'

const useFetchMail = () => {
  const { homeData, setHomeData, setIsLoading } = useAdmin()

  useEffect(() => {
    if (homeData.SECTION_11.supportMail) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(homeRequestURLs.SECTION_11)

        setHomeData((prev) => {
          return {
            ...prev,
            SECTION_11: response.data || {},
          }
        })
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

export default useFetchMail
