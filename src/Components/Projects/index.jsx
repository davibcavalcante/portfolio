import Carousel from "./Carousel"

const Projects = () => {
    return (
        <section className="bg-dark-blue h-auto pt-8 pb-14 px-4 flex flex-col gap-8 2xl:py-12 2xl:px-52">
            <h1 className='text-white text-5xl font-bold lg:text-6xl'>Projetos</h1>
            <p className="text-opaque text-lg font-poppins md:max-w-2xl lg:text-xl 2xl:leading-relaxed">Explore os meus projetos para conhecer mais da minha criatividade e técnicas de desenvolvimento.</p>
            <section className="flex justify-center">
                <Carousel />
            </section>
        </section>
    )
}

export default Projects