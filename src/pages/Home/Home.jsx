import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            {/* <h2 className="text-5xl">This is home</h2> */}
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;