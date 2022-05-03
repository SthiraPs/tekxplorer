import Link from 'next/link';
import React from 'react'
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';
import {BsFillTelephoneFill} from 'react-icons/bs';



const Footer = () => {
  return (
    <>
<footer className="footer text-center bg-gray-900 text-white">
  <div className="px-6 pt-6">
    <div className="flex justify-center mb-6">


      
    <div className='md:float-left block'>
        <span className='footertitle cursor-pointer font-bold text-4xl text-white'>
            <span className='tek'>tek</span>
            <span className='letterX text-5xl'>X</span>
            <span>plorer</span>

        </span>
    </div>
      

      
    </div>


    <div className="mb-10 mt-10">
      <p className='ml-10 mr-10 text-sm'>
        tekXplorer gives you the necessary knowledge in cuting edge technologies like Artificial Intelligence, Machine Learning, Data Science, Blockchain, Cryptography and many more. Make sure to subscribe and get notification of latest posts.
      </p>
    </div>

    <div className="mb-10 mt-4 ">
      <button className='ml-10 mr-10 text-sm  border-2 py-2 px-6 rounded-md hover:border-blue-300 hover:scale-105 transition duration-200'>
        Become an Xplorer
      </button>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 mb-10">
      <div className="mb-6 ml-60 text-left border-r-2">
        <h5 className="uppercase font-bold mb-8 text-left tracking-widest">Sections</h5>

        <ul className="list-none mb-0">
          <li>
            <a href="#!" className="text-white footerLinks">About</a>
          </li>
          <li>
            <a href="#!" className="text-white footerLinks">Contact us</a>
          </li>
          <li>
            <a href="#!" className="text-white footerLinks">Privacy Policy</a>
          </li>
          <li>
            <a href="#!" className="text-white footerLinks">Terms and Conditions</a>
          </li>
        </ul>
      </div>

      <div className="mb-6 text-center border-r-2">
        <h5 className="uppercase font-bold  mb-8 tracking-widest">Stories</h5>

        <ul className="list-none mb-0">
          <li>
            <a href="#!" className="text-white footerLinks">Wanna know how did I build this site?</a>
          </li>
          <li>
            <a href="#!" className="text-white footerLinks">Wanna find more interesting projects?</a>
          </li>
          <li>
            <a href="#!" className="text-white footerLinks">How did I deleveloped my self...</a>
          </li>
          <li>
            <a href="#!" className="text-white footerLinks">My story</a>
          </li>
        </ul>
      </div>

      <div className="mb-6 mr-60 text-right ">
        <h5 className="uppercase font-bold mb-8 tracking-widest">Connect</h5>

        <ul className="list-none mb-0 ">
          <li className='mb-4 text-righ'>

          <span className=' text-2xl flex flex-row'>

            <BsGithub className='ml-32 footerLinks cursor-pointer'/>
            <BsLinkedin className='ml-6 footerLinks cursor-pointer'/>
            <BsStackOverflow className='ml-6 footerLinks cursor-pointer'/>

          </span>

          </li>
          <li className='mb-4 text-righ'>
              <span className="text-white text-sm footerLinks flex flex-row float-right">
                <BsFillEnvelopeFill  className='mr-4 mt-1'/>
                <p>connect@texplorer.com</p>
              </span>

          </li>
          <li className='ml-14'>
              <span className="text-white text-sm footerLinks flex flex-row float-right mt-3">
                <BsFillTelephoneFill className='mr-4 mt-1'/>
                <p>(+94) 118 827 291</p>
              </span>

          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center text-sm p-4 bg-gray-900">
    © 2022 Copyright 
    &nbsp;

    <a className="text-white hover:text-blue-300" href="https://tekxplorer.com/"> 
        <span className='text-md '>
            tek
        </span>
        <span className='text-lg '>
            X
        </span>
        <span className='text-md '>
            plorer
        </span>
    </a>
  </div>
</footer>
    </>
  );
}

export default Footer