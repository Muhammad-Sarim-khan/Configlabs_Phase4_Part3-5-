const Footer =()=>{
    return(
    <>
    <div className="flex w-[1350px] h-[500px]  border border-slate-500">
      <h1 className="text-3xl font-bold text-black mt-[60px] ml-[100px]"> Funiro</h1>
        <div className="ml-[400px] mt-[80px] flex flex-col space-y-14 text-sm font-bold">
          <a href="">links</a>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

      <div className="ml-[210px] mt-[80px] flex flex-col space-y-14 text-sm font-bold">
          <a href="">Help</a>
          <a href="">Payment Options</a>
          <a href="">Returns</a>
          <a href="">Privacy Policy</a>
      </div>
      <div className="ml-[140px] mt-[80px] flex flex-col space-y-14 text-sm font-bold ">
          <a href="">Subscribe</a>
          
      </div>
    </div>

    <div className="mt-[80px] ml-[100px] mb-[80px]">
      <p>2023 furino. All rights reserved</p>

    </div>
    </>
    );
};

export default Footer;