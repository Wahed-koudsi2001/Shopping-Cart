import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg"
import { products } from "../data/data"
import { AiFillHeart } from "react-icons/ai"
import { BsCartCheck } from "react-icons/bs"
import { ImEnlarge } from "react-icons/im"
import { SharingInfo } from "../App";
import SellingCards from "../Components/SellingCards/SellingCards";

export default function Shop({ setCountCart }) {
    document.title = "SHOP";

    // const [harte, setHarte] = useState(true);
    const { data, setData } = useContext(SharingInfo);
    const [imgPopUp, setImgPopUp] = useState();
    const [filterCard, setFilterCard] = useState("All");

    const addToCart = (element) => {
        const index = data.findIndex((item) => item.id === element.id);
        if (index === -1) {
            setCountCart((prev) => prev + 1);
            const updatedArr = [...data, { ...element, qty: 1 }];
            setData(updatedArr);
        } else {
            const updatedArr = [...data];
            updatedArr[index].qty += 1;
            setData(updatedArr);
        };
    };

    const filterIng = (cards) => {
        if (filterCard === "All") {
            return cards
        } else {
            return cards.filter((el) => el.filter === filterCard);
        }
    }

    const filteringImg = (title) => {
        setFilterCard(title);
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="container mx-auto pt-[140px]">
            <div className="lg:flex text-center lg:text-start justify-between items-center">
                <div>
                    <h1 className="font-medium text-[30px]">Trending Products</h1>
                    <p className="text-[15px] text-[#0a2748]">Check the hottest designs of the week. These rising stars are worth your attention.</p>
                </div>
                <div>
                    <ul className="flex flex-wrap mt-5 justify-center items-center gap-5">
                        <li onClick={() => filteringImg("All")} className="w-fit text-[#fff] bg-[#ff4267] rounded-full px-5 py-2 cursor-pointer">All</li>
                        <li onClick={() => filteringImg("Mockups")} className="w-fit text-[#fff] bg-[#ff4267] rounded-full px-5 py-2 cursor-pointer">Mockups</li>
                        <li onClick={() => filteringImg("Web Theme")} className="w-fit text-[#fff] bg-[#ff4267] rounded-full px-5 py-2 cursor-pointer">Web Theme</li>
                        <li onClick={() => filteringImg("Image Stocks")} className="w-fit text-[#fff] bg-[#ff4267] rounded-full px-5 py-2 cursor-pointer">Image Stocks</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px]">
                    {filterIng(products).map((ele, index) =>
                        <motion.ul
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="container relative hover-card" key={index} data-filter={ele.filter}>
                            <div className="item w-[80%] mx-auto md:w-full" variants={item}>
                                <img loading="lazy" className="rounded-2xl mb-2" src={ele.cover} alt={ele.category} />
                                <h3 className="font-medium">{ele.title}</h3>
                                <p className="text-[14px] italic my-2 text-[#0a2748]">{ele.author}</p>
                                <span>${ele.price}</span>
                                <div className="absolute top-[55%] left-[-50%] translate-x-[50%] flex gap-3 w-[100%] justify-center hover-card-child-1">
                                    <div className={"w-[50px] h-[50px] bg-[#fff] hover:bg-[#ff5400] hover:text-[#fff] rounded-full text-center flex items-center justify-center cursor-pointer opacity-0 hover-card-child d-none"}>
                                        <AiFillHeart size={20} />
                                    </div>
                                    <div onClick={() => addToCart(ele, index)} className="w-[50px] h-[50px] bg-[#fff] hover:bg-[#ff5400] hover:text-[#fff] rounded-full text-center flex items-center justify-center cursor-pointer opacity-0 hover-card-child d-none">
                                        <BsCartCheck size={20} />
                                    </div>
                                    <div className="w-[50px] h-[50px] bg-[#fff] hover:bg-[#ff5400] hover:text-[#fff] rounded-full text-center flex items-center justify-center cursor-pointer opacity-0 hover-card-child d-none" onClick={() => setImgPopUp(ele.cover)}>
                                        <ImEnlarge size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.ul>
                    )}
                </div>
                {imgPopUp &&
                    <div
                        className="z-20 relative pop-before">
                        <div className=" fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40">
                            <img src={imgPopUp} alt="img" width="400px" height="400px" />
                            <div onClick={() => setImgPopUp("")} className="absolute right-[10px] top-[10px] cursor-pointer bg-[#ff4b2e] text-[#fff] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center asd">
                                <CgClose size={24} />
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div>
                <SellingCards />
            </div>
        </div>
    )
}