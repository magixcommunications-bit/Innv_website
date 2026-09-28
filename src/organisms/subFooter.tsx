import React from 'react'
import Form from 'screens/contact/form'
import ContactDetails from './contactDetails'

const SubFooter = () => {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row">
        <ContactDetails />
        <Form />
      </div>
    </section>
  )
}

export default SubFooter
