"use client"
import { BB_Button, SwitchButton } from '@/index'
import React from 'react'

const page = () => {
  return (
   <>
    <div>this is our about page...</div>
    <BB_Button value='clicke me' onClick={()=>alert('ksjshh')}/>  
      <SwitchButton onColor='yellow' offColor='white'/>
   </>
  )
}

export default page