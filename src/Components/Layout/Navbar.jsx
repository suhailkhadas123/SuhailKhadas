import React from 'react'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'  ;
import {useGithubUser} from '../Api/UserDetailApi.jsx';
function Navbar() {
    const [menuOpen, setmenuOpen]=useState(false);
    const {user,loading,error}= useGithubUser();
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }
  return (
    <header className='sticky top-0 z-50 backdrop-blur-xl bg-opacity-70 border-b border-borderSoft/80 --color-bg --color-text --color-border'>
        <nav className='mx-auto flex min-h-20 w-[min(1120px,calc(100%-1.5rem))] items-center justify-between gap-4'>
            <a href="#home" className="inline-flex items-center gap-3 font-display text-lg font-semibold tracking-wide text-textMain">
             
                    <span viewBox="0 0 64 64" className="h-6 w-6" fill="none" aria-hidden="true">
                        <img src={user.avatarUrl} alt={`${user.username}'s avatar`} className="h-6 w-6 rounded-full" />
                   
                </span>
                <span>{user.username}</span>
            </a>
            <div className="hidden items-center gap-6 md:flex  ">
                <a href="#about" className="text-sm text-textSoft hover:text-textMain">About Me</a>
                <a href="#projects" className="text-sm text-textSoft hover:text-textMain"> Projects  </a>
                <a href="#skills" className="text-sm text-textSoft hover:text-textMain">Skills</a>    
            </div>
            <button onClick={() => setmenuOpen(!menuOpen)} className="md:hidden text-2xl text-textMain flex cursor-pointer">
                {menuOpen ? <FiX /> :<FiMenu />}    
            </button> 
       </nav>
        {menuOpen && ( <div className="mx-auto flex w-[min(1100px,calc(100%-1.5rem))] flex-col gap-4 pb-4 "> 
            <a href="#about" className="text-sm text-textSoft" onClick={() => setMenuOpen(false)}> About Me </a> 
            <a href="#projects" className="text-sm text-textSoft" onClick={() => setMenuOpen(true)}> Projects </a> 
            <a href="#skills" className="text-sm text-textSoft" onClick={() => setMenuOpen(true)}> Skills </a> </div> )}
    </header>
  )
}

export default Navbar
