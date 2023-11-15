import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            {/* <h2 className="text-5xl">This is home</h2> */}
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;