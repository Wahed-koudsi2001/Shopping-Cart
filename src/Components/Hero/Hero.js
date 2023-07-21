import { hero } from "../../data/data"


export default function Hero() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center hero h-[70vh]">
                <h3 className="leading-10 font-medium text-[35px] font-thick">Over <span className="text-[#ff5400]">6,500</span> Curated Design <br />
                    Resources, <span className="text-[#ff5400]">Graphic & Website</span> Templates
                </h3>
                <p className="text-[15px] text-[#0a2748] py-5">High-quality Design Themes for personal or commercial use contains 6k+ items in 100 categories.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center items-center mb-[50px]">
                {hero.map((card) =>
                    <div key={card.id} className="flex items-center bg-[#fff] rounded-xl p-5">
                        <img className="w-4/12" src={card.cover} alt={card.name} />
                        <div className="ms-3">
                            <h4 className="font-medium">{card.name}</h4>
                            <span className="text-[#0a2748]">{card.items} items</span>
                        </div>
                    </div>
                )}</div>
        </div>
    )
}
