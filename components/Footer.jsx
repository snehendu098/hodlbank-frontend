import React from "react";
import { AiFillMail, AiFillTwitterCircle } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import Hr from "./Hr";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-[98%] md:w-[94%] relative bottom-0  flex justify-center items-center my-3 flex-col">
      <Hr height={2} />
      <Link href={"/"}>
        <p className="text-2xl font-bold cursor-pointer ">
          Hodl<span className="text-yellow-400">Bank</span>{" "}
        </p>
      </Link>
      <p className="text-sm">Created by Snehendu Roy</p>
      <div className="md:w-[50%] w-[30%]  mt-3 flex items-center justify-around">
        <AiFillMail fontSize={30} />
        <AiFillTwitterCircle fontSize={30} />
        <SiHashnode fontSize={30} />
      </div>
      <div className="flex mt-2 justify-center items-center ">
        <FaRegCopyright fontSize={20} />{" "}
        <p className="ml-1">All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
