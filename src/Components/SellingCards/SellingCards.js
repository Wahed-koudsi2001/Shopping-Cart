import { banner } from "../../data/data"

export default function SellingCards() {

    return (
        <div className="grid justify-center lg:grid-cols-2 gap-[35px] my-[80px]">
            {banner.map((el) =>
                <div key={el.id} className="relative h-full w-[80%] md:w-full mx-auto">
                    <img src={el.cover} alt={el.title1} className="w-full" />
                    <div className="absolute top-[50%] translate-y-[-50%] px-5 hidden sm:block">
                        <h4 className="mb-2 text-[#fff] text-[22px] font-medium">{el.title1}</h4>
                        <h5 className="mb-4 text-[#fff] text-[22px] font-medium">{el.title2}</h5>
                        <p className="text-[#fff] opacity-[.7]">{el.desc}</p>
                        <button className="mt-4 bg-[#f05] text-[#fff] py-2 px-[35px] rounded-full">SHOP NOEW</button>
                    </div>
                </div>
            )}
        </div>
    )
}
