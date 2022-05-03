import Link from 'next/link';
import React , {useState, useEffect} from 'react'
import { getCategories } from '../services/index';
import {SpinnerLoading} from './'
import { motion } from 'framer-motion';
  
const Header = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories()
        .then((newCategories) => setCategories(newCategories))
    },[]);
  
  
  

  return (
    <div className='mx-auto px-10 mb-8'>
        <div className='header border-b w-full inline-block border-blue-400 py-8'>

            <div className='md:float-left block'>
                <Link href="/">
                    <motion.span initial = "hidden" animate = "visible" variants= {{
                        hidden :{
                            scale : 0.8,
                            opacity : 0
                        },
                        visible :{
                            scale :1,
                            opacity: 1,
                            transition: {
                                delay : .6
                            }
                        }
                    }}>
                        <span className='title cursor-pointer font-bold text-5xl text-white'>
                            <span className='tek'>tek</span>
                            <span className='letterX text-6xl'>X</span>
                            <span>plorer</span>

                        </span>
                    </motion.span>

                    
                </Link>
            </div>

            <div className=' hidden md:float-left md:contents'>
                {
                    categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='categories md: float-right mt-4 text-lg align-middle text-white ml-6 font-medium cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header