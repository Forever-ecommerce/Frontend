import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-400">
            "Thank you for choosing us as your go-to destination for the latest
            trends and unbeatable deals. We're committed to bringing you
            high-quality products and exceptional customer service, ensuring
            that your shopping experience is seamless and enjoyable. Stay
            connected by subscribing to our newsletter for exclusive offers,
            updates, and more. Shop with confidence and style—because you
            deserve the best!"
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="font-Outfit">Home</li>
            <li className="font-Outfit">About us</li>
            <li className="font-Outfit">Delivery</li>
            <li className="font-Outfit">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="font-Outfit">+1-234-244-3455</li>
            <li className="font-Outfit">forveryour@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" font-Outfit py-5 text-sm text-center">
          Copyright 2024@ forever.com . All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
