import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  const [selected, setSelected] = useState("TR");

  const flags = {
    US: "+1",
    NL: "+31",
    FR: "+33",
    IT: "+39",
    GB: "+44",
    DE: "+49",
    TR: "+90",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt="img-1"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="img-1"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="getir-bi-mutluluk"
          />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda <br />
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              {/* @ts-ignore */}
              <ReactFlagsSelect
                countries={Object.keys(flags)}
                customLabels={flags}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="relative flex-1 group block cursor-pointer">
                <input
                  required
                  className="h-full rounded px-4 pt-2 group-hover:border-primary-brand-color focus:border-primary-brand-color transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"
                />
                <span className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-primary-brand-color peer-valid:h-7 peer-valid:text-xs peer-valid:text-primary-brand-color">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-100" />
            <button className="h-12 flex items-center rounded-lg px-4 transition-colors bg-blue-700 bg-opacity-10 text-blue-900 text-sm font-semibold hover:bg-blue-900 hover:text-white">
              <FaFacebook size={26} className="justify-self-start" />
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
