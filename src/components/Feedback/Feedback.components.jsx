import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { v4 as uuidv4 } from "uuid";

import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

import "swiper/css";
import "./Feedback.styles.scss";

const FEEDBACK_DATA = [
    {
        id: uuidv4(),
        name: "Kalim Customer",
        photo: "https://picsum.photos/100/100",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius deleniti consequuntur odio tempore? Cumque perspiciatis aliquam inventore debitis minima!",
        date: "January 18, 2023",
    },
    {
        id: uuidv4(),
        name: "Kalim Customer",
        photo: "https://picsum.photos/100/100",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius deleniti consequuntur odio tempore? Cumque perspiciatis aliquam inventore debitis minima!",
        date: "January 18, 2023",
    },
    {
        id: uuidv4(),
        name: "Kalim Customer",
        photo: "https://picsum.photos/100/100",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius deleniti consequuntur odio tempore? Cumque perspiciatis aliquam inventore debitis minima!",
        date: "January 18, 2023",
    },
    {
        id: uuidv4(),
        name: "Kalim Customer",
        photo: "https://picsum.photos/100/100",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius deleniti consequuntur odio tempore? Cumque perspiciatis aliquam inventore debitis minima!",
        date: "January 18, 2023",
    },
];

const Feedback = () => {
    return (
        <section id="feedback">
            <div className="feedback">
                <div className="section-heading">
                    <div className="line line--wide"></div>
                    <h2 className="primary-heading">Don't take our word for it</h2>
                    <p className="section-paragraph">
                        Many have praised the delicious and unique flavors in our dishes, stating
                        that the seasonings and spices used were well-balanced and added a great
                        depth of taste.
                    </p>
                </div>

                <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={true} loop={true}>
                    {FEEDBACK_DATA?.map(({ id, name, photo, message, date }) => (
                        <SwiperSlide key={id}>
                            <ImQuotesLeft className="quote-icon" />
                            <div className="stars">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className="message">{message}</div>
                            <div className="user">
                                <img src={photo} alt={name} className="user__photo" />
                                <div className="details">
                                    <span className="user__name">{name}</span>
                                    <span className="details__date">{date}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Feedback;
