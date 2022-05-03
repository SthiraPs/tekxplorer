import React, {useRef, useState, useEffect} from 'react'
import { submitComment } from '../services';

const CommentsForm = ({slug}) => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const commentEl =  useRef();
  const nameEl =  useRef();
  const emailEl =  useRef();
  const storeDataEl =  useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');

  }, [])

  const handleCommentSubmission = () => {
    
    const { value : comment } = commentEl.current;
    const { value : name } = nameEl.current;
    const { value : email } = emailEl.current;
    const { checked : storeData } = storeDataEl.current;

    setError(false);

    if(!comment || !name || !email)
    {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if(storeData)
    {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    }else{
      
        window.localStorage.removeItem('name', name);
        window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMsg(true);
        setTimeout(() => {
          setShowSuccessMsg(false);
        }, 4000);
      })
  }

  return (
    <div className='commentForm bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'> Comments
      </h3>

      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:right-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
          placeholder='Comment'
          name='Comment'
        />

      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input 
          type="text" 
          ref={nameEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:right-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
          placeholder='Name'
          name='Name'
        />

        <input 
          type="text" 
          ref={emailEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:right-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
          placeholder='Email'
          name='Email'
        />
      </div>
 
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div className='container'>
          <input className='cursor-pointer' ref={storeDataEl} type = "checkbox" id = "storedata" name = "storedata" value="true" />
          <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storedata'>Save my Name and Email</label>
        </div>
      </div>

      {error && <p className='text-xs text-red-500'>All fields required!</p>}

      <div className='mt-8'>
        <button 
          type='button' 
          onClick={handleCommentSubmission}
          className ='button transition duration-500 ease-linear  inline-block text-lg rounded-full text-white px-6 py-2 cursor-pointer'
        >
          Post
        </button>

        {showSuccessMsg && <span className='text-sm float-right font-semibold mt-3 text-green-500'> Comment subbmited for review!</span>}
      </div>
    </div>
  )
}

export default CommentsForm
