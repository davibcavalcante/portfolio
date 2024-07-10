import { useState, useEffect } from 'react'
import Menu from './MenuBar'
import Nav from './Nav'

const Header = () => {
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
        <header className='relative'>
            <Nav active={active}/>
            <Menu active={active} func={toggleMenu}/>
        </header>
    )
}

export default Header