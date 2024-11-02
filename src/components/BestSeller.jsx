import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);
  
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          "Discover our bestselling products that customers can’t stop raving
          about! From timeless classics to the latest trends, these top picks
          are flying off the shelves for a reason. Whether you're shopping for
          yourself or looking for the perfect gift, our bestsellers are sure to
          impress. Crafted with quality and style in mind, these crowd-pleasers
          combine unbeatable value with the season’s hottest looks. Don’t miss
          your chance to own one of our most popular items before they’re gone!"
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
