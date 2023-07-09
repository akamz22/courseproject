import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {


  return (
    <div className='flex bg-gradient-to-r from-gray-200 to-gray-100 shadow-md justify-between text-xl h-12 p-3 pb-3'>

      <Link>
        <div>
          <h1 className='text-blue-400 font-serif font-bold text-2xl'>CourseBite</h1>
        </div>
      </Link>


      <div className='pb-3'>
        <ul class="flex">
          <Link to='/'>
            <li class="mr-6">
              <h1 class="text-blue-500 hover:text-blue-800 cursor-pointer" >Home</h1>
            </li>
          </Link>

          <Link to='/java'>
            <li class="mr-6">
              <h1 class="text-blue-500 hover:text-blue-800 cursor-pointer" >Java</h1>
            </li>
          </Link>
          <Link to='/python'>
            <li class="mr-6">
              <h1 class="text-blue-500 hover:text-blue-800 cursor-pointer">Python</h1>
            </li>
          </Link>

          <Link to='/js'>
            <li class="mr-6">
              <h1 class="text-blue-500 hover:text-blue-800 cursor-pointer" >JavaScript</h1>
            </li>
          </Link>

          <Link to='react-course'>
            <li class="mr-6">
              <h1 class="text-blue-500 hover:text-blue-800 cursor-pointer" >ReactJs</h1>
            </li>
          </Link>
        </ul>
      </div>


      <div className='text-white cursor-pointer hover:bg-gray-700 bg-gray-500 rounded-md px-6 h-8 ml-8'>
        Login
      </div>
    </div>
  )
}

export default Header