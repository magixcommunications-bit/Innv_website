import React, { useState } from 'react'
import cardIcon from 'assets/globals/informedUsIcons/iitpl icon elite page 0.svg'
import cardIconA from 'assets/globals/informedUsIcons/iitpl icon elite page 1.svg'
import cardIconB from 'assets/globals/informedUsIcons/iitpl icon elite page 2.svg'
import cardIconC from 'assets/globals/informedUsIcons/iitpl icon elite page 3.svg'
import cardIconD from 'assets/globals/informedUsIcons/RequestDemo.svg'
import SpecificationModal from './speficationModal'
import FeatureCard from 'molecules/featureCard'
import { useNavigate } from 'react-router-dom'
import RequestDemoModal from './requestDemoModal'
import DemoForm from './RequestdemoForm'

export type FeatureCardsList = {
  title: string
  desc: string
}

export type actionCardsList = {
  showReadMore: boolean
  showDownload: boolean
  showContact: boolean
  showFindMore: boolean
  showReqDemo?: boolean
}

type InformedProps = {
  title: JSX.Element
  columnClasses: string
  actionCardsList: actionCardsList
  featureCardsList: FeatureCardsList[]
  bgGrad?: string
  productTarget: string
  fileLink?: string
  fileName?: string
  productsIcon?: string
}

export default function InformedUs({
  title,
  columnClasses,
  actionCardsList,
  featureCardsList,
  bgGrad,
  fileLink,
  fileName,
  productsIcon,
  productTarget,
}: InformedProps) {
  const [isModal, setModal] = useState(false)
  const [isDemo, setIsDemo] = useState(false)

  const viewSpecifications = () => {
    setModal(true)
  }

  const downloadBrochure = (
    fileLink: string | undefined,
    fileName: string | undefined,
  ) => {
    if (!fileLink) {
      return
    }
    // console.log(fileLink, fileName)

    const downloadLink = document.createElement('a')
    downloadLink.href = fileLink
    downloadLink.download = fileName || ''

    downloadLink.click()
  }

  return (
    <div
      style={{
        background: bgGrad ? bgGrad : '#EDEDED',
      }}
    >
      <section
        className={` pt-3 lg:pt-6 md:pb-4 contact-info-wrappe bg-cover bg-center`}
      >
        <section className="blade-top-padding blade-bottom-padding-lg">
          <div className="px-3 blade-bottom-padding sm:w-container-sm">
            <div className="px-3 text-center ">
              {/* <h2 className="font-medium text-center lg:hidden md:-mt-2">
                {title}
              </h2> */}
              <h3
                className={`${
                  bgGrad ? 'text-white' : 'text-black'
                } gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3"`}
              >
                {title}
              </h3>
            </div>
          </div>
          <div
            className={`w-container-lg grid md:grid-cols-2 gap-5 xl:gap-7 2xl:gap-10 ${columnClasses}`}
          >
            {actionCardsList.showReadMore && (
              <ActionCard
                targetText="Read More"
                isNav={false}
                target=""
                title="Technical specifications"
                onClick={viewSpecifications}
                icon={cardIcon}
              />
            )}

            {actionCardsList.showDownload && (
              <ActionCard
                target=""
                targetText="Download"
                isNav={false}
                title="Download brochure"
                onClick={() => {
                  downloadBrochure(fileLink, fileName)
                }}
                icon={cardIconA}
              />
            )}

            {actionCardsList.showContact && (
              <ActionCard
                targetText="Contact Us"
                isNav={true}
                target="/contact-us"
                title="Contact & support"
                onClick={() => {}}
                icon={cardIconC}
              />
            )}

            {actionCardsList.showReqDemo && (
              <ActionCard
                targetText="Request a demo"
                isNav={true}
                target=""
                title="Request a demo"
                onClick={() => {
                  setIsDemo(true)
                }}
                icon={cardIconD}
              />
            )}

            {actionCardsList.showFindMore && (
              <ActionCard
                isNav={true}
                target={productTarget}
                title="Find more products like this"
                targetText="Know More"
                onClick={() => {}}
                icon={productsIcon ? productsIcon : cardIconB}
              />
            )}
          </div>
        </section>
      </section>
      <SpecificationModal
        handleModalClose={() => setModal(false)}
        isActive={isModal}
        title="specification modal"
      >
        <div className="!px-0 md:px-4 pt-2 pb-5 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
            {featureCardsList.map((card, index) => {
              return (
                <FeatureCard title={card.title} desc={card.desc} key={index} />
              )
            })}
          </div>
        </div>
      </SpecificationModal>
      <RequestDemoModal isOpen={isDemo} onClose={() => setIsDemo(false)}>
        <DemoForm setIsDemo={setIsDemo} />
      </RequestDemoModal>
    </div>
  )
}

type IProps = {
  title: string
  target: string
  onClick: () => void
  isNav: boolean
  icon: string
  targetText: string
}

function ActionCard<T extends boolean>({
  title,
  icon,
  isNav,
  target,
  targetText,
  onClick,
}: IProps) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => {
        isNav && navigate(target)
        onClick()
      }}
      className="bg-white md:odd:last-of-type:col-span-2 xl:odd:last-of-type:col-span-1 cursor-pointer rounded-[5px] p-5 md:p-6 lg:p-8 xl:px-6 xl:gap-y-5 flex items-start gap-3 flex-col justify-between max-w-md xl:justify-start mx-auto w-full hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange"
    >
      <div className="grid gap-2 place-content-center place-items-center">
        <img src={icon} alt={title} className="w-auto h-12" />
      </div>
      <h5 className="font-medium xl:text-">{title}</h5>
      {/* <div>
        {isNav ? (
          <Link
            className="flex items-center gap-2 py-2 mr-auto text-base font-medium underline transition-all duration-300 ease-in-out rounded-full outline-none hover:stroke-orange fill-black focus-visible:stroke-orange group focus:text-orange hover:text-orange decoration-from-font underline-offset-4 flex-0 "
            to={target}
            aria-label={targetText}
            // target="_self"
            rel="noreferrer"
          >
            {targetText}
          </Link>
        ) : (
          <button
            aria-label={title}
            type="button"
            onClick={onClick}
            className="flex items-center gap-2 py-2 text-base font-medium underline transition-all duration-300 ease-in-out rounded-full outline-none hover:stroke-orange fill-black focus-visible:stroke-orange group focus:text-orange hover:text-orange decoration-from-font underline-offset-4 flex-0"
          >
            {targetText}
          </button>
        )}
      </div> */}
    </article>
  )
}
