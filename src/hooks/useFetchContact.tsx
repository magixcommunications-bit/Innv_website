import React, { useEffect } from 'react'
import { contactRequestURLs } from 'utils/constants'
import axios from '../utils/axios'
import { useAdmin } from 'store/store'
import { ContactDataType } from 'utils/contactTypes'

const useFetchContact = () => {
  const { contactData, setContactData, setIsLoading } = useAdmin()

  useEffect(() => {
    const firstKey = Object.keys(contactData)[0] as keyof ContactDataType
    const firstValue = contactData[firstKey]

    if (Array.isArray(firstValue) && firstValue.length !== 0) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responses = await Promise.all(
          Object.values(contactRequestURLs).map((url: string) =>
            axios.get(url),
          ),
        )

        // Reducing responses to single data of ContactDataType type
        const newData: ContactDataType = responses.reduce(
          (acc, response, i) => {
            acc[Object.keys(contactData)[i] as keyof ContactDataType] =
              response.data || {}
            return acc
          },
          {} as ContactDataType,
        )

        setContactData(newData)
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

export default useFetchContact
