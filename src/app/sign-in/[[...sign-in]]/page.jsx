'use client';

import { SignIn} from "@clerk/nextjs";

function page(){
    return(
        <div className="flex justify-center mt-15 mb-15">
            <SignIn></SignIn>
        </div>
    );
}
export default page;