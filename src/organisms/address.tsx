import React from 'react'
import { ContactPageBtn } from 'atoms/buttons'
import { AddressDetails } from 'utils/contactTypes'
import { useAdmin } from 'store/store'

type AddressProps = {
  // image: string
  // alt: string
  isImageStreched: boolean
  bgClasses: string
}

const Address: React.FC<AddressProps> = ({
  // image,
  // alt,
  isImageStreched,
  bgClasses,
}) => {
  const { contactData } = useAdmin()
  return (
    <>
      {contactData.SECTION_3_muDetails.length === 0 ||
      contactData.SECTION_3_oDetails.length === 0 ? null : (
        <>
          <section className={` ${bgClasses} bg-cover`}>
            <div
              className="grid place-content-center md:grid-cols-[auto_auto] 
          xl:grid-cols-[1fr_1.5fr_1fr] xsl:grid-cols-[1fr_1.7fr_1fr] 2xl:grid-cols-[auto_auto_auto] 
          md:gap-x-[4%] lg:gap-x-[7%] 2xl:gap-x-[8%] 
          md:px-4 gap-y-10 blade-top-padding-lg blade-bottom-padding-lg px-3 
          xsl:w-container-lg 2xl:w-container 2xl:max-w[1480px]
        "
            >
              <ManufacturingUnits
                manufacturingDetails={contactData.SECTION_3_muDetails}
              />
              <div
                className={`md:sticky top-0 h-fit w-fit xl:relative flex justify-center self-start
        ${isImageStreched ? 'xl:h-auto xl:w-full' : 'md:top-20'}
      `}
              >
                <img
                  src={contactData.SECTION_3_Image.imageSrc}
                  alt={contactData.SECTION_3_Image.alt}
                  className={`gsap-opacity-trans-appear w-full h-auto appear-card-gsap rounded-md my-auto max-w-md lg:max-w-lg xl:max-w-none
            ${
              isImageStreched
                ? ' shadow-xl xl:h-full'
                : 'xl:h-auto my-auto xl:scale-110 md:px-3 xl:px-0 '
            }
          `}
                />
              </div>
              <div className="self-start h-full">
                <AddressDetailsLister
                  RDDetails={contactData.SECTION_3_rdDetails}
                  officesDetails={contactData.SECTION_3_oDetails}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Address

const ManufacturingUnits = ({
  manufacturingDetails,
}: {
  manufacturingDetails: AddressDetails[]
}) => {
  console.log('manufacturingDetail', manufacturingDetails)
  return (
    <div className="flex flex-col max-w-[340px]">
      <div className="">
        <h3 className="gsap-opacity-trans-appear text-orange font-medium -mt-2.5 2xl:-mt-4 2xl:hidden">
          Manufacturing units
        </h3>
        <h4 className="gsap-opacity-trans-appear text-orange font-medium hidden -mt-2.5 2xl:block">
          Manufacturing units
        </h4>
        <div className="flex flex-col mt-4 gap-y-6 xl:gap-y-8 md:mt-6 xl:mt-8 ">
          {manufacturingDetails.map((item, index) => (
            <AddressCard
              key={index}
              heading={item.heading}
              para={item.para}
              target={item.target}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const AddressDetailsLister = ({
  officesDetails,
  RDDetails,
}: {
  officesDetails: AddressDetails[]
  RDDetails: AddressDetails[]
}) => {
  return (
    <div className="flex flex-col h-full gap-10 max-w-[340px]">
      <div>
        <h3 className="gsap-opacity-trans-appear font-medium text-orange -mt-2.5 2xl:-mt-4 2xl:hidden">
          Offices
        </h3>
        <h4 className="gsap-opacity-trans-appear text-orange font-medium hidden -mt-2.5 2xl:block">
          Offices
        </h4>
        <div className="flex flex-col mt-4 gap-y-6 2xl:gap-y-8 md:mt-6 2xl:mt-8">
          {officesDetails.map((item, index) => (
            <AddressCard
              key={index}
              heading={item.heading}
              para={item.para}
              target={item.target}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium gsap-opacity-trans-appear text-orange 2xl:hidden">
          R&D Center
        </h3>
        <h4 className="gsap-opacity-trans-appear text-orange font-medium -mt-2.5 hidden 2xl:block">
          R&D Center
        </h4>
        {RDDetails.map((item, index) => (
          <AddressCard
            key={index}
            heading={item.heading}
            para={item.para}
            target={item.target}
          />
        ))}
      </div>
    </div>
  )
}

export function AddressCard({
  heading,
  para,
  target,
}: {
  heading: string
  para: string
  target: string
}) {
  return (
    <div>
      <h6 className="text-lg font-medium gsap-opacity-trans-appear">
        {heading}
      </h6>
      <h6 className="mt-2 text-base opacity-75 gsap-opacity-trans-appear font-regular display-linebreak">
        {para}
      </h6>
      <div className="mt-3 gsap-opacity-trans-appear xl:mt-4">
        <ContactPageBtn
          size="small"
          text="Map It"
          color="black"
          type="button"
          onClick={() => {
            window.open(target, '_blank')
          }}
        />
      </div>
    </div>
  )
}
