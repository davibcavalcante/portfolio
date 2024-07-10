const Options = ({ name, icon }) => {
    return (
        <li className='text-white text-xl flex items-center gap-2 pl-4 pt-6 lg:p-0'>{icon} {name}</li>
    )
}

export default Options