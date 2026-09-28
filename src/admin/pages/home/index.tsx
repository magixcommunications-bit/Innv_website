import React from 'react'

import AuthWrapperHOC from 'layouts/authWrapperHOC'
import Testimonials from './testimonials'
import BrandsTrust from './brandsTrust'
import Stats from './stats'
import Solutions from './solutions'
import ContactUs from './contactUs'
import Products from './products'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'
import useFetchHome from 'hooks/useFetchHome'
import useFetchAward from 'hooks/useFetchAward'
import useFetchNews from 'hooks/useFetchNews'
import EventPopup from './eventPopup'
import Banner from './banner'

const Home = () => {
  useFetchHome()
  useFetchAward()
  useFetchNews()

  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">Home page</h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <Banner />
        <Products />
        <SectionTitleWithBtn
          title="Section 3 (Awards)"
          subTitle="You can change it from 'Awards and Recognitions' page (data will be taken from there)."
        />
        <Stats />
        <Solutions />
        <Testimonials />
        <SectionTitleWithBtn
          title="Section 9 (News & insights)"
          subTitle="You can change it from 'News and Articles' page (data will be taken from there)"
        />
        <BrandsTrust />
        <ContactUs />
        <EventPopup />
      </div>
    </AuthWrapperHOC>
  )
}

export default Home
