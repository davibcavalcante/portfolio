import { useState, useRef, useEffect, forwardRef } from 'react'
import { X } from 'lucide-react'
import TextExperience from './TextExperience'

import { frontend, backend, code, design } from '../../utils/exportImages'

const About = forwardRef((props, ref) => {
    const [timelineStatus, setTimelineStatus] = useState(false)
    const timelineRef = useRef(null);

    const timeline = () => {
        setTimelineStatus(!timelineStatus)
    }

    useEffect(() => {
        if (timelineStatus && timelineRef.current) {

            const timelineElement = timelineRef.current;
            const topOffset = - 20;

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

    const textsExperience = [
        {
            date: '07/2024 - Atual',
            office: 'Estagiário TI & Desenvolvedor Freelancer',
            text: 'Atualmente sou estagiário em TI pela prefeitura de Goiânia, no meu estágio faço de tudo um pouco relacionado a computadores, no geral, ajudar os demais funcionários com problemas técnicos tanto software, quanto hardware. Isso quer dizer que resolvo problemas desde intalação e atualização de drivers até troca e manutenção de peças. Apesar de estar feliz com o estágio não é o que eu almejo para a minha carreira, por isso encaro como algo temporário e em paralelo a isso eu sigo estudando desenvolvimento e em busca de projetos que desafiem meu conhecimento e me dêm bagagem e experiência para construção da minha carreira.'
        },

        {
            date: '12/2023 - Atual',
            office: 'Desenvolvedor Freelancer',
            text: 'Nessa data foi onde fechei o meu primeiro projeto como Dev Freelancer, é um projeto que tenho muito carinho pois foi foi um marco na minha carreira, com ele dei os meus primeiros passos desenvolvendo o Backend e Banco de Dados de uma aplicação Web. Foi extremamente desafiador na época, mas muito prazeroso de fazer. Após o término recebi um feedback tão positivo superando as minhas expectativas. Você pode encontrar essa criação em: https://jubaofe.com.br'
        },

        {
            date: '06/2023 - 11/2023',
            office: 'Editor e Produtor de Vídeos & Administrador de Sites',
            text: 'Esse foi um período de muitos desafios e aprendizados, foi aqui que coloquei em prática as minhas habilidades em edição de vídeos, mas a experiência mais marcante foi a de lidar com clientes. Fiquei como o responsável direto em fazer manutenções em alguns Sites de clientes, isso fez com que eu tivesse contato direto com eles. Guardo como uma experiência bem agradável que me agregou muito.'
        },

        {
            date: '01/2022 - 03/2023',
            office: 'Designer Gráfico',
            text: 'O desafio da vez me ajudou a ter uma visão melhor do mercado de trabalho e desafiar a minha criatividade. Nesse período eu fiquei responsável por criar posts em imagens para o Instagram. Foi um trabalho Home Office que moldou parte do profissional que sou hoje. Isso, tanto por aprimorar minhas habilidades com ferramentas de edição como Photoshop e Illustrator, quanto para saber lidar com demandas e prazo de entregas.'
        },

        {
            date: '08/2021 - 12/2022',
            office: 'Aprendiz Repositor de Mercadorias',
            text: 'Aqui foi o início da minha jornada no mercado de trabalho. Apesar de não me agregar profissionalmente, encaro como etapa de evolução pessoal. Aos 16 comecei meu primeiro trabalho já entendendo como funcionava uma empresa, experienciando obedecer normas de determinado local e a lidar com horários de forma assídua.'
        }
    ]

    const skills = [
        { name: 'Frontend', skills: frontend },
        { name: 'Backend', skills: backend },
        { name: 'Código', skills: code },
        { name: 'Design', skills: design },
    ]

    return (
        <section className={`py-8 px-4 flex flex-col gap-8 relative ${timelineStatus ? 'bg-black' : 'bg-blue'} duration-300 2xl:py-16 2xl:px-52`} ref={ref}>
            <section className='flex flex-col gap-8 2xl:flex-row 2xl:justify-between'>
                <section className='flex flex-col gap-4 2xl:w-6/12'>
                    <h1 className='text-white text-5xl font-bold lg:text-6xl'>Sobre Mim</h1>
                    <section className='flex flex-col gap-4 lg:max-w-4xl'>
                        <h2 className='text-opaque text-3xl lg:text-4xl'>Olá, sou <strong className='text-white'>Davi Cavalcante</strong></h2>
                        <p className='text-opaque text-lg lg:text-xl 2xl:leading-relaxed'>Tenho 1 ano de experiência em Desenvolvimento Web, durante esse período tive contato com: Html, Css, Js, React, Node, Java e Python de linguagens de programação. Porém, a minha experiência vai além, tive a oportunidade de lidar também com: Linux, MongoDB, MySQL, AWS, Digital Ocean e, para versionamento de código, Git e Github. Apesar de ser estudante em programação há pouco tempo, desde Dezembro de 2022, durante esse tempo tive o prazer de lidar com diversos desafios dentro da programação.</p>
                    </section>
                    <section className='hidden 2xl:block 2xl:self-end'>
                        <button onClick={timeline} className='bg-light-blue text-white text-xl font-semibold px-8 py-2 rounded-sm shadow-xl tracking-wider'>CARREIRA</button>
                    </section>
                </section>

                <section className='flex flex-col gap-4 2xl:w-5/12'>
                    <h2 className='text-white text-3xl'>Principais Habilidades</h2>
                    <section className='flex flex-col gap-4 lg:flex-row lg:flex-wrap 2xl:flex-col'>
                        {skills.map(item =>
                            <section key={item.name} className={`${timelineStatus ? 'bg-black' : 'bg-dark-blue'} p-4 rounded-xl lg:w-5/12 2xl:w-full`}>
                                <h3 className='text-opaque text-2xl mb-4'>{item.name}:</h3>
                                <section className='flex gap-4 overflow-x-auto'>
                                    {item.skills.map((item, index) =>
                                        <img src={item} alt="" className={`bg-white p-1 rounded-full w-14`} key={index} />
                                    )}
                                </section>
                            </section>
                        )}
                    </section>
                </section>
            </section>

            <section className={`bg-dark-blue w-11/12 h-timeline absolute left-1/2 -translate-x-1/2 overflow-auto ${timelineStatus ? 'block' : 'hidden'}`} ref={timelineRef}>
                <section className='bg-light-blue text-white sticky top-4 w-fit m-auto border border-white p-2 rounded-full' onClick={timeline}>
                    <X />
                </section>
                <section className='py-8'>
                    {textsExperience.map(item => <TextExperience date={item.date} office={item.office} text={item.text} key={item.office} />)}
                </section>
            </section>

            <section className='flex justify-center 2xl:hidden'>
                <button onClick={timeline} className='bg-light-blue text-white text-xl font-semibold px-8 py-2 rounded-sm shadow-xl tracking-wider'>CARREIRA</button>
            </section>
        </section>
    )
})

export default About