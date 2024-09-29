import { Github, Instagram, Linkedin } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import useOnScreen from '../../hooks/useOnScreen'

import cv from '../../assets/cv-davi-cavalcante.pdf'
import { forwardRef } from 'react'

const HomePage = forwardRef((props, ref) => {

    const isVisible = useOnScreen(ref);

    return (
        <section className='text-white bg-dark-blue flex flex-col items-center gap-9 py-8 px-4 min-h-screen lg:justify-center' ref={ref}>
            {isVisible && <motion.section
                initial={{ opacity: 0, x: 0, y: 500 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: .5 }}
                className='flex flex-col items-center gap-8'
            >
                <section className={`w-6/12 max-w-60 h-auto rounded-full overflow-hidden lg:mt-14`}>
                    <img src="https://github.com/davibcavalcante.png" alt="Foto de perfil de Davi Barbosa Cavalcante" />
                </section>
                <section className='flex flex-col items-center gap-4 max-w-3xl'>
                    <div className='text-2xl text-center'>
                        Davi Barbosa Cavalcante
                    </div>

                    <div className='text-4xl text-center'>
                        {isVisible &&
                            <Typewriter
                                words={['Web Developer', 'Frontend Developer']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={300}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        }
                    </div>

                    <div className='text-opaque text-xl text-center'>
                        Desenvolvedor Web, Designer Gráfico, Estudante 2° período em Ciência da Computação e fundador da <span className='text-cyan-200'>INDIGITAL</span>
                    </div>
                </section>
                <section className='text-opaque flex gap-4'>
                    <a href="https://github.com/davibcavalcante" target='_blank' rel='external' className='lg:hover:scale-125 lg:hover:text-light-blue lg:duration-500'>
                        <Github size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/davi-barbosa-cavalcante-b32a14201/" target='_blank' rel='external' className='lg:hover:scale-125 lg:hover:text-light-blue lg:duration-500'>
                        <Linkedin size={30} />
                    </a>
                    <a href="https://www.instagram.com/agencia_indigital/" target='_blank' rel='external' className='lg:hover:scale-125 lg:hover:text-light-blue lg:duration-500'>
                        <Instagram size={30} />
                    </a>
                </section>
            </motion.section>}
            {isVisible && <motion.section
                initial={{ opacity: 0, x: 0, y: 1000 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 2 }}
            >
                <a className={`text-xl border border-white py-2 px-8 rounded-full`} href={cv} type='application/pdf' download={'Davi Barbosa Cavalcante.pdf'}>
                    Download CV
                </a>
            </motion.section>}
        </section>
    )
})

export default HomePage