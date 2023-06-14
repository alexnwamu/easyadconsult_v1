import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import Container from '../components/container'
import Link from 'next/link'
const programs = () => {
  let [categories] = useState({
    "Bachelor Programs": [
      {
        title: 'Medicine',
      },
      {
        title: 'Nursing',
      },{
        title: 'Computer Science',
      },{
        title: 'Business Administration ',
      },{
        title: 'Pharmacy',
      },{
        title: 'Economics',
      },{
        title: 'Dentistry',
      },{
        title: 'Aeronautical Engineering(Aircraft Engineering',
      },
      {
        title: "Civil Engineering",
      },
      {
        title: "Marketing",
      },
      {
        title: "Architecture",
      }, {
        title: "Electrical and Electronic Engineering",
      }, {
        title: "Computer Engineering",
      }, {
        title: "International relations",
      },{
        title: "Public Administration and Politics",
      },{
        title: "Mass Communication and PR",
      },{
        title: "Finances",
      },{
        title: "American Studies",
      },
       {
        title: "Sociology",
      },
      {
        title: "Information Technology (I.T)",
      },
      {
        title: "English Philosophy",
      },
      {
        title: "Physical Medicine and Rehabilitation",
      },
      {
        title: "Tourism",
      },
    ],
    "Master Programs": [
      {
        title: 'Masters in Business Adminstration (MBA)',
      },
      {
        title: 'Master of Information Technology ',
      },{
        title: 'Master of Computer Science',
      },{
        title: 'Master of Applied Genetics ',
      },{
        title: 'Master of Education Management',
      },{
        title: 'Master of Biomedical Engineering',
      },{
        title: 'Master International Marketing',
      },{
        title: 'Master of Management',
      },
      {
        title: "Master of International Relations & Politics",
      },
      {
        title: "Public Helath Managemnt and Health Policy",
      },
      {
        title: "Mass Communication and Media Studies",
      },
    ],
    "Doctorate Programs": [
      {
        title: 'PhD in Medicine',
      },
      {
        title: 'PhD in Economics',
      },
      {
        title: 'PhD in Management',
      },{
        title: 'PhD in Computer Science',
      },{
        title: 'Business Administration (PhD)',
      },{
        title: 'Education Science (PhD)',
      },{
        title: 'Biomedical Engineering',
      },{
        title: 'International Doctoral Program in Mathematics',
      },
      {
        title: "Environmental Fluid Mechanics (Ph.D)",
      },
      {
        title: "Tourism and Hospitality Management (Ph.D)",
      },
      {
        title: "American Studies (PhD)",
      },
      {
  
        title: "Education Science (PhD)",
       
      },
    ],
    "Vocational Programs": [
      {
        title: 'Aeronautical Engineering(Aircraft Engineering',
      },
      {
        title: 'Piloting (Commercial Pilot License - CPL)',
      },
      {
        title: 'Piloting (Commercial Pilot License - CPL Helicopter',
      },{
        title: 'Piloting(Private Pilot License -PPL)',
      },{
        title: 'Cabin Crew Training',
      },{
        title: 'Customs Brokerage',
      },
    ],
  })

  return (
    <Container className=' mt-[100px]'>
      <div className='text-center mb-4'>
       <h1 className=' text-2xl md:text-4xl text-primary mb-2'>List of Programs</h1>   
       <p className='text-sm'>Here's a list of the various programs we offer</p>
      </div>
   
      <Tab.Group>
        <Tab.List className="grid grid-cols-4 sm:grid-cols-4 space-x-1 rounded-xl bg-bgWhite p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-[13px] sm:text-sm font-medium leading-5 text-primary',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-secondary focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-secondary hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl'
              )}
            >
              <ul className='list-disc '>
                {posts.map((post,index) => (
                  <li
                    key={index}
                    className="relative ml-4  rounded-md p-2 "
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <Link scroll={false} href={'/#contactform'}><button className=' mt-4 px-6 py-2 text-white bg-secondary rounded-md '>Apply Now</button></Link>
    </Container>
  )
}



export default programs