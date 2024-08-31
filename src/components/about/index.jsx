
import React from 'react'
import ItemLayout from './ItemLayout';
import Link from 'next/link';

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
            <ItemLayout className='col-span-full lg:col-span-8 row-span-2 flex-col items-start'>
                <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                The Data Alchemist
                </h2>
                <p className='font-light text-xs sm:text-sm md:text-base'>
                In the mystical world of data science, where algorithms plays like pirates and datasets 
                whisper ancient secrets, I am on a heroic journey to decode the language of numbers and unlock the 
                boundless potential of information, forging a new destiny with every line of code written. I continue 
                to explore the treasures and technologies to shape the future of Data Science.
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                    3+ <sub className='font-semibold text-base'>Clients</sub>
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
            <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                    0-1 <sub className='font-semibold text-base'>Years of Experience</sub>
                </p>
            </ItemLayout>

            <ItemLayout 
                className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
                <img className='w-full h-auto'
                src="https://github-readme-stats.vercel.app/api/top-langs?username=NareshGarfield&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" 
                alt="Ifrit" 
                loading='lazy'/>
            </ItemLayout>
            <ItemLayout  
                className={"col-span-full md:col-span-8 !p-0"}>
                <img className='w-full h-auto'
                src="https://github-readme-stats.vercel.app/api?username=NareshGarfield&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" 
                alt="Ifrit" 
                loading='lazy'/>
            </ItemLayout >
            <ItemLayout 
                className={"col-span-full"}>
                <img className='w-full h-auto'
                src="https://skillicons.dev/icons?i=js,html,css,aws,discord,bots,dotnet,gcp,github,gmail,instagram,java,linkedin,linux,mint,mongodb,mysql,nodejs,prisma,py,raspberrypi,react,supabase,tailwind,threejs,twitter,ts,vercel,visualstudio,vscode" 
                alt="Ifrit" 
                loading='lazy'/>           
            </ItemLayout >
            <ItemLayout 
                className={"col-span-full md:col-span-6 !p-0"}>
                <img className='w-full h-auto'
                src="https://github-readme-streak-stats.herokuapp.com?user=NareshGarfield&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
                alt="Ifrit" 
                loading='lazy'/>
            </ItemLayout >
            <ItemLayout
                className={"col-span-full md:col-span-6 !p-0"}>
                <Link 
                href={'https://github.com/NareshGarfield/Spotify-clone'}
                target='_blank'
                className='w-full'>
                <img className='w-full h-auto'
                src="https://github-readme-stats.vercel.app/api/pin/?username=NareshGarfield&repo=Spotify-clone&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" 
                alt="Ifrit" 
                loading='lazy'/>
                </Link>
            </ItemLayout >
        </div>
    </section>
  )
}

export default AboutDetails;