import React from 'react'
import { GrCompliance, GrRisk, GrTest } from 'react-icons/gr'
import { MdSecurity } from 'react-icons/md'

const Vulnerablity = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 mx-auto">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-wide mont sm:text-2xl md:text-3xl mont-heavy text-[#004AAD]">Vulnerability Assessment and Testing Services</h2>
        <p className="text-black text-sm md:text-base">
        At Austagreg, we understand the critical importance of cybersecurity. Our comprehensive vulnerability assessment and testing services are designed to identify and address potential weaknesses in your digital infrastructure. Trust us to fortify your defenses and protect your valuable assets.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200  bg-[#DCFFCD] ">
            <GrTest className="w-8 h-8 text-[#004AAD]" />
          </div>
          <div className="space-y-1 text-center">
            <h3 className="text-lg font-bold tracking-wide mont sm:text-xl md:text-2xl"> Penetration Testing</h3>
            <p className="text-sm text-gray-500">Ensure the robustness of your cybersecurity measures with our penetration testing services. Our expert ethical hackers simulate real-world cyberattacks to identify vulnerabilities and strengthen your defenses.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200  bg-[#DCFFCD] ">
            <MdSecurity className="w-8 h-8 text-[#004AAD]" />
          </div>
          <div className="space-y-1 text-center">
            <h3 className="text-lg font-bold tracking-wide mont sm:text-xl md:text-2xl">Security Audits</h3>
            <p className="text-sm text-gray-500">
            Proactively manage your cybersecurity with our regular security audits. Our team conducts in-depth assessments to identify vulnerabilities, ensuring a resilient defense against potential threats.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200  bg-[#DCFFCD] ">
            <GrRisk className="w-8 h-8 text-[#004AAD]" />
          </div>
          <div className="space-y-1 text-center">
            <h3 className="text-lg font-bold tracking-wide mont sm:text-xl md:text-2xl">Risk Assessment</h3>
            <p className="text-sm text-gray-500">
            Understand and mitigate potential risks to your business with our comprehensive risk assessment services. We analyze your digital landscape to provide insights into potential threats and vulnerabilities.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200  bg-[#DCFFCD] ">
            <GrCompliance className="w-8 h-8 text-[#004AAD]" />
          </div>
          <div className="space-y-1 text-center">
            <h3 className="text-lg font-bold tracking-wide mont sm:text-xl md:text-2xl">Compliance Testing</h3>
            <p className="text-sm text-gray-500">
            Ensure that your systems comply with industry regulations and standards. Our compliance testing services help you meet legal and regulatory requirements while maintaining a secure environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Vulnerablity