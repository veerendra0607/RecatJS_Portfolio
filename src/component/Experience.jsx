import React from 'react'
import flutter from '../assets/experience/flutter.png';
import design from '../assets/experience/ux-ui-design.jpeg'
import java from '../assets/experience/java.jpeg'
import reactImage from '../assets/experience/react.png'
import graphql from '../assets/experience/graphql.png'
import github from '../assets/experience/github.png'
import dart from '../assets/experience/download.png'

const Experience = () => {
    const tech=[
        {
            id:1,
            src:flutter,
            titel:'Flutter',
            style:'shadow-orange-500'
        },
        {
            id:5,
            src:dart,
            titel:'Dart',
            style:'shadow-sky-500'
        },
        {
            id:2,
            src:design,
            titel:'UI UX',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:java,
            titel:'JAVA',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            titel:'REACT JS',
            style:'shadow-blue-600'
        },
     
        // {
        //     id:6,
        //     src:nextjs,
        //     titel:'Next Js',
        //     style:'shadow-white'
        // },
        {
            id:7,
            src:graphql,
            titel:'Netlify',
            style:'shadow-pink-500'
        },
        {
            id:8,
            src:github,
            titel:'GitHub',
            style:'shadow-gray-500'
        },
    ]
  return (
    <div name='experince' className=' bg-gradient-to-b from-gray-800
    to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full h-full text-white'>
          <div>
              <p className='text-4xl font-bold border-b-4
              border-r-gray-500 p-2 inline'>
                 Experince 
              </p>
              <p className='py-6'> These technology i have worked on</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3
          gap-8 text-center py-8 px-12 sm:px-0 '>

              {
                  tech.map(({id,src,titel,style})=>(
                    <div key={id} 
                    className={`shadow-md hover:scale-105 duration-500py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{titel}</p>
                    </div>
                  ))
              }
          
          </div>
      </div>
    </div>
  )
}

export default Experience
