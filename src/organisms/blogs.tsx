import React from 'react'
import { MasterBtn } from 'atoms/buttons'
import { useNavigate } from 'react-router-dom'
import { TextAnchor } from 'atoms/links'
import dummyImage from 'assets/dummy/card.png'
import Partition from 'molecules/partition'

const blogData = {
  items: [
    {
      title: 'Just another cliched blog',
      pubDate: '2021-03-18 07:01:00',
      link: 'https://medium.com/blacksof/just-another-cliched-blog-to-bore-you-about-covid-19-updates-4a7a26804a59?source=rss-3e07ec7310ae------2',
      guid: 'https://medium.com/p/4a7a26804a59',
      author: 'Blacksof',
      thumbnail: dummyImage,
      enclosure: {},
      categories: ['design', 'workforce', 'strategy', 'covid19', 'business'],
    },
    {
      title: 'Just another cliched blog',
      pubDate: '2021-03-18 07:01:00',
      link: 'https://medium.com/blacksof/just-another-cliched-blog-to-bore-you-about-covid-19-updates-4a7a26804a59?source=rss-3e07ec7310ae------2',
      guid: 'https://medium.com/p/4a7a26804a59',
      author: 'Blacksof',
      thumbnail: dummyImage,
      enclosure: {},
      categories: ['design', 'workforce', 'strategy', 'covid19', 'business'],
    },
    {
      title: 'Just another cliched blog',
      pubDate: '2021-03-18 07:01:00',
      link: 'https://medium.com/blacksof/just-another-cliched-blog-to-bore-you-about-covid-19-updates-4a7a26804a59?source=rss-3e07ec7310ae------2',
      guid: 'https://medium.com/p/4a7a26804a59',
      author: 'Blacksof',
      thumbnail: dummyImage,
      enclosure: {},
      categories: ['design', 'workforce', 'strategy', 'covid19', 'business'],
    },
  ],
}

export default function BlogsSection() {
  return (
    <section className="w-container blade-top-padding-lg blade-bottom-padding-lg">
      <section className="blade-bottom-padding-sm">
        <Partition
          color="dark"
          text="Blogs and updates – Agriculture, tech, and more."
          title="Blogs and updates – Agriculture, tech, and more."
        />
      </section>

      <section className="grid gap-y-8 md:gap-12 xl:gap-28 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {blogData.items.map((elem, index) => {
          const key = `${index}`
          return <Blogcard data={elem} key={key} />
        })}
      </section>
    </section>
  )
}

function Blogcard({ data }: { data: any }) {
  const { title, content, thumbnail, categories, link } = data
  return (
    <article className="">
      <div className="h-60">
        <img
          className="h-full w-full object-cover object-center rounded-md"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className=" pt-2 md:pt-4  gap-2 flex-1 flex flex-col  pb-3">
        <div className=" font-medium line-clamp-2 pb-2">
          <h4 className="">{title}</h4>
        </div>
        <div className="grid place-content-start">
          <a href={link} className="text-anchor">
            Know More
          </a>
        </div>
      </div>
    </article>
  )
}
