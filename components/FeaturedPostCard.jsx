import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="featuredPost relative h-36">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-lg inline-block w-full h-36 border-2" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-60 from-gray-100 via-gray-700 to-black w-full h-36" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
            <p className="text-white  text-shadow font-medium text-xl text-center">{post.title}</p>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
                 <p className="text-white mb-0 text-shadow font-medium text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            </div>
        </div>
        <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;