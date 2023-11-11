import Banner from "./Banner";
import Category from "./Category/Category";


const Home = () => {
    return (
        <div>
            {/* <h2 className="text-5xl">This is home</h2> */}
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;