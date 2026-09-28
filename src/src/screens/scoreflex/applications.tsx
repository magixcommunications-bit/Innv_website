import React from 'react'
// import applications from 'assets/scoreflexNC/applications/applications.png'
import Applications from 'organisms/applications'

const ApplicationsFlex = () => {
  return (
    <Applications
      title={
        <>
          Low dilatation pressure, <br className="hidden min-[400px]:block " />{' '}
          big dilatation effect
        </>
      }
      subTitle={
        <h6 className="gsap-opacity-trans-appear text-center pt-2 2xl:pt-5 px-3 max-w-md mx-auto xl:max-w-xl 2xl:max-w-[43rem]">
          Scoreflex is a focused force dilatation balloon that comes with a dual
          wire system which enables effective dilatation under lower inflation
          pressure. For optimal results, a gradual step-up inflation protocol
          should be adopted
        </h6>
      }
      listTitle="Application"
    />
  )
}

export default ApplicationsFlex
