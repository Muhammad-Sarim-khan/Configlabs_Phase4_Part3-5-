'use client';

import { SignUp } from "@clerk/nextjs";

function page(){
    return(
        <div className="flex justify-center mt-15 mb-15">
            <SignUp></SignUp>
        </div>
    );
}
export default page;