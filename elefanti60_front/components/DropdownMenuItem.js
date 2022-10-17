import React, { useState } from 'react'

// import { UilUser, UilShoppingCart } from '@iconscout/react-unicons'


export default function DropdownMenuItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className='absolute top-7'>
      <li className='list-none'>
        <a href='#' className='' onClick={() => setOpen(!open)}>
          {props.option}
        </a>
        {open && props.children}
      </li>
    </div>
  )
}