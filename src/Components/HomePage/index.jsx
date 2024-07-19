import { Github, Instagram, Linkedin } from 'lucide-react'

import cv from '../../assets/cv-davi-cavalcante.pdf'
import { forwardRef } from 'react'

const HomePage = forwardRef((props, ref) => {
    return (
        <section className='text-white bg-dark-blue flex flex-col items-center gap-9 py-8 px-4 min-h-home xl:justify-center' ref={ref}>
            <section className='w-6/12 max-w-60 h-auto rounded-full overflow-hidden'>
                <img src="https://github.com/davibcavalcante.png" alt="Foto de perfil de Davi Barbosa Cavalcante" />
            </section>
            <section className='flex flex-col items-center gap-4 max-w-3xl'>
                <div className='text-2xl text-center'>
                    Olá, eu sou Davi Barbosa Cavalcante
                </div>

                <div className='text-4xl text-center'>
                    Web Developer
                </div>

                <div className='text-opaque text-xl text-center'>
                    Desenvolvedor Web, Designer Gráfico, Estudante 2° período em Ciência da Computação e fundador da <span className='text-cyan-200'>INDIGITAL</span>
                </div>
            </section>
            <section className='text-opaque flex gap-4'>
                <a href="#"><Github size={30}/></a>
                <a href="#"><Linkedin size={30}/></a>
                <a href="#"><Instagram size={30}/></a>
            </section>
            <section>
                <a className='text-xl border border-white py-2 px-8 rounded-full' href={cv} type='application/pdf' download={'Davi Barbosa Cavalcante.pdf'}>
                    Download CV
                </a>
            </section>
        </section>
    )
})

export default HomePage