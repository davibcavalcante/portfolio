const TextExperience = ({ date, office, text }) => {
    return (
        <section className='flex mb-8'>
            <section className='w-1/4 flex flex-col items-center'>
                <div className='bg-opaque w-8 h-8 rounded-full'></div>
                <div className='bg-opaque w-px flex-1'></div>
            </section>
            <section className='w-3/4 flex flex-col gap-4'>
                <div className='bg-opaque font-semibold w-fit py-2 px-4 rounded-full'>{date}</div>
                <h2 className='text-white font-bold tracking-wide xl:text-xl'>{office}</h2>
                <p className='text-white pr-4 xl:text-lg'>{text}</p>
            </section>
        </section>
    )
}

export default TextExperience