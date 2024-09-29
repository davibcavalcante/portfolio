import { useState, useRef, useEffect, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import TextExperience from './TextExperience'

import { frontend, backend, code, design } from '../../utils/exportImages'
import { textExperiences } from '../../utils/exportExperiences'
import useOnScreen from '../../hooks/useOnScreen'

const About = forwardRef((props, ref) => {
    const isVisible = useOnScreen(ref);

    const [timelineStatus, setTimelineStatus] = useState(false);
    const timelineRef = useRef(null);

    const timeline = () => {
        setTimelineStatus(!timelineStatus);
    }

    useEffect(() => {
        if (timelineStatus && timelineRef.current) {

            const timelineElement = timelineRef.current;
            const topOffset = - 100;

            const elementTop = timelineElement.getBoundingClientRect().top;
            const offsetPosition = elementTop + window.pageYOffset + topOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, [timelineStatus]);

    useEffect(() => {
        if (timelineStatus) {
            document.querySelector('body').style.overflow = 'hidden'
        }

        if (!timelineStatus) {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [timelineStatus])

    const skills = [
        { name: 'Frontend', skills: frontend },
        { name: 'Backend', skills: backend },
        { name: 'Código', skills: code },
        { name: 'Design', skills: design },
    ]

    return (
        <section className={`py-8 px-4 flex flex-col gap-8 relative ${timelineStatus ? 'bg-black' : 'bg-blue'} min-h-screen duration-300 overflow-hidden 2xl:py-16 2xl:px-52`} ref={ref}>
            <section className='flex flex-col gap-8 2xl:flex-row 2xl:justify-between'>
                {isVisible && <motion.section
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='flex flex-col gap-4 2xl:w-6/12'
                >
                    <h1 className='text-white text-5xl font-bold lg:text-6xl'>Sobre Mim</h1>
                    <section className='flex flex-col gap-4'>
                        <h2 className='text-opaque text-3xl lg:text-4xl'>Olá, sou <strong className='text-white'>Davi Cavalcante</strong></h2>
                        <p className='text-opaque text-lg lg:text-xl 2xl:leading-relaxed'>Tenho 1 ano de experiência em Desenvolvimento Web, durante esse período tive contato com: Html, Css, Js, React, Node, Java e Python de linguagens de programação. Porém, a minha experiência vai além, tive a oportunidade de lidar também com: Linux, MongoDB, MySQL, AWS, Digital Ocean e, para versionamento de código, Git e Github. Apesar de ser estudante em programação há pouco tempo, desde Dezembro de 2022, durante esse tempo tive o prazer de lidar com diversos desafios dentro da programação.</p>
                    </section>
                    <section className='hidden 2xl:block 2xl:self-end'>
                        <button onClick={timeline} className='bg-light-blue text-white text-xl font-semibold px-8 py-2 rounded-sm shadow-xl tracking-wider'>CARREIRA</button>
                    </section>
                </motion.section>}

                <section className='flex flex-col gap-4 2xl:w-5/12'>
                    {isVisible && <motion.h2
                        className='text-white text-3xl'
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Principais Habilidades
                    </motion.h2>}
                    {isVisible && <section className='flex flex-col gap-4 overflow-hidden lg:flex-row lg:flex-wrap 2xl:flex-col'>
                        {skills.map((item, index) =>
                            <motion.section
                                key={item.name}
                                className={`${timelineStatus ? 'bg-black' : 'bg-dark-blue'} p-4 rounded-xl lg:w-full 2xl:w-full`}
                                initial={{ opacity: 0, x: 1000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 2 + (index / 3) }}
                            >
                                <h3 className='text-opaque text-2xl mb-4'>{item.name}:</h3>
                                <section className='flex gap-4 overflow-x-auto'>
                                    {item.skills.map((item, index) =>
                                        <img src={item} alt="" className={`bg-white p-1 rounded-full w-14`} key={index} />
                                    )}
                                </section>
                            </motion.section>
                        )}
                    </section>}
                </section>
            </section>

            <section className={`bg-dark-blue w-11/12 h-timeline absolute left-1/2 -translate-x-1/2 overflow-auto ${timelineStatus ? 'block' : 'hidden'}`} ref={timelineRef}>
                <section className='bg-light-blue text-white sticky top-4 w-fit m-auto border border-white p-2 rounded-full' onClick={timeline}>
                    <X />
                </section>
                <section className='py-8'>
                    {textExperiences.map(item => <TextExperience date={item.date} office={item.office} text={item.text} key={item.office} />)}
                </section>
            </section>

            {isVisible && <motion.section
                className='flex justify-center 2xl:hidden'
                initial={{  opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <button onClick={timeline} className='bg-light-blue text-white text-xl font-semibold px-8 py-2 rounded-sm shadow-xl tracking-wider'>CARREIRA</button>
            </motion.section>}
        </section>
    )
})

export default About