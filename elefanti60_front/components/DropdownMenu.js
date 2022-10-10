import React from 'react'
import DropdownMenuItem from './DropdownMenuItem'

export default function DropdownMenu() {
    function DropdownMenuItem(props) {
        return(
            <a href='#' className='' >
            {props.children}
        </a>
        )
    }
  return (
    <div>DropdownMenu</div>
  )
}


{/* <p className='text-center'>My Order History</p>
<p className='text-center'>Log Out</p>
<p className='text-center'>Delete Account</p>  */}