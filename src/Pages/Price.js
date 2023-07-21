import { price } from "../data/data"

export default function Price() {
    document.title = "PRICING"
    return (
        <div className="bg-[#0a2748] pb-[55px] ">
            <div className="container mx-auto">
                <div className="pt-[140px] text-center">
                    <h1 className="mb-2 text-[30px] font-semibold text-[#fff]">Choose The Plans</h1>
                    <p className="text-[15px] text-[#fff] opacity-[.7]">Meet our newbies! The latest templates uploaded to the marketplace.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-[50px] gap-[60px]">
                    {price.map((el) =>
                        <div key={el.id} className={el.name === "Premium" ? "bg-[#0a2b52] rounded-xl px-5" : "bg-[#0a1b52] rounded-xl px-5"}>
                            <div className="p-5">
                                <h1 className={el.name === "Free Trial" ? "text-[#ffcc6a] text-[25px]" : "text-[#78e382] text-[25px]"}>{el.name}</h1>
                                <p className="text-[#6c8eb6]"><span className="text-[#fff]">$</span><span className="text-[50px] text-[#fff]">{el.price}</span>/user per month </p>
                                <p className="text-[#6c8eb6]">{el.desc}</p>
                                <button className="mt-[30px] bg-[#f05] text-[#fff] px-[40px] py-2 rounded-full">GET STARTED</button>
                                <ul className="py-5 flex flex-col gap-[30px] mt-[30px]">
                                    {el.list.map((el, index) =>
                                        <li key={index}>
                                            <div className="flex items-center">
                                                <span className="me-4 text-[#fff]">{el.icon}</span>
                                                <span className="text-[#fff]">{el.para}</span>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
