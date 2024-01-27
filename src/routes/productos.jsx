import imgG1 from '../images/imgG1.jpg'
import imgG2 from '../images/imgG2.jpg'
import imgG3 from '../images/imgG3.jpg'
import imgG4 from '../images/imgG4.jpg'
import imgG5 from '../images/imgG5.jpg'
import imgG6 from '../images/imgG6.jpg'
import { useState } from "react";

export default function Productos() {

    const slides = [
        { url: imgG1 },
        { url: imgG2 },
        { url: imgG3 },
        { url: imgG4 },
        { url: imgG5 },
        { url: imgG6 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <section className="grid justify-items-center h-auto lg:h-164 mb-8 lg:mb-0" id="Productos">
                <div className="sm:px-20 p-5">
                    <p  data-aos="zoom-in" className="mb-4 text-5xl text-center lg:text-left text-blue23 font-bold">Nuestros productos</p>
                    <p  data-aos="fade-down" className="mb-4 text-xl text-center lg:text-left text-blue23">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempore? Itaque harum laborum dignissimos culpa vero aut possimus repellendus exercitationem, eum enim ea voluptas rerum?</p>
                </div>
                <div  data-aos="fade-up" className="relative group h-96 w-4/5 lg:w-3/4">
                    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="flex justify-center w-full h-full rounded-2xl bg-contain bg-center bg-cover bg-no-repeat duration-500">
                        {/* Left Arrow */}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p2 bg-black/20 text-white cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                                onClick={prevSlide}>
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        {/* Left Arrow */}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p2 bg-black/20 text-white cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                                onClick={nextSlide}>
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        {/* booton Arrow */}
                        <div class="hidden group-hover:block absolute bottom-0 cursor-pointer">
                            {slides.map((slide, slideIndex) => (
                                <button
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    data-te-target="#carouselDarkVariant"
                                    data-te-slide-to="0"
                                    data-te-carousel-active
                                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                    aria-current="true"
                                    aria-label="Slide 1"></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
