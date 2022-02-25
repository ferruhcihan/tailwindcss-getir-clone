import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "components/ui/Title";

const Campaigns = () => {
  const [banners, setBanners] = useState([]) as any;

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider {...settings}>
        {banners?.map((banner: any, index: number) => (
          <div key={index}>
            <img src={banner.image} alt={`banner-${banner.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
