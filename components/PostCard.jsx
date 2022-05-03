import React from 'react';
import Link from 'next/link';
import moment from 'moment';

const PostCard = ({ post }) => {

  return (
    <span className='post relative bg-white shadow-lg rounded-lg p-0 lg:p-4 pb-12 mb-8 mr-8 mt-0'>

        <div className='relative overflow-hidden shadow-md pb-40 mb-6'>
          { <img 
              src={post.featuredImage.url}
              alt={post.title}
              className='object-top absolute h-40 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
          /> }
        </div>

        <h1 className='transition duration-200 text-center mb-8 cursor-pointer hover:text-blue-900 text-2xl font-semibold'>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>

        </h1>

        <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-16'>
                <img 
                  alt = {post.author.name}
                  height= "25px"
                  width="25px"
                  className='align-middle rounded-full'
                  src={post.author.photo.url}
                />
                <p className='inline text-sm align-middle text-gray-700 ml-3'>
                  {post.author.name}
                </p>
            </div>

            <div className='font-medium text-gray-700'> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>

              <span>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
        </div>

        <p className='text-center text-md text-gray-700 font-normal p-1 mb-6'>
          {post.excerpt}
        </p>
        
        <div className='text-center '>
          <span className='readmore transition duration-200 border-solid border-2 border-blue-900 transform hover:text-white inline-block text-lg font-medium rounded-md px-4 py-2 cursor-pointer'>
            <Link href={`/post/${post.slug}`}>
              Read more
            </Link>
          </span>
        </div>
    </span>
  )
}

export default PostCard