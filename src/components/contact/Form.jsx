'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';

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

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {

    const toastId = toast.loading("Sending your message, please wait...")

    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params,
         {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: {
            throttle: 5000,
        }
      })
      .then(
        () => {
          toast.success('I have received your spell, I will get back real soon..', {
            id: toastId
          })
        },
        (error) => {
            toast.error('Oops!, try checking the ingredients of your spell.', {
                id: toastId
            })
        },
      );
  };

  const onSubmit = data => {
    const templateParams = {
        to_name: "Ifrit.n",
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
    }
    sendEmail(templateParams)
  };
  console.log(errors);
  
  return (
    <> 
    <Toaster richColors={true} /> 

    <motion.form 
    variants={container}
    initial="hidden"
    animate="show"
    onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>

      <motion.input 
      variants={item}
      type="text" placeholder="Name" {...register("name", {required: 'This field is Required!',
        minLength: {
            value: 3,
            message: "Name should be atleast 3 characters."
        }
      })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2
      focus:ring-accent/50 custom-bg'/>
      {
        errors.name && <motion.span variants={item} 
        className='inline-block self-start text-accent'>{errors.name.message}</motion.span>
      }
      <motion.input 
      variants={item}
      type="email" placeholder="Email" {...register("email", {required: 'This field is Required!'})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2
      focus:ring-accent/50 custom-bg'/>
      {
        errors.email && <motion.span variants={item} 
        className='inline-block self-start text-accent'>{errors.email.message}</motion.span>
      }
      <motion.textarea 
      variants={item}
      placeholder='Type your message' {...register("message", {required: 'This field is Required!', 
      maxLength: {
        value: 500,
        message: 'Message should be less than 500 characters.'
      }, minLength: {
        value: 20,
        message: 'Message should be more than 20 characters.'
      }})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2
      focus:ring-accent/50 custom-bg'/>
      {
        errors.message && <motion.span variants={item}
        className='inline-block self-start text-accent'>{errors.message.message}</motion.span>
      }
      <motion.input 
      variants={item}
      whileHover={{
        scale:1.05, transition: {duration:0.3}
    }}
      value="drop your spell"
      className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
      cursor-pointer capitalize'
      type="submit" />
    </motion.form>
    </>
  );
}