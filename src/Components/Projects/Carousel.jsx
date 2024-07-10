import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
    const showDescription = (e) => {
        const project = e.target.id
        console.log(project)
    }

    const NextArrow = ({ onClick }) => {
        return (
            <ChevronRight size={45} color='white' className='bg-light-blue p-2 rounded-full absolute top-1/2 right-0 z-50 -translate-y-1/2 hidden md:block md:cursor-pointer' onClick={onClick} />
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <ChevronLeft size={45} color='white' className='bg-light-blue p-2 rounded-full absolute top-1/2 z-50 -translate-y-1/2 hidden md:block md:cursor-pointer' onClick={onClick} />
        )
    }

    const settings = {
        dots: true,
        appendDots: dots => (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ul style={{ backgroundColor: 'white', margin: "0px", borderRadius: '8px' }}> {dots} </ul>
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
            }
        ]
    }

    return (
        <div className="slider-container w-full mx-auto">
            <Slider {...settings} >
                <div className="p-3">
                    <img className="w-full h-auto object-cover rounded-2xl shadow-xl" src="/portfolio/src/assets/projects/indigital-movies.png" alt="" id='indigital' onClick={showDescription} />
                </div>
                <div className="p-4">
                    <img className="w-full h-auto object-cover rounded-2xl shadow-xl" src="/portfolio/src/assets/projects/casamento.png" alt="" id='casamento' onClick={showDescription} />
                </div>
                <div className="p-4">
                    <img className="w-full h-auto object-cover rounded-2xl shadow-xl" src="/portfolio/src/assets/projects/rally-jubao.png" alt="" id='rally' onClick={showDescription} />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;