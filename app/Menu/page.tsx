import React from "react";
import Image from "next/image";

const Menu = () => {
  const data = [
    {
      image: "/menu1.jpeg",
      heading: "Menu Card - 1",
    },

    {
      image: "/menu2.jpeg",
      heading: "Menu Card - 2",
    },

    {
      image: "/menu3.jpeg",
      heading: "Menu Card - 3",
    },

    {
      image: "/menu4.jpeg",
      heading: "Menu Card - 4",
    },

    {
      image: "/menu5.jpeg",
      heading: "Menu Card - 5",
    },

    {
      image: "/menu6.jpeg",
      heading: "Menu Card - 6",
    },
  ];

  return (
    <div className="mt-24 p-2">
      <h1 className="text-center font-bold text-4xl font-extra bg-gradient-to-bl from-blue-500 to-blue-800 bg-clip-text text-transparent leading-normal">
        OUR MENU
      </h1>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 rounded">
        {data.map((items, key) => (
          <div className="bg-gray-500 rounded text-white" key={key}>
            <Image
              className="w-full h-96 rounded"
              src={items.image}
              alt="Menu Cards"
              width={500}
              height={200}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                {items.heading}
              </div>
              <p className="text-gray-700 text-base text-justify"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
