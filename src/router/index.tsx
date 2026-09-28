import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {
  PageHome,
  PageClinical,
  PageError404,
  PageAbout,
  PageContact,
  PageTermsAndConditions,
  PagePrivacyPolicy,
  StentslandingPage,
  BallonCathLabs,
  PremierSelect,
  CathLabsLandingPage,
  ServiceAndSupport,
  Careers,
  AwardsAndRecognitions,
  Pinnacle,
  PinnaclePro,
  Innvolution,
  PinnacleAgile,
  TeleportMicroCatheter,
  DiamondBack360,
  SapphireIINC,
  Resources,
  ScoreflexNC,
  Scoreflex,
  Sapphire3085mm,
  Jade,
  Sapphire315mm,
  Sapphire204,
  SapphireNC24,
  Sapphire201,
  PremierElite,
  PremierEliteSharp,
  ClinicalGallery,
  NumenPage,
  NumenFR,
  Cardiac,
  VivoHeart,
  InnvoShield,
  ClearPac,
  IsailEdgeAlign,
} from 'screens/index'

import PopUpViewer from 'molecules/popUpViewer'
import { Header, Footer } from 'organisms'

// Admin Pages

import {
  AdminLayout,
  AdminPage,
  AdminSignIn,
  ForgotPassword,
  OTPVerifier,
  ResetPassword,
  AdminsList,
  Home,
  WhoWeAre,
  AwardsAndRecognition,
  CathLab,
  PremierElitePage,
  PremierSelectPage,
  CareersPage,
  ContactUs,
  Pinnacle_Agile,
  ServiceAndSupportPage,
  NewsAndArticles,
} from 'admin'

import {
  ProductEternia,
  ProductSiroflex,
  ProductEterniaNexa,
  ProductEterniaBrio,
  ProductSiroflexCurve,
  ProductSiroflexPlus,
  ProductEterniaSelect,
  ProductInsignia,
} from 'screens/productsNew'

import { useAdmin } from 'store/store'
import OurInvestors from 'screens/ourInvestors'

function ViewWithHeaderAndFooter() {
  const { homeData } = useAdmin()

  return (
    <>
      {homeData.EVENTPOPUP.length > 0 && <PopUpViewer />}
      <Header />
      <Outlet />
      <Footer toggle={() => {}} />
    </>
  )
}

function ViewWithAdminLayout() {
  return (
    <>
      {/* <Header /> */}
      <AdminLayout />
    </>
  )
}

// header components
export default function routes() {
  return [
    {
      path: '/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '/',
          element: <PageHome />,
        },
        // {
        //   path: '/clinical',
        //   element: <PageClinical />,
        // },
        {
          path: '/who-we-are',
          element: <PageAbout />,
        },
        {
          path: '/investors',
          element: <OurInvestors />,
        },
        {
          path: '/awards-and-recognitions',
          element: <AwardsAndRecognitions />,
        },
        {
          path: '/services-and-support',
          element: <ServiceAndSupport />,
        },
        {
          path: '/innovation',
          element: <Innvolution />,
        },
        {
          path: '/contact-us',
          element: <PageContact />,
        },
        {
          path: '/careers',
          element: <Careers />,
        },
        {
          path: '/resources',
          element: <Resources />,
        },
        {
          path: '/clinical-gallery',
          element: <ClinicalGallery />,
        },

        { path: '/diamond-back-360', element: <DiamondBack360 /> },
        {
          path: '/teleport-microcatheter',
          element: <TeleportMicroCatheter />,
        },
        {
          path: '/terms-and-conditions',
          element: <PageTermsAndConditions />,
        },
        {
          path: '/privacy-policy',
          element: <PagePrivacyPolicy />,
        },
      ],
    },
    {
      path: '/products/cath-labs/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <CathLabsLandingPage />,
        },
        {
          path: 'premier-elite',
          element: <PremierElite />,
        },
        {
          path: 'premier-elite-sharp',
          element: <PremierEliteSharp />,
        },
        {
          path: 'premier-select',
          element: <PremierSelect />,
        },
        {
          path: 'pinnacle',
          element: <Pinnacle />,
        },
        {
          path: 'pinnacle-pro',
          element: <PinnaclePro />,
        },
        {
          path: 'pinnacle-agile',
          element: <PinnacleAgile />,
        },
      ],
    },
    // {
    // path: '/products/stents/',
    // element: <ViewWithHeaderAndFooter />,
    // children: [
    //   {
    //     path: '',
    //     element: <StentslandingPage />,
    //   },
    // {
    //   path: 'insignia',
    //   element: <Insignia />,
    // },
    // {
    //   path: 'eternia',
    //   element: <ProductEternia />,
    // },
    // {
    //   path: 'eternia-nexa',
    //   element: <EterniaNexa />,
    // },
    // {
    //   path: 'eternia-brio',
    //   element: <EterniaBrio />,
    // },
    // {
    //   path: 'eternia-select',
    //   element: <EterniaSelect />,
    // },
    // { path: 'siroflex', element: <Siroflex /> },
    // { path: 'siroflex-curve', element: <SiroflexCurve /> },
    // { path: 'siroflex-plus', element: <SiroflexPlus /> },
    //   ],
    // },
    {
      path: '/products/stents/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <StentslandingPage />,
        },
        {
          path: 'insignia',
          element: <ProductInsignia />,
        },
        {
          path: 'eternia',
          element: <ProductEternia />,
        },
        {
          path: 'eternia-nexa',
          element: <ProductEterniaNexa />,
        },
        {
          path: 'eternia-brio',
          element: <ProductEterniaBrio />,
        },
        {
          path: 'eternia-select',
          element: <ProductEterniaSelect />,
        },
        { path: 'siroflex', element: <ProductSiroflex /> },
        { path: 'siroflex-curve', element: <ProductSiroflexCurve /> },
        { path: 'siroflex-plus', element: <ProductSiroflexPlus /> },
      ],
    },

    {
      path: '/products/balloon-catheters/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <BallonCathLabs />,
        },
        {
          path: 'scoreflex',
          element: <Scoreflex />,
        },
        {
          path: 'scoreflex-nc',
          element: <ScoreflexNC />,
        },
        {
          path: 'jade',
          element: <Jade />,
        },
        {
          path: 'sapphire-3-1.5mm-4mm',
          element: <Sapphire315mm />,
        },
        {
          path: 'sapphire-3-0.85mm-1.25mm',
          element: <Sapphire3085mm />,
        },
        {
          path: 'sapphire-ii-nc',
          element: <SapphireIINC />,
        },
        {
          path: 'sapphire-nc-24',
          element: <SapphireNC24 />,
        },
        {
          path: 'sapphire-2-pro-1.75mm-4mm',
          element: <Sapphire204 />,
        },
        {
          path: 'sapphire-2-pro-1mm-1.5mm',
          element: <Sapphire201 />,
        },
      ],
    },

    {
      path: '/products/numen/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <NumenPage />,
        },
        {
          path: 'numen-fr',
          element: <NumenFR />,
        },
      ],
    },
    {
      path: '/products/cardiac/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <Cardiac />,
        },
        {
          path: 'i-connect',
          element: <Cardiac />,
        },
        {
          path: 'i-flate',
          element: <Cardiac />,
        },
        {
          path: 'i-rac',
          element: <Cardiac />,
        },
        {
          path: 'i-access',
          element: <Cardiac />,
        },
        {
          path: 'i-man',
          element: <Cardiac />,
        },
        {
          path: 'i-sheath',
          element: <Cardiac />,
        },
      ],
    },
    {
      path: '/products/vivoHeart/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <VivoHeart />,
        },
      ],
    },
    {
      path: '/products/innvoshield',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <InnvoShield />,
        },
      ],
    },
    {
      path: '/products/clearpac',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <ClearPac />,
        },
      ],
    },
    {
      path: '/products/isailedgealign',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '',
          element: <IsailEdgeAlign />,
        },
      ],
    },
    {
      path: '/admin/',
      element: <ViewWithAdminLayout />,
      children: [
        {
          path: '',
          element: <AdminPage />,
        },
        {
          path: 'signin',
          element: <AdminSignIn />,
        },
        {
          path: 'admins-list',
          element: <AdminsList />,
        },
        {
          path: 'reset-password',
          element: <ResetPassword />,
        },
        {
          path: 'forgot',
          element: <ForgotPassword />,
        },
        {
          path: 'otp-verification/:_id',
          element: <OTPVerifier />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'who-we-are',
          element: <WhoWeAre />,
        },
        {
          path: 'awards-and-recognitions',
          element: <AwardsAndRecognition />,
        },
        {
          path: 'cath-labs',
          element: <CathLab />,
        },
        {
          path: 'premier-elite',
          element: <PremierElitePage />,
        },
        {
          path: 'premier-select',
          element: <PremierSelectPage />,
        },
        {
          path: 'careers',
          element: <CareersPage />,
        },
        {
          path: 'contact-us',
          element: <ContactUs />,
        },
        {
          path: 'pinnacle-agile',
          element: <Pinnacle_Agile />,
        },
        {
          path: 'services-and-support',
          element: <ServiceAndSupportPage />,
        },
        {
          path: 'resources',
          element: <NewsAndArticles />,
        },
        {
          path: '*',
          element: <Navigate to="/admin" replace />,
        },
      ],
    },
    {
      path: '*',
      element: <ViewWithHeaderAndFooter />,
      children: [{ path: '*', element: <PageError404 /> }],
    },
  ]
}
