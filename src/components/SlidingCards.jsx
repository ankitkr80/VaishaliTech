import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlidingCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // For desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For iPad size
        settings: {
          slidesToShow: 3, // Show 3 slides on iPads
        },
      },
      {
        breakpoint: 768, // For medium-sized tablets and large phones
        settings: {
          slidesToShow: 2, // Show 2 slides on medium devices
        },
      },
      {
        breakpoint: 480, // For small mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on small devices
        },
      },
    ],
  };

  return (
    <div id="SlidingCards" className="w-[90%] h-auto">
      {/* Centered h1 and p */}
      <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>Bringing your Ideas to Reality</h1>
                <div className="mx-auto" style={{ maxWidth: '600px' }}>
                    <p className="text-lg text-justify mb-4" style={{ marginLeft: '1rem', marginRight: '1rem' }}> {/* Added margin for better spacing */}
                        Step into the age of transformation with robust features and dynamic designs with Webtel's business website designing services.
                    </p>
                </div>
            </div>


      <div className="">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="group mt-10 bg-white h-[340px] flex flex-col text-primary  rounded-xl transition-colors duration-300 hover:bg-gray-100"
            >
              {/* Card container */}
              <div className="relative h-56 rounded-t-xl flex flex-col justify-center items-center">
                {/* Image - initially visible, hidden on hover */}
                <img
                  src={d.image}
                  // alt={d.name}
                  className="w-54 h-54 mt-24 rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-0"
                />
                <div
                  className="flex text-xl font-bold flex-col justify-center items-center gap-4 p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-0"
                  style={{ color: "#4e6185" }}
                >
                  {/* <p className='text-2xl font-semibold'>{d.name}</p> */}
                  <p>{d.description}</p>
                </div>

                {/* Paragraph - initially hidden, shown on hover */}
                <p className="absolute flex justify-center items-center p-8 text-black text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  {d.paragraph}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Morgan",
    image: "web1.png",
    description: "Transform Your Vision",
    paragraph: "Morgan is committed to quality and innovation in all products.",
  },
  {
    name: "Jaysingh",
    image: "web2.png",
    description: "Stand Out With SEO",
    paragraph:
      "Jaysingh focuses on robust solutions for complex engineering problems.",
  },
  {
    name: "Alok",
    image: "web5.png",
    description: "Maintain Your Brand Voice",
    paragraph:
      "Alok focuses on robust solutions for complex engineering problems.",
  },
  {
    name: "Hello",
    image: "web4.png",
    description: "Ongoing Support & Maintenance",
    paragraph:
      "Hello specializes in creating friendly interactions with users.",
  },
  {
    name: "Hello",
    image: "web4.png",
    description: "User Friendly",
    paragraph:
      "Hello specializes in creating friendly interactions with users.",
  },
];

export default SlidingCards;
