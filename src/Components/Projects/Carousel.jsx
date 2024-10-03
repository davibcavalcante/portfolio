import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';


import indigital from '../../assets/projects/indigital-movies.png';
import casamento from '../../assets/projects/casamento.png';
import rally from '../../assets/projects/rally-jubao.png';

const Carousel = ({ isVisible, setNewIndex }) => {

    const NextArrow = ({ onClick }) => {
        return (
            <ChevronRight
                size={45}
                color="white"
                className="bg-light-blue p-2 rounded-full absolute top-1/2 right-0 z-50 -translate-y-1/2 hidden md:block md:cursor-pointer"
                onClick={onClick}
            />
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <ChevronLeft
                size={45}
                color="white"
                className="bg-light-blue p-2 rounded-full absolute left-0 top-1/2 z-50 -translate-y-1/2 hidden md:block md:cursor-pointer"
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: true,
        appendDots: dots => (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ backgroundColor: 'white', margin: '0px', borderRadius: '8px' }}>
                    {dots}
                </ul>
            </div>
        ),
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        afterChange: current => setNewIndex(current)
    };

    return (
        <div className="slider-container w-full mx-auto">
            <Slider {...settings}>
                {[indigital, casamento, rally].map((image, index) => (
                    <div
                        key={index}
                        className={`p-4 ${
                            isVisible
                                && 'animate-fade-down animate-duration-1000 animate-delay-[250ms] animate-ease-in-out'
                        }`}
                    >
                        <a
                            href={index === 0 ? 'https://davibcavalcante.github.io/indigital-movies' : index === 1 ? 'https://indigitalenv.online' : 'https://jubaofe.com.br'}
                            target="_blank"
                            rel="external"
                        >
                            <img
                                className="w-full h-auto object-cover rounded-2xl shadow-xl cursor-pointer lg:hover:scale-110 lg:duration-700"
                                src={image}
                                alt=""
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
