import React, { useState } from 'react'

export default function DropdownMenuItem(props) {
    const [open, setOpen] = useState(false);

  return (
    <li className='list-none'>
        <a href='#' className='' onClick={() => setOpen(!open)}>
            {props.option}
        </a>
        {open && props.children}
    </li>
  )
}
