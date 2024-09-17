import { CodeXml, Home, Phone, Users, Github } from 'lucide-react'
import Options from './Options'

const Nav = ({ active, toggleMenuMode, homeRef, aboutRef, projectsRef, contactRef }) => {

    const scrollToHome = () => {
        if (homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: "smooth" })
            if (window.innerWidth < 1024) {
                toggleMenuMode()
            }
        }
    }

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
            if (window.innerWidth < 1024) {
                toggleMenuMode()
            }
        }
    }

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
            if (window.innerWidth < 1024) {
                toggleMenuMode()
            }
        }
    }

    const scrollToContacts = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" })
            if (window.innerWidth < 1024) {
                toggleMenuMode()
            }
        }
    }

    const options = [
        { name: 'Home', icon: <Home />, func: scrollToHome, path: undefined },
        { name: 'Sobre mim', icon: <Users />, func: scrollToAbout, path: undefined },
        { name: 'Projetos', icon: <CodeXml />, func: scrollToProjects, path: undefined },
        { name: 'Github', icon: <Github />, func: undefined, path: 'https://github.com/davibcavalcante' },
        { name: 'Contato', icon: <Phone />, func: scrollToContacts, path: undefined },
    ]

    return (
        <nav className={`bg-light-blue absolute ${active ? 'left-0' : '-left-full'} w-9/12 h-screen py-16 flex flex-col duration-500 z-50 lg:bg-black lg:static lg:w-full lg:h-16 lg:py-0 lg:px-4 lg:flex-row lg:items-center xl:px-8`}>
            <ul className='flex-1 border-y border-white lg:flex lg:items-center lg:justify-end lg:gap-8 lg:border-0'>
                {options.map(item => <Options name={item.name} icon={item.icon} func={item.func} path={item.path} key={item.name} />)}
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