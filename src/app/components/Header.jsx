"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Header() {
 let [cat,setcat] = useState([]);
 useEffect(()=>{
    fetch(`https://dummyjson.com/products/categories`).then(a => a.json()).then(b => setcat(b))
 })
 
  return (
    <>
      <header className="flex items-center justify-between p-1 bg-gray-800 text-white">
        <div className="container mx-auto">
          <img className="mx-auto w-[300px] h-[100px] object-cover" src="/Alexander_McQueen_Gray800_WhiteText_Final.png"
            alt="" />
        </div>
      </header>
     <nav className='bg-cream-800 py-3'>
        <div className="container mx-auto text-black flex justify-between items-center px-4">
            <ul className='flex gap-3'>
                <li className='link text-xl'><Link href="/">Home</Link></li>
             {cat.slice(0,4).map(a => <li key={a.slug} className='list text-xl'><Link href={`/category/${a.slug}`}> {a.name}</Link></li>)}
               {cat.slice(11,12).map(a => <li key={a.slug} className='list text-xl'><Link href={`/category/${a.slug}`}> {a.name}</Link></li>)}
              <li className='link text-xl'><Link href="/contact">contact</Link></li>
            </ul>
            <div className="div flex gap-3">
              <button className='p-3 py-1 bg-gray-800 text-white rounded-sm btn'>Log In</button>
              <button className='p-3 py-1 bg-gray-800 text-white rounded-sm btn'>Sign Up</button>
            </div>
        </div>
        
      </nav>
  
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <form onSubmit={(e) => {
            e.preventDefault();
            const searchTerm = e.target.search.value.trim();
            if (searchTerm) {
              window.location.href = `/search?query=${searchTerm}`;
            }
          }} className="flex items-center gap-2">
            <input
              type="text"
              name="search"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <hr className='text-gray-800' />
    </>
  )
}

export default Header
