import useFetchContact from 'hooks/useFetchContact'
import useFetchMail from 'hooks/useFetchMail'
import { useEffect } from 'react'

function Apicall() {
  useEffect(() => {
    useFetchContact()
    useFetchMail()
  }, [])

  return null
}

export default Apicall
