'use client'
import FullBleedCarousel from '@/components/base/FullBleedCarousel';
import React from 'react'

const Page = () => {
    const images = [
        'https://images.pexels.com/photos/20106953/pexels-photo-20106953/free-photo-of-groceries-at-a-market-stall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/20886322/pexels-photo-20886322/free-photo-of-tulips.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/20410205/pexels-photo-20410205/free-photo-of-a-sculpture-of-bread-and-croissants-on-top-of-a-stack-of-bread.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/18991593/pexels-photo-18991593/free-photo-of-exterior-and-patio-of-a-colorful-house-in-aswan-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ];
  return (
    <div className='max-w-md'>
    <FullBleedCarousel images={images} />

    </div>
  )
}

export default Page