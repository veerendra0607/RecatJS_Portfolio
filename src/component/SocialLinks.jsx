import React from 'react'
import {FaGithub,FaLinkedin, FaBars} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <> LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/veerendra-hullatti',
            style:'rounded-tr-md'

        },
        {
            id:2,
            child:(
                <> GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/veerendraH06',

        },
        {
            id:3,
            child:(
                <> Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:vhhullatti94@gmail.com',
           

        },
        {
            id:4,
            child:(
                <> Resume <BsFillPersonFill size={30}/>
                </>
            ),
            href:'/Veerendra H CVO.pdf',
            style:'rounded-br-md',
            download:true,

        },
    ]
  return (
    <div className='hidden md:flex lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
          {
              links.map(({id,child,href,style,download})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'}>
              <a href={href} 
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel="noreferrer"
              >
                  {child}
                  </a>
                  <div>
                      
                  </div>
                  </li>
              ))}
              <div className='cursor-pointer pr-5'>
<FaBars size={30}/>
              </div>
          
      </ul>
      <div className='cursor-pointer pr-10'>
          <FaBars size={100}/>
      </div>
    </div> 
  )
}

export default SocialLinks
