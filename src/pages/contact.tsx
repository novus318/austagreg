import { ContactForm } from '@/components/ContactForm'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import React from 'react'

const Contact = () => {
  return (
<>
<Layout
    image='https://www.austagreg.com/ogimage.png'
    title="Contact Austagreg: Your Partner for Web Solutions"
    description="Connect with Austagreg for top-notch Web 3 solutions, vulnerability assessment, process audits, and license solutions. Our expert team is ready to assist you in enhancing your online presence"
    keywords="Contact Austagreg, Web 3 solutions, vulnerability assessment, process audits, license solutions, Austagreg Singapore"
    author="Muhammed Nizamudheen M"
    canonicalUrl="https://www.austagreg.com/services"
    >
   <Header/>
   <ContactForm/>
   </Layout>
   </>
  )
}

export default Contact