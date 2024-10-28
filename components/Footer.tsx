import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black p-2 text-white text-center mt-4">
      <span className="font-bold text-gray-300">
        SUPERTECH ECO VILLAGE-2, UGF 02-A SUPERTECH MARKET 1ST, Noida Extension,
        Greater Noida, Uttar Pradesh 201306
      </span>
      <div className="flex justify-between mt-4">
        <span className="">Designed by rk web services</span>
        <span>
          <Link href="">Privacy Policy</Link> & <Link href="">Terms</Link>
        </span>
        <span className="">Shreetrilokinath@gmail.com </span>
      </div>
    </div>
  );
};

export default Footer;
