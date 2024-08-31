'use client'
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import { motion } from "framer-motion";

const container = {
  hidden: {opacity:0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}
const item = {
  hidden: {scale :0},
  show: {scale: 1}
}
export default function Home() {
  
  return (
    <>
      <Image
        priority
        sizes="100wv"
        src={bg}
        alt="background-image"
        className="-z-50 w-full fixed top-0 left-0 h-full object-cover object-center opacity-65"
      />          
          <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
            <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
              <motion.h1 variants={item}
              className="text-accent font-semibold text-center text-4xl capitalize">
                summon me
              </motion.h1>
              <p className="text-center font-light text-sm xs:text-base text-shadow-lg">
              Enter the mystical circle and let your words become threads in the tapestry of the universe. 
              Whether you aim to forge partnerships, reveal secrets, or share stories of escapades, 
              your words are cherished within this domain. Utilize the form below to dispatch your messages 
              through the otherworldly network, and anticipate the mystical echoes in return.
              </p>
            </motion.div>
          <Form />
          </article>
    </>
  );
}
