import React from 'react'
import '../style/header.css'
import { Button } from './button'
export const Header=()=>{
    return (
        <div className='header-container'>
           <p className='title'>DEVDUO</p>
           <div className='sub-container'>
             <p className='vision'>vision</p>
             <p className='Aboutus'>Aboutus</p>
             <Button href={''} text={'Login/Signup'}  />
           </div>
        </div>
    )
}