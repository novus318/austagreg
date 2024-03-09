import { ContactForm } from '@/components/ContactForm'
import Footer from '@/components/Footer'
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
        <div className="p-4 rounded-lg m-4 transform hover:scale-105 transition-transform duration-300">
  <p className="font-bold text-lg">AUSTAGREG HQ</p>
  <p className="text-base">201, Apex@Henderson</p>
  <p className="text-base">Singapore 159545</p>
</div>

        <Footer/>
      </Layout>
    </>
  )
}

export default Contact