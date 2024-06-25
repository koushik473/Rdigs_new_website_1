import CareerDetails from '@/components/CareerDetails'
import CareerList from '@/components/CareerList'
import NewsLetter from '@/components/NewsLetter'
import PageHero from '@/components/heros/PageHero'
import { AboutFeaturesData } from '@/data/data'

const Career = () => {
  return (
    <>
      <PageHero subtitle="CAREER PAGE" title="Become a part of the <br/> RDIGS team" />
      <CareerDetails />

      <CareerList />
      <NewsLetter />
    </>
  )
}

export default Career
