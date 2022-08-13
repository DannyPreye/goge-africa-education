import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/Home/HeroSection'
import { motion } from "framer-motion"
import AboutSection from '../components/Home/AboutSection'
import SuccessStory from '../components/success/SuccessStory'
import CourseSection from '../components/Home/CourseSection'
import Achievement from '../components/Home/Achievement'
import TestimonialSection from "../components/Home/TestimonialSection"
import Pricing from '../components/Home/Pricing'
import ContactSection from '../components/Home/ContactSection'

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className="overflow-x-hidden  " >
      <Head>
        <title> Goge Africa</title>
        <meta name="description" content="Landing page for Goge Africa" />
        <meta name='author' content='Olawoyin Daniel' />
        <meta name='keywords' content='goge, africa, technology, web development, hub' />


      </Head>


      <HeroSection />
      <AboutSection />
      <SuccessStory />
      <CourseSection />
      <Achievement />
      <TestimonialSection />
      <Pricing />
      <ContactSection />

    </motion.main>
  )
}
