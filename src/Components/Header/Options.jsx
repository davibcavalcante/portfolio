const Options = ({ name, icon, func }) => {
    return (
        <li className='text-white text-xl flex items-center gap-2 pl-4 pt-6 cursor-pointer lg:p-0' onClick={func}>{icon} {name}</li>
    )
}

export default Options