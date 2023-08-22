import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context'

const Navbar = () => {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();
  return (
    <div className='w-full flex justify-between'>
      <div className='w-full flex items-center justify-center font-sans text-[24px] mt-3 ml-20 tracking-widest text-white'>
        DApp Social Media
      </div>
      <div className='text-white '>

        <button onClick={() => {
          if(address) navigate('/profile')
          else connect()
        }}>
          {address ? address : "Connect"}
        </button>
      </div>
    </div>
  )
}

export default Navbar