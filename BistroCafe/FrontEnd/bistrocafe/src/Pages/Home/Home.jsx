import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
