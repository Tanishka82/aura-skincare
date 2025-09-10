import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className='pt-10 border-t'>
      {/* Centered Title */}
      <div className='text-center text-2xl'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Content Section */}
      <div className='my-10 flex flex-col items-center justify-center md:flex-row gap-10 mb-28'>
        {/* Image Section */}
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us" />

        {/* Contact Details */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <p>LG 07, South Point Mall, DLF phase 5,</p>
          <p>Sector 53, Gurugram, Haryana 122022</p>
          <p>info@aura.com</p>
          <p>+91 93506 30732</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
    
  );
}

export default Contact;
 