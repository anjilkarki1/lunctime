import React from "react";
import image1 from "../../assets/images/items/chicken_chilly.png";
import image2 from "../../assets/images/items/crunchy_chicken.png";
import image3 from "../../assets/images/items/french_fries.png";
import image4 from "../../assets/images/items/fried_rice.png";
import image5 from "../../assets/images/items/hakka_noodle.png";
import image6 from "../../assets/images/items/hantakali_set.png";
import image7 from "../../assets/images/items/momo.png";
import image8 from "../../assets/images/items/mutton.png";
import image9 from "../../assets/images/items/pizza.png";
import image10 from "../../assets/images/items/samosa.png";
import ItemCard from "../../components/Item/Card";

const Items = () => {
  const fooditems = [
    {
      name: "Chicken Chilly",
      image: image1,
      price: 400,
    },
    {
      name: "Crunchy Chicken",
      image: image2,
      price: 500,
    },
    {
      name: "French Fries",
      image: image3,
      price: 500,
    },
    {
      name: "Fried Rice",
      image: image4,
      price: 500,
    },
    {
      name: "Hakka Noodle",
      image: image5,
      price: 500,
    },
    {
      name: "Hantakali Set",
      image: image6,
      price: 500,
    },
    {
      name: "Momo",
      image: image7,
      price: 500,
    },
    {
      name: "Mutton",
      image: image8,
      price: 500,
    },
    {
      name: "Pizza",
      image: image9,
      price: 500,
    },
    {
      name: "Samosa",
      image: image10,
      price: 500,
    },
  ];
  return (
    <div className="m-7 flex flex-wrap">
      {fooditems.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Items;
