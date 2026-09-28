import React from 'react'
// import applications from 'assets/scoreflexNC/applications/applications.png'
import Applications from 'organisms/applications'

const ApplicationsNC = () => {
  return (
    <Applications
      title={
        <>
          Safe and effective plaque{' '}
          <br className="hidden md:block xl:hidden 2xl:block" /> modification
        </>
      }
      subTitle={
        <h6 className="gsap-opacity-trans-appear text-center pt-2 2xl:pt-5 px-3 max-w-md mx-auto xl:max-w-xl">
          Scoreflex NC is a non-compliant focused force dilatation balloon that
          comes with a dual wire system which enables safe and effective plaque
          modification.
        </h6>
      }
      listTitle="Commonly seen applications based on real-world experience:"
    />
  )
}

export default ApplicationsNC
