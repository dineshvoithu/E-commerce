import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setbestseller] = useState([]);
  useEffect(() => {
    const bestproduct = products.filter((item) => item.bestseller);
    setbestseller(bestproduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 md:text-base sm:text-sm text-gray-600 m-auto text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloribus
          provident ipsa modi! Odit illo doloremque asperiores beatae, assumenda
          nam esse eius atque, libero minus quos saepe deleniti excepturi
          labore.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ga-y-6">
        {bestseller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
