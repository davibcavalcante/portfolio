import { Menu, X } from 'lucide-react'

const MenuBar = ({ active, func }) => {
    return (
        <section className="bg-dark-blue h-16 pr-4 flex items-center justify-end lg:hidden">
            <Menu color='white' size={40} className={`${active ? 'hidden' : ''} bg-light-blue p-1 rounded-full`} onClick={func}/>
            <X color='white' size={40} className={`${active ? '' : 'hidden'} bg-light-blue p-1 rounded-full`} onClick={func}/>
        </section>
    )
}

export default MenuBar