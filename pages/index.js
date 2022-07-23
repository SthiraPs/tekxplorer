import Head from 'next/head'
import { PostCard, Categories, PostWidget, Footer } from '../components/index';
import {getPosts} from '../services/index'
import {FeaturedPosts} from '../sections'

export default function Home({posts}) {

  return (

    <div className="mx-auto px-10 mb-8">
      <Head>
        <title>tekXplorer</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/34cfd915df.js" crossOrigin="anonymous"></script>
      </Head>

      <FeaturedPosts/>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-2'>

        <div className='lg:col-span-9 col-span-4 flex flex-row flex-wrap'>
          {
            posts.map((post) =>  <PostCard post ={post.node} key={post.node.title}/>)
          }
        </div>

        <div className='lg:col-span-3 col-span-1'>
          <div className='lg:sticky relative top-8'>
              <PostWidget/>
              <Categories/>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export async function getStaticProps()
{
  const posts = (await getPosts() || []);

  return {
    props : {posts}
  }
}