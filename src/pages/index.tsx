import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Layout from "@/components/Layout";
import Solutions from "@/components/Solutions";
import Vision from "@/components/Vision";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
   <>
   <Layout
    image='https://www.austagreg.com/ogimage.png'
    title="Welcome to Austagreg - Your Web 3 Solutions Partner"
    description="Austagreg offers comprehensive Web 3 solutions, vulnerability assessment, process audits, license solutions, and more. Explore our services for a secure and efficient online presence."
    keywords="Web 3, website building,vulnerability assessment,process audits,license solutions,Singapore,web devlopment"
    author="Muhammed Nizamudheen M"
    canonicalUrl="https://www.austagreg.com/"
    >
   <Header/>
   <Hero/>
   <Vision/>
   <Highlight/>
   <Solutions/>
   <WhyUs/>
   <Footer/>
   </Layout>
   </>
  );
}
