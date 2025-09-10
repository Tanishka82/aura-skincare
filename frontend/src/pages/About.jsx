import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-2x1 text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md: max-w-[450px]' src={assets.imagetwo} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Discover Aura, your trusted skincare companion.We’re dedicated to helping you achieve healthier skin through high-quality, nature-inspired products. Connect with us for tips, exclusive offers, and the latest in skincare essentials!</p>
        <p>Aura is an e-commerce platform dedicated to skincare, designed to help users find products tailored to their skin concerns and preferences. Emphasizing the impact of environmental factors like pollution and the importance of gut health, Aura offers a curated selection of high-quality skincare items for both men and women. With a unique quiz feature, Aura guides users in building personalized regimens suited to their budget and skin type, creating a tailored experience. Aura’s mission, "Shades of You," reflects its commitment to supporting diverse skincare needs with science-backed products that foster healthier, radiant skin.</p>
        </div>
      </div>
    </div>
  )
}

export default About