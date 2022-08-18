import React from 'react'

const About = () => {
  return (
    <div name='about' className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col first-letter:justify-center w-full h-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                  About
              </p>
          </div>
           <h2 className='text-4xl sm:text-7xl font-bold text-white py-4'>
            Hi. I'm Veerendra Hullatti
          </h2>
          <p className='text-xl mt-20'>
          I have Completed my “Bachelor of Engineering (CSE)” from STJ Institute of Technology, Ranebennur, 
          I love to share my technical knowledge by writing programming blogs, I even like to use new tech Gadgets. 
          I am interested mostly in Mobile Application Development mostly on Flutter , UI Designing and currently beginner in React JS Development.
          </p>
          <br/>
<p className='text-xl'>
 I'm a Freelance Mobile App Developer  & Designer based in India.
Highly experienced in Developing & Designing custom Flutter & react applications and websites.
</p>
<br/>
      </div>
    </div>
  )
}

export default About
