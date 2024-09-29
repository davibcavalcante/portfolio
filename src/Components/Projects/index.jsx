import { forwardRef, useState } from "react";
import Carousel from "./Carousel";
import useOnScreen from "../../hooks/useOnScreen";
import CarouselDesc from "./CarouselDesc";

const Projects = forwardRef((props, ref) => {

    const [index, setIndex] = useState(0);

    const setActiveIndex = (index) => {
        setIndex(index);
    }

    const isVisible = useOnScreen(ref);

    return (
        <section
            className="bg-dark-blue pt-8 pb-14 px-4 flex flex-col gap-8 min-h-screen 2xl:py-12 2xl:px-52"
            ref={ref}
        >
            <h1 className='text-white text-5xl font-bold lg:text-6xl'>Projetos</h1>
            <p className="text-opaque text-lg font-poppins md:max-w-2xl lg:text-xl 2xl:leading-relaxed">
                Explore os meus projetos para conhecer mais da minha criatividade e técnicas de desenvolvimento.
            </p>
            <section className="flex flex-col flex-1 gap-20">
                <section className="flex justify-center">
                    <Carousel isVisible={isVisible} setNewIndex={setActiveIndex} />
                </section>
                <section className="flex justify-center flex-1">
                    <CarouselDesc isVisible={isVisible} activeIndex={index} />
                </section>
            </section>
        </section>
    );
});

export default Projects;