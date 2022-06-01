import siteMetadata from '@/data/siteMetadata'
import photoData from '@/data/photoData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Photos() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Photos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here's a few photos I have taken over the years
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {photoData.map((d) => (
              <Card key={d.title} title={d.title} description={d.description} imgSrc={d.imgSrc} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
