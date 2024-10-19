import React from 'react'

function Abhisek() {
  return (
    <div>
        <div className=" p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center  w-[95%] mx-auto">
      <div className="flex justify-center md:justify-start w-full  md:w-1/2">
        <img
          src="bihari.jpg"
          alt="Professional Illustration"
          className="rounded-full max-w-[300px] border-2 border-black "
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
        <h2 className="text-2xl md:text-3xl font-bold " style={{ color: 'var(--secondary-color)' }}>
          A Virtual Workplace for Professionals
        </h2>
        <p className="text-gray-600 text-lg" style={{ textAlign: "justify" }}>
        Welcome to VaishaliTech, where innovation meets creativity. Founded by Abhishek Kumar, a BTech graduate from IIIT Lucknow, our mission is to empower businesses through cutting-edge digital solutions.
At VaishaliTech, we specialize in website design, SEO, social media management, and app design, tailored to meet the unique needs of each client. Our team is dedicated to delivering high-quality services that enhance your online presence and drive growth.

We believe in building lasting relationships with our clients and providing exceptional support every step of the way. Let us help you navigate the digital landscape and achieve your business goals.
        </p>
        {/* <p className="text-gray-600 text-lg">
          Virtual Office is a power-packed and compliant website for CA, CS, Advocates, and Professional Firms as per ICAI guidelines. We offer a unique appealing web design that can replicate your workplace on an online platform so that you can create an efficient virtual presence.
        </p> */}
      </div>
    </div>
    </div>
  )
}

export default Abhisek