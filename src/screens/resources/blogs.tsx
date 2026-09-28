import React from 'react'

import item1 from 'assets/home/news/03.jpg'
import item2 from 'assets/home/news/04.jpg'
import item3 from 'assets/home/news/01.jpg'
import item4 from 'assets/home/news/02.jpg'

import News from 'organisms/news'
import { IBlog } from 'utils/homeTypes'

const blogs: IBlog[] = [
  {
    _id: '1',
    title: 'Innvolution Healthcare receives The 2023 Company of The Year Award',
    tag: 'News',
    cover: item3,
    target:
      'https://www.frost.com/wp-content/uploads/2023/07/IHPL_Award-Writeup.pdf',
  },
  {
    _id: '2',
    title: 'Innvolution Group raises funds from OrbiMed to accelerate growth',
    tag: 'News',
    cover: item4,
    target:
      'https://www.expresshealthcare.in/news/innvolution-group-raises-funds-from-orbimed-to-accelerate-growth/438775/',
  },

  {
    _id: '3',
    title:
      'Pioneering cardiac care: Our founder’s vision for a better tomorrow',
    tag: 'Article',
    cover: item1,
    target:
      'https://www.medicalbuyer.co.in/pioneering-cardiac-care-my-vision-revolutionizing-healthcare-for-a-better-tomorrow/',
  },

  {
    _id: '4',
    title: 'Meet Mr. Gaurav Aggarwal, the driving force behind Innvolution',
    tag: 'Article',
    cover: item2,
    target: 'https://voiceofhealthcare.org/idealleader.php?id=1450',
  },
]

export default function Blogs() {
  return (
    <News
      title="Blogs & articles"
      desc="Insightful pieces that explore the possibilities within the cardiovascular landscape."
      margin="blade-top-margin blade-bottom-padding-lg"
      bgGrad="linear-gradient(136deg, #0F73BA 33.82%, #0036D6 135.84%)"
      gridClasses="grid xl:grid-cols-3 xsl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-6 "
      extraClasses="text-white"
      isBlog
      // newsAndBlogsData={blogs}
    />
  )
}
