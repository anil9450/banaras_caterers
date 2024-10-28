import React from "react";
import { IoIosTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

const Task = () => {
  return (
    <div className="flex justify-between p-2 bg-black text-white fixed shadow-lg z-50 top-0 right-0 left-0">
      <span className="flex">
        <IoIosTime className="mt-1 text-blue-600" />
        <span className="ml-2">10:00 AM TO 08:00 PM</span>
      </span>
      <span className="flex">
        <IoCall className="mt-1 text-green-500" />
        <span className="ml-2">+91 9650763066</span>
      </span>
      <span className="flex mt-1">
        <Link href="">
          <FaFacebook className="text-blue-600" />
        </Link>
        <Link href="">
          <FaInstagram className="text-red-600 ml-4" />
        </Link>
        <Link href="">
          <FaTwitter className="text-blue-600 ml-4" />
        </Link>
        <Link href="">
          <FaLinkedin className="text-blue-600 ml-4" />
        </Link>
      </span>
    </div>
  );
};

export default Task;
