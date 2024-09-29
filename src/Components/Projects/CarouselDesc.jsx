import { descriptions } from '../../utils/exportDescriptions'

const CarouselDesc = ({ isVisible, activeIndex }) => {

    const getVisibleDescriptions = () => {
        if (window.innerWidth < 768) {
            return [descriptions[activeIndex]];
        }

        const visibleDescriptions = [];
        for (let i = 0; i < 3; i++) {
            const index = (activeIndex + i) % descriptions.length;
            visibleDescriptions.push(descriptions[index]);
        }
        return visibleDescriptions;
    };

    const visibleDescriptions = getVisibleDescriptions();

    return (
        <div className="slider-container w-full mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isVisible && 'animate-fade-down animate-duration-1000 animate-delay-[250ms] animate-ease-in-out'}`}>
                {visibleDescriptions.map((item, index) => (
                    <div key={index} className="bg-light-blue rounded-lg shadow-xl p-4 flex flex-col gap-4">
                        <h1 className="text-white text-3xl text-center font-bold">{item.title}</h1>
                        <p className="text-white">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselDesc;
