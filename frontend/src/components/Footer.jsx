import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='py-10 bg-white-100'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Aura Logo" />
          <div className='w-full md:w-2/3 text-gray-600'>
            <p>Discover Aura, your trusted skincare companion.</p>
            <p>We’re dedicated to helping you achieve healthier skin through high-quality, nature-inspired products. Connect with us for tips, exclusive offers, and the latest in skincare essentials!</p>
          </div>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>LG 07, South Point Mall, DLF phase 5,</li>
            <li>Sector 53, Gurugram, Haryana 122022</li>
            <li>info@aura.com</li>
            <li>+91 93506 30732</li>
          </ul>  
        </div>
      </div>

      {/* Horizontal line and centered copyright */}
      <hr className='my-5' />
      <p className='py-5 text-sm text-center text-gray-600'>
        © 2024 Aura.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

