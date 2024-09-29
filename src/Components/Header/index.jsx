import { useState, useEffect } from 'react'
import Menu from './MenuBar'
import Nav from './Nav'

const Header = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
    const [ active, setMode ] = useState(false)

    const toggleMenu = () => {
        setMode(!active)
    }

    useEffect(() => {
        if (active) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [active])

    return (
        <header className='relative lg:fixed lg:top-0 lg:min-w-full lg:z-50'>
            <Nav active={active} toggleMenuMode={toggleMenu} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
            <Menu active={active} func={toggleMenu}/>
        </header>
    )
}

export default Header