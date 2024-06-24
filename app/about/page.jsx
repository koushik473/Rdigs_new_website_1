import AboutDetails from '@/components/AboutDetails'
import AboutValue from '@/components/AboutValue'
import Counter from '@/components/Counter'
import CtaV2 from '@/components/CtaV2'

import PageHero from '@/components/heros/PageHero'
import PaymentFeatures from '@/components/PaymentFeatures'
import TeamMembers from '@/components/TeamMembers'
import TestimonialSlider from '@/components/TestimonialSlider'
import { AboutFeaturesData } from '@/data/data'
import React from 'react'


const About = () => {
  return (
    <>
      <PageHero
        subtitle="WHO WE ARE"
        title="Where Technology Meets Human Connection for Exceptional Leads"
       
      />
      <AboutDetails />
      <PaymentFeatures
        features={AboutFeaturesData}
        sectionTag={'OUR VALUE'}
        sectionTitle={'Our business is steered by our core values'}
        spacing={'max-md:py-25 py-150 bg-white dark:bg-dark-300 relative max-md:overflow-hidden'}
      />
      <AboutValue />
      <TestimonialSlider />
      <Counter />
      <TeamMembers />
      <CtaV2 />
    </>
  )
}

export default About
