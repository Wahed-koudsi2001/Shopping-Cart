import { AiOutlineClose, AiOutlineBars } from "react-icons/ai"
import { BsTrash } from "react-icons/bs";
import { useState, useContext, useEffect } from "react";
import cartImg from "../../assets/cart.png";
import logo from "../../assets/logo.svg";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { SharingInfo } from "../../App";
import Footer from "../Footer/Footer";


export default function NavBar({ coutCart }) {
    document.title = "HOME";
    const [navbar, setNavbar] = useState(true);
    const { data, setData } = useContext(SharingInfo);
    const [openOrClose, setOpenOrClose] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = data.reduce((acc, el) => acc + parseFloat(el.price) * el.qty, 0);
        setTotalPrice(newTotalPrice);
    }, [data]);

    const filterCarts = (id) => {
        const newCart = data.filter((el) => el.id !== id);
        setData(newCart);
    }


    return (
        <>
            <div className="flex items-center w-full py-[15px] px-[30px] mx-auto fixed left-[50%] translate-x-[-50%] bg-[#ffffffcc] shadow-lg z-10 justify-end">
                <ul className={navbar ? "flex items-center gap-[25px] wahed-navbar" : "flex items-center gap-[25px] wahed-navbar active"}>
                    <img className="w-1/2 md:w-1/12 me-[40px]" src={logo} alt="logo" />
                    <NavLink className="font-medium text-[15px]" to="/">HOME</NavLink>
                    <NavLink className="font-medium text-[15px]" to="shop">SHOP</NavLink>
                    <NavLink className="font-medium text-[15px]" to="priceing">PRICEING</NavLink>
                    <NavLink className="font-medium text-[15px]" to="blog">BLOG</NavLink>
                </ul>
                <div className="flex justify-end items-center md:w-8/12">
                    <div
                        onClick={() => setOpenOrClose(!openOrClose)}
                        className="cursor-pointer w-fit  px-5 p-3 rounded-full bg-[#ff4267] text-[#fff] flex items-center">
                        <BsCartCheck />
                        <div className="ms-3 flex justify-between">
                            <span>MY CART </span>
                            <span>({coutCart})</span>
                        </div>
                    </div>
                </div>
                {openOrClose &&
                    <div className="fixed w-full md:w-[40%] right-[-50%] translate-x-[-50%] md:translate-x-[0] md:right-[15px] top-[90px] bg-[#fff] shadow-2xl px-[30px] py-[30px] rounded-xl overflow-y-auto">
                        {totalPrice > 0 ?
                            <div>
                                <div className="flex justify-between items-center border-b-2 py-3">
                                    <h2 className="text-[20px] font-medium">Photo</h2>
                                    <span className="text-[#0a2748]">Product Name</span>
                                </div>
                                {data.map((el) => (
                                    <div
                                        className="flex items-center justify-between my-5"
                                        key={Math.random()}>
                                        <img
                                            className="w-[80px] h-[80px] rounded-full"
                                            src={el.cover}
                                            alt="img" />
                                        <div className="flex flex-col text-[#0a2748] opacity-[.7]">
                                            <h5>{el.title.slice(0, 20)}</h5>
                                            <span>Price : ${el.price}</span>
                                            <span>Quantity : {el.qty}</span>
                                        </div>
                                        <div
                                            className="cursor-pointer text-[#f00]"
                                            onClick={() => filterCarts(el.id)}>
                                            <BsTrash size={22} />
                                        </div>
                                    </div>
                                ))
                                }
                                <div className="font-medium">Total : ${totalPrice}</div>
                            </div>
                            :
                            <div className="flex items-center justify-between">
                                <p className="my-2 text-[#0a2748]">Your cart is empty</p>
                                <img
                                    className="w-[40px] h-[40px] object-cover"
                                    src={cartImg}
                                    alt="cart"
                                />
                            </div>
                        }
                    </div>
                }
            </div >
            <div onClick={() =>
                setNavbar(!navbar)} className="md:hidden fixed z-20 bottom-[20px] right-[20px] bg-[#ff4267] w-[40px] h-[40px] rounded-full flex items-center justify-center text-[#fff] cursor-pointer">
                {navbar ? <AiOutlineBars size={20} /> : <AiOutlineClose size={20} />}
            </div>
            <Outlet />
            <Footer />
        </>
    );
}