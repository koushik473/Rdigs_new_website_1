import PageHero from '@/components/heros/PageHero'
import NewsLetter from '@/components/NewsLetter'
import Services from '@/components/Services'
import MembersCounter from '@/components/MembersCounter'

export const metadata = {
  title: 'RDIGS Services',
  description: 'Generated by StaticMania',
}
export default function ServicePage() {
  return (
    <>
      <PageHero
        subtitle="OUR SERVICES"
        title="We Assist Partners To Win New Businesses & Fuel Revenue "
        paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
      />
      <Services sectionDetails={false} />
      <MembersCounter />
      
      <NewsLetter />
    </>
  )
}
