import React from 'react'
import Container from './container'
import Image from 'next/image'
import Link from 'next/link'

const ProgramSection = () => {
return (
  <Container>   <div id='whyus' className= ' hidden sm:grid lg:grid-cols-2 xl:grid-cols-4 gap-4 '>
  
    <div className="card bg-bgWhite  rounded-lg flex flex-col px-2 py-4 text-black ">
    <div className='flex gap-2  items-center '><Image src={'/education.png'} className='mb-4' width={24} height={24} alt='GET'/> <Link href={'/programs'}><h1 className='text-xl hover:text-secondary mb-4 font-medium'>Bachelor's Degree</h1></Link>   </div>
      <p>We offer various bachelor degrees </p>

    </div>
       <div className="card bg-bgWhite rounded-lg flex flex-col px-2 py-4 text-black ">
        <div className='flex gap-2 items-center '><Image src={'/diploma.png'} className='mb-4' width={24} height={24} alt='GET'/>   <Link href={'/programs'}><h1 className='text-xl hover:text-secondary mb-4 font-medium'>Master's Degree</h1></Link>  </div>
  
      <p>We offer various masters degrees</p>

    </div>
       <div className="card bg-bgWhite  rounded-lg flex flex-col px-2 py-4 text-black">
       <div className='flex gap-2 items-center '><Image src={'/grant.png'} className='mb-4' width={24} height={24} alt='GET'/>    <Link href={'/programs'}><h1 className='text-xl hover:text-secondary mb-4 font-medium'>Doctorate Degree</h1></Link>  </div>
      <p>We offer different doctorate degrees</p>

    </div>
       <div className="card bg-bgWhite rounded-lg flex flex-col px-2 py-4 text-black ">
       <div className='flex gap-2 items-center '><Image src={'/tool.png'} className='mb-4' width={24} height={24} alt='GET'/>    <Link href={'/programs'}><h1 className='text-xl hover:text-secondary mb-4 font-medium'>Vocational Programs</h1></Link>  </div>
      <p>We offer various Vocational programs</p>

    </div>


  </div></Container>
)

}

export default ProgramSection