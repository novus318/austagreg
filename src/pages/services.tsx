import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { JoinUs } from '@/components/JoinUs'
import Layout from '@/components/Layout'
import ServiSection from '@/components/ServiSection'
import React from 'react'

const Services = () => {
  return (
    <>
     <Layout
    image='https://www.austagreg.com/ogimage.png'
    title="Comprehensive Services to scale your business | Austagreg"
    description="Discover Austagreg's range of services, including Web 3 website building,Web development, vulnerability assessment, process audits, and license solutions. Elevate your online presence with our tailored solutions."
    keywords="Web 3 services, website building, vulnerability assessment,seo services,branding,digital marketing,web design, process audits, license solutions, Austagreg Singapore"
    author="Muhammed Nizamudheen M"
    canonicalUrl="https://www.austagreg.com/services"
    >
   <Header/>
   <ServiSection/>
   <JoinUs/>
   <Footer/>
   </Layout>
   </>
  )
}

export default Services