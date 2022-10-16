import React, { useState } from 'react'

// import { UilUser, UilShoppingCart } from '@iconscout/react-unicons'


export default function DropdownMenuItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className='absolute top-6 right-2/8  list-none'>
      <a href='#' className='' onClick={() => setOpen(!open)}>
        {props.option}
      </a>
      {open && props.children}
    </li>

  )
}