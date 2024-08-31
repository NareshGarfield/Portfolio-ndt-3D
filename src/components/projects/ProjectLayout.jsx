import { motion } from 'framer-motion';
import Link from 'next/link'
import React from 'react'

const item = {
    hidden: {opacity :0, y:100},
    show: {opacity: 1, y:0}
}
const NavLink = motion(Link);

const ProjectLayout = ({name, description, date, demoLink}) => {
  return (
    <NavLink 
    variants={item}
    whileHover={{
        scale:1.1, transition: {duration:0.3}
    }}
    href={demoLink}
    target={'_blank'}
    className='flex text-sm md:text-base items-center justify-between w-full relative
    rounded-lg overflow-hidden p-4 md:p-6 custom-bg'>
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='text-accent'>
                {name}
            </h2>
            <p className='text-gray-300'>
                {description}
            </p>
        </div>
        

        <p className='text-yellow-100 sm:text-foreground'>
            {new Date(date).toDateString()}
        </p>
    </NavLink>
  )
}

export default ProjectLayout