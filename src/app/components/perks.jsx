import { FaTrophy } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";


function Perks(){

    return(
        <>

<div className="flex bg-black h-[370px] w-screen mb-0">
        <div className="flex ml-[70px] mt-[150px] space-x-[170px]">
            <div className="flex space-x-4">
                <FaTrophy className="text-yellow-600" size={60}></FaTrophy>
                <div>
                <p className="text-yellow-600 text-2xl font-bold">High Quality</p>
                <p className="text-white">Crafted from top materials</p>
                </div>
            </div>
            <div className="flex space-x-4 ml-[50px]">
                <BsShieldCheck className="text-yellow-600" size={60}></BsShieldCheck>
                <div>
                <p className="text-yellow-600 text-2xl font-bold">Warranty Protection</p>
                <p className="text-white">Over 2 years</p>
                </div>
            </div>
            <div className="flex space-x-4 ml-[50px]">
                <FaShippingFast className="text-yellow-600" size={60}></FaShippingFast>
                <div>
                <p className="text-yellow-600 text-2xl font-bold">Free Shipping</p>
                <p className="text-white">Order over 150 $</p>
                </div>
            </div>
            <div className="flex space-x-4 ml-[50px]">
                <MdSupportAgent className="text-yellow-600" size={60}></MdSupportAgent>
                <div>
                <p className="text-yellow-600 text-2xl font-bold">24/7 Support</p>
                <p className="text-white">Dedicated support</p>
                </div>
            </div>
        </div>

    </div>
    </>

    )

};
export default Perks;