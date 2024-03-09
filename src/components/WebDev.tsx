import { IconAppsFilled } from '@tabler/icons-react'
import React from 'react'
import { BiCode, BiStore, BiSupport } from 'react-icons/bi'

const WebDev = () => {
  return (
    <div className="py-8 lg:py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col gap-4 items-center justify-center text-cente">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl mont-heavy text-[#004AAD]">Web Dev</h1>
          <p className="mx-auto text-black text-sm md:text-base">
            At Austagreg, we specialize in providing comprehensive web development services to help businesses establish a strong and impactful online presence. Our team of experienced developers is committed to delivering high-quality solutions tailored to your unique needs. Explore our range of web development services below:
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white px-4 py-4 items-center shadow-sm">
              <BiCode className="h-6 w-6 mr-4 flex-shrink-0 text-[#7ED957]" />
              <div className="grid gap-1">
                <h3 className="font-semibold text-[#004AAD]">Custom Website Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Catch bugs before they reach production with automated code review.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white px-4 py-4 items-center shadow-sm">
              <BiStore className="h-6 w-6 mr-4 flex-shrink-0 text-[#7ED957]" />
              <div className="grid gap-1">
                <h3 className="font-semibold text-[#004AAD]">E-Commerce Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ship updates to your app with the push of a button using automated CI/CD.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white px-4 py-4 items-center shadow-sm">
              <IconAppsFilled className="h-6 w-6 mr-4 flex-shrink-0 text-[#7ED957]" />
              <div className="grid gap-1">
                <h3 className="font-semibold text-[#004AAD]">Web Application Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Make your site faster with performance analysis and optimization.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white px-4 py-4 items-center shadow-sm">
              <BiSupport className="h-6 w-6 mr-4 flex-shrink-0 text-[#7ED957]" />
              <div className="grid gap-1">
                <h3 className="font-semibold text-[#004AAD]">Maintenance and Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Find and fix vulnerabilities with automated security scanning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default WebDev