import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading="Testimonials"></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className="flex flex-col items-center m-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>
                                {review.details}
                            </p>
                            <h3 className="text-3xl text-orange-500 font-semibold">
                                {review.name}
                            </h3>

                        </div>

                    </SwiperSlide>)

                }
            </Swiper>

        </section>


    );
};

export default Testimonials;