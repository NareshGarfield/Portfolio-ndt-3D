'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

const ItemLayout = ({children, className}) => {
    return (
        <motion.div 
        initial={{scale:0}}
        whileInView={{scale: 1}}
        whileHover={{
            scale:1.03, transition: {duration:0.4}
        }}
        transition={{duration: 0.5}}
        viewport={{once: true}}
        className={clsx("custom-bg p-6 ms:p-8 rounded-xl flex items-center justify-center space-y-8",
            className
        )}>
            {children}
        </motion.div>
    )
}

export default ItemLayout;