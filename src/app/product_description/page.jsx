import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import ProductCard from "../components/card";
import {client} from "@/sanity/lib/client"
import Shop from "../shop/page";

 async function ProductDescription(){
    const data = await client.fetch(`*[_type=="product_details"]{
        _id,
        heading,
          subheading_desc,
          subheading,
          "imageUrl": image.asset->url
      }`)
      
      
      const products= [...data]
      
    return(
        <>
        <div className="w-screen h-[100px] bg-orange-100 mt-[30px]">
            <div className="h-[100px] flex items-center ml-[195px] text-xl font-bold ">
            <h1>Home &gt; Shop &gt;</h1>
            <p className="ml-[25px]  border-l-2 border-slate-500  h-[40px] px-[25px] py-[6px]">Asgaard Sofa</p>
            </div>
        </div>

        <div className="w-screen h-[1100px]">
            <div className="flex">
                <div className="flex">
                    <div className="ml-[130px] mt-[50px] space-y-4">
                        <img src="sofa2.png" alt="" className="w-[110px] h-[100px] bg-orange-100 rounded-lg" />
                        <img src="sofa3.png" alt="" className="w-[110px] h-[100px] bg-orange-100 rounded-lg" />
                        <img src="sofa4.png" alt=""  className="w-[110px] h-[100px] bg-orange-100 rounded-lg"/>
                        <img src="sofa5.png" alt=""  className="w-[110px] h-[100px] bg-orange-100 rounded-lg"/>
                    </div>
                    <div className="flex ml-[65px] mt-[50px] bg-orange-100 rounded-lg">
                        <img src="sofa1.png" alt="" className="w-[500px] h-[560px]" />
                    </div>
                </div>

            <div className="w-[400px] ml-[50px] mt-[50px]">
                <h1 className="text-5xl">Asgaard Sofa</h1>
                <h1 className="mt-[15px] text-2xl text-gray-600">Rs. 250,000.00</h1>
                <p className="mt-[20px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                <p className="mt-[20px] text-xl text-gray-600">Size</p>
                <div className="flex mt-[35px] space-x-8">
                    <button className="w-[50px] h-[50px] rounded-sm bg-yellow-600 text-white">L</button>
                    <button className="w-[50px] h-[50px] rounded-sm bg-orange-200 text-black">XL</button>
                    <button className="w-[50px] h-[50px] rounded-sm bg-orange-200 text-black">XS</button>        
                </div>
                <p className="mt-[20px] text-xl text-gray-600">Color</p>
                <div className="flex mt-[20px] space-x-5">
                    <button className="w-[30px] h-[30px] rounded-full bg-indigo-500"></button>
                    <button className="w-[30px] h-[30px] rounded-full bg-black"></button>
                    <button className="w-[30px] h-[30px] rounded-full bg-yellow-600"></button>
                </div>
            <div className="flex space-x-8">
                <div className="flex space-x-8 mt-[30px] items-center justify-center w-[160px] h-[80px] rounded-lg border border-gray-500 text-2xl font-bold ">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <div className="flex mt-[30px]">
                    <button className="w-[250px] h-[80] items-center justify-center rounded-lg border border-black text-2xl font-bold">Add to Cart</button>
                </div>
            </div>
            
                </div>
                
            </div>
            <div className="space-y-6 h-[200px] mb-[100px] ml-[850px] w-[750px] mt-[80px] py-[100px] border-t-2 border-slate-500 text-2xl text-gray-500">
                <p>SKU       : SS001</p>
                <p>Category  : Sofas</p>
                <p>Tags      : Sofa, Chair, Home, Shop</p>
                <div className="flex space-x-4" >
                    <p>Share    :</p>
                    <FaFacebook className="w-[30px] h-[30px] text-black"></FaFacebook>
                    <FaLinkedin className="w-[30px] h-[30px]  text-black"></FaLinkedin>
                    <FaTwitter className="w-[30px] h-[30px]  text-black"></FaTwitter>

                </div>
            </div>

        </div>

        <div className="h-[800px] border-t-2 border-b-2 border-gray-300 items-center justify-center ">
            <div className="flex  mt-[70px] space-x-14 w-screen items-center justify-center text-3xl font-bold">
                <h1>Description</h1>
                <h1 className="text-gray-500">Additional Information</h1>
            </div>
            <div className="w-[1200px] mt-[70px] items-center justify-center ml-[270px] ">
            <p className="text-gray-500 ">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className="text-gray-500">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
            <div className="flex space-x-4 mt-[50px] items-center justify-center ">
            <img src="cloudsofa1.png" className="w-[605px] h-[348px] bg-orange-100 rounded-lg"></img>
            <img src="cloudsofa2.png" className="w-[605px] h-[348px] bg-orange-100 rounded-lg"/>
            </div>
        </div>

        <div className="flex text-3xl font-bold items-center justify-center mt-[60px]">
            <h1>Related Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16 px-4 mt-16 ml-[70px]">
        {products.map((product) => (
  <div key={product._id} className="product-card">
    
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

    <div className=" flex mt-[100px] mb-[100px] items-center justify-center">
        <div className="flex items-center justify-center text-yellow-600 border border-yellow-600 w-[220px] h-[60px] ">
            <button>Show More</button>
        </div>
    </div>

        
        </>
    )
}
export default ProductDescription;