import { ArrowRight } from "lucide-react";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { slides } from "../../data";
const Banner = () => {
  return (
    <div className="relative">
      {/* Swiper Container */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10" />

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-4">
                  <h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="text-lg md:text-xl mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    {slide.description}
                  </p>
                  <Link to="/campaigns">
                    <button
                      className="btn bg-secondary hover:bg-secondary-dark text-white rounded-lg flex items-center gap-2 mx-auto transition-all border-none transform hover:scale-105"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      Donate Now
                      <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
