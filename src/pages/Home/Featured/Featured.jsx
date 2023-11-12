import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css"


const Featured = () => {
    return (
        <div className="featured-item mb-10 text-white">
            <SectionTitle heading="Featured Item" subHeading="Check It Out"></SectionTitle>
            <div className="md:flex justify-center items-center py-10 px-20">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov 12, 2023</p>
                    <p className="uppercase">where Can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, reiciendis ea amet officiis accusantium nobis veniam blanditiis minus aliquam earum nulla asperiores odit voluptatem obcaecati quo at animi praesentium explicabo possimus saepe inventore aperiam alias! Molestias doloribus corrupti ad nihil.</p>
                    <button className="btn btn-outline btn-accent">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;