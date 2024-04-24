/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../Home/Shared/Components/SectionTitle";
import ItemsCard from "./ItemsCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        // const popularItem = data.filter((item) => item.category === "popular");
        setMenu(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section>
        <SectionTitle></SectionTitle>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-3">
        {menu.map((item) => (
          <ItemsCard key={item._id} item={item}></ItemsCard>
        ))}
      </section>
    </div>
  );
};

export default PopularMenu;
