import { MdFilterList } from "react-icons/md";
import { MdGridOn } from "react-icons/md";
import { MdViewList } from "react-icons/md";
import ProductCard from "../components/card";
import Perks from "../components/perks";
import Link from "next/link";
import {client} from "@/sanity/lib/client"


async function Shop(){
  const data = await client.fetch(`*[_type=="product_details"]{
    _id,
    heading,
    subheading_desc,
    subheading,
    "imageUrl": image.asset->url
}`)


const products= [...data,...data,...data]

    return(
        <>
        
        <div className="flex items-center justify-center w-screen h-[340px] mt-[30px] bg-orange-100">
            <div className="mr-[20px] space-y-8">
            <h1 className="text-5xl font-bold">SHOP</h1>
            <p className="text-xl font-bold ml-[5px]">Home  &gt;  Shop</p>
            </div>
        </div>
        
        <div className=" flex w-screen h-[100px] bg-orange-100 mt-[2px]  items-center ">
            <div className="flex space-x-6 ml-[100px]">
            <MdFilterList size={30}></MdFilterList>
            <p className="text-xl font-bold">Filter</p>
            <MdGridOn size={30}></MdGridOn>
            <MdViewList size={30}></MdViewList>
            </div>
            <div className="items-center justify-center h-[100px]">
            <p className="ml-[70px]  border-l-2 border-slate-500 mt-[35px] h-[40px] px-[30px] py-[10px]">Showing 1-16 of 32 results</p>
            </div>
            <div className="flex items-center justify-center ml-[450px] space-x-6">
                <p>Show</p>
                <input placeholder="16" className="text-slate-500 w-[40px] h-[40px] px-4 py-4"></input>
            
            
                <p>Sort by</p>
                <input placeholder="Default" className="w-[80px] h-[40px]"></input>
            </div>
        </div>
        {/*Displaying cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16 px-4 mt-20 ml-[70px]">
    {products.map((product,index) => (
  <div key={`${product._id}-${index}`} className="product-card">
    <Link href="/product_description">
      <ProductCard
        
        products={product}
        image={product.imageUrl}
        title={product.heading}
        description={product.subheading_desc}
        price={product.subheading}
      />
    </Link>
  </div>
))}
    </div>
    <div className="flex mt-[100px] ml-[600px] mb-[90px] space-x-12">
        <button className="w-[50px] h-[50px] rounded-sm bg-yellow-600 text-white text-2xl">1</button>
        <button className="w-[50px] h-[50px] rounded-sm bg-orange-200 text-black text-2xl">2</button>
        <button className="w-[50px] h-[50px] rounded-sm bg-orange-200 text-black text-2xl">3</button>
        <button className="w-[90px] h-[50px] rounded-sm bg-orange-200 text-black text-2xl">Next</button>
    </div>
    
    <Perks></Perks>
</>
    )
}

export default Shop;