import React from 'react'
import "./refresh.css"
import { HiOutlineRefresh } from 'react-icons/hi';

export default function Refresh({onClick}) {
  return (
    <button onClick={onClick} className="refresh" >Refresh! <HiOutlineRefresh/></button>
  )
}
