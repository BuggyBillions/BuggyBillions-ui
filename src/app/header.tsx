import React from 'react'

const header = () => {
  return (
    <nav>
        <div>
            <h1>Logo</h1>
        </div>
       
        <div className='flex gap1'>
            <button className='nav-but'>get started with docs</button>
            
            <button className='flex menu-but '>
               
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
                </div>
                <span className=' xs:hidden md:block'>Menu</span>
            </button>

            
        </div>
 
    </nav>
  )
}

export default header