import { CodeXml, Home, LibrarySquare, Phone, Users, Github } from 'lucide-react'
import Options from './Options'
import { useEffect, useState } from 'react'

const Nav = ({ active }) => {

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        if (active) document.querySelector('body').style.overflowY = 'hidden'

        if (!active) document.querySelector('body').style.overflowY = 'auto'

    }, [active])

    const options = [
        { name: 'Home', icon: <Home/> },
        { name: 'Sobre mim', icon: <Users/>},
        { name: 'Projetos', icon: <CodeXml/>},
        { name: 'Principais Habilidades', icon: <LibrarySquare/>},
        { name: 'Github', icon: <Github/> },
        { name: 'Contato', icon: <Phone/>},
    ]

    return (
        <nav className={`bg-light-blue absolute ${active ? 'left-0' : '-left-full'} w-9/12 h-screen py-16 flex flex-col duration-500 lg:bg-black lg:static lg:w-full lg:h-16 lg:py-0 lg:px-4 lg:flex-row lg:items-center xl:px-8`}>
            <ul className='flex-1 border-y border-white lg:flex lg:items-center lg:justify-end lg:gap-8 lg:border-0'>
                { options.map(item => <Options name={item.name} icon={item.icon} key={item.name}/>) }
            </ul>
            <section className='flex items-center gap-4 p-4 lg:hidden'>
                <div className='w-10 rounded-full overflow-hidden'>
                    <img className='w-full' src="https://github.com/davibcavalcante.png" alt="Foto de perfil de Davi Barbosa Cavalcante" />
                </div>
                <div className='text-white text-xl'>
                    Davi B. Cavalcante
                </div>
            </section>
        </nav>
    )
}

export default Nav