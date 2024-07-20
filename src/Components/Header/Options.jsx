const Options = ({ name, icon, func, path }) => {
    return (
        <section>
            {path !== undefined ?
                <a href={path} target="_blank" rel="external" className='text-white text-xl flex items-center gap-2 pl-4 pt-6 cursor-pointer lg:p-0' onClick={func}>
                    {icon} {name}
                </a> :
                <li className='text-white text-xl flex items-center gap-2 pl-4 pt-6 cursor-pointer lg:p-0' onClick={func}>{icon} {name}</li>
            }
        </section>
    )
}

export default Options