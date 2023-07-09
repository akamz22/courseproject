import React from 'react'
import Java from '../assets/java.png'
import JS from '../assets/Js.png'
import PY from '../assets/python.png'
import ReactImg from '../assets/reactimg.png'
import { Link } from 'react-router-dom'
const Body = () => {
  return (
    <div className='flex h-[100vh] p-5 bg-gradient-to-r from-gray-100 to-gray-300 justify-center items-center'>
      <Link to='/java'>
        <div className='bg-gradient-to-r from-gray-200 to-gray-100 shadow-md h-60 w-50 p-2 m-4 cursor-pointer'>
          <img alt='Not Found' className='h-40 w-40' src={Java} />
          <h1 className='flex justify-center'>Java</h1>
        </div>
      </Link>
      <Link to='/python'>
        <div className='bg-gray-100 bg-gradient-to-r from-gray-200 to-gray-100 shadow-md h-60 w-50 p-2 m-4 cursor-pointer'>
          <img alt='Not Found' className='h-40 w-40' src={PY} />
          <h1 className='flex justify-center'>Pyhton</h1>
        </div>
      </Link>
      <Link to='/js'>
        <div className='bg-gray-100 bg-gradient-to-r from-gray-200 to-gray-100 shadow-md h-60 w-50 p-2 m-4 cursor-pointer'>
          <img alt='Not Found' className='h-40 w-40' src={JS} />
          <h1 className='flex justify-center'>JavaScript</h1>
        </div>
      </Link>
      <Link to='/react-course'>
        <div className='bg-gray-100 bg-gradient-to-r from-gray-200 to-gray-100 shadow-md h-60 w-50 p-2 m-4 cursor-pointer'>
          <img alt='Not Found' className='h-40 w-40' src={ReactImg} />
          <h1 className='flex justify-center'>React</h1>
        </div>
      </Link>
    </div>
  )
}

export default Body