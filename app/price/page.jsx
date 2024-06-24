'use client'
import Counter from '@/components/Counter'
import FaqFullLayout from '@/components/FaqFullLayout'
import NewsLetter from '@/components/NewsLetter'
import { PricingData } from '@/data/data'
import React, { useState } from 'react'
import Link from 'next/link'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'
const Price = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <>
      
          
          
      <Counter />
      
      <FaqFullLayout />
      <NewsLetter />
    </>
  )
}

// export default Price
