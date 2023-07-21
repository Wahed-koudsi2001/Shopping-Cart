import { blog } from "../data/data"

export default function Blog() {
    return (
        <div className="pt-[140px] pb-[50px] bg-[#ffcede]">
            <div className="container mx-auto">

                <div className="text-center">
                    <h3 className="text-[30px]">LATEST BLOG POSTS</h3>
                    <h4 className="opacity-[.7]">Latest marketplace news, success stories and tutorials.</h4>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-[35px] justify-center">
                    {blog.map((el) =>
                        <div key={el.id} className="relative">
                            <img src={el.cover} alt={el.title} className="rounded-md w-full object-cover" />
                            <div className="absolute top-[50%] translate-y-[-50%] px-5">
                                <button className="px-5 py-2 bg-[#f05] rounded-full text-[#fff]">{el.category}</button>
                                <div>
                                    <p className="my-5 text-[#fff] opacity-[0.9]">Post Date : {el.date}</p>
                                    <p className="text-[#fff]">{el.title}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
