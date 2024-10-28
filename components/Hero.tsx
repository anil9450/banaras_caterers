import React from "react";
import Image from "next/image";

const Hero = () => {
  const data = [
    {
      image: "/image1.jpeg",
      heading: "CATERING SERVICES",
      paragraph:
        "Our catering service offers delicious, customized menus for all occasions, from intimate gatherings to large events. We provide fresh, high-quality ingredients and professional service to ensure your guests enjoy an unforgettable culinary experience. Whether it's a wedding, corporate event, or celebration, we tailor every detail to meet your needs.",
    },

    {
      image: "/image2.jpeg",
      heading: "HALDI",
      paragraph:
        "Celebrate your Haldi ceremony with vibrant, joyous moments. Our service ensures a beautifully curated setup, from traditional decorations to an authentic, festive atmosphere. Enjoy the sacred ritual with loved ones while we take care of every detail, making your pre-wedding celebration colorful, memorable, and full of happiness.",
    },

    {
      image: "/image3.jpeg",
      heading: "MEHANDI",
      paragraph:
        "Our Mehndi service adds elegance and tradition to your special day. We offer intricate, beautiful henna designs crafted by skilled artists, perfect for weddings and celebrations. Let us create stunning patterns that reflect your style, making your Mehndi ceremony a joyful and unforgettable experience for you and your guests.",
    },

    {
      image: "/image4.jpeg",
      heading: "BALOON",
      paragraph:
        "Transform your event with our stunning balloon decorations, perfect for birthdays, weddings, and parties. We create customized balloon arrangements in various colors and designs to match your theme, adding a festive and vibrant touch. Let us elevate your celebration with eye-catching, creative displays that leave a lasting impression.",
    },

    {
      image: "/image5.jpeg",
      heading: "TENT",
      paragraph:
        "Our tent services provide the perfect setting for your outdoor events, offering a range of elegant and durable tents to suit any occasion. Whether it's a wedding, corporate event, or festival, we ensure a comfortable and stylish environment, complete with customizable setups to match your vision and needs.",
    },

    {
      image: "/image6.jpeg",
      heading: "DJ",
      paragraph:
        "Our DJ services bring energy and excitement to your event with expert sound, lighting, and music tailored to your preferences. From weddings and parties to corporate events, our skilled DJs create the perfect atmosphere, keeping the crowd entertained and the dance floor lively. Let us make your event unforgettable!",
    },

    {
      image: "/image7.jpeg",
      heading: "MAGIC",
      paragraph:
        "Elevate your event with our thrilling magic games, perfect for all ages! Our professional magicians engage guests with interactive tricks, illusions, and mind-boggling performances, adding wonder and excitement to any celebration. Whether it's a birthday party or corporate event, we create a magical experience that leaves everyone amazed.",
    },

    {
      image: "/image8.jpeg",
      heading: "GAME & TATOO",
      paragraph:
        "Make your event unforgettable with our exciting games and tattoo services. We offer a range of fun activities, from interactive games to creative face and body tattoos, perfect for all ages. Whether it’s a birthday, festival, or party, we ensure a lively atmosphere and lasting memories for your guests.",
    },
  ];
  return (
    <div className="mt-24">
      <h1 className="text-center font-bold text-4xl font-extra bg-gradient-to-bl from-blue-500 to-blue-800 bg-clip-text text-transparent leading-normal">
        OUR SERVICES
      </h1>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4 rounded">
        {data.map((items, key) => (
          <div className="bg-gray-500 rounded" key={key}>
            <Image
              className="w-full rounded"
              src={items.image}
              alt="Sunset in the mountains"
              width={50}
              height={25}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {items.heading}
              </div>
              <p className="text-white text-base text-justify">
                {items.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
