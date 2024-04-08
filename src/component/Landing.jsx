import img2 from "../assets/images/illustration-intro.png"
const Landing = ()=>{

    return(
        <>
        <section className=" mt-5">
                <div className="container ml-auto mr-auto flex justify-center flex-col">
                    <div className=" w-[280px] xl:w-[480px] mr-auto ml-auto" >
                        <img src={img2} alt="" className=" max-w-[100%]"/>
                    </div>

                    <div className=" text-center">
                        <h1 className=" text-white font-bold w-[500px] xl:w-[500px] mr-auto ml-auto text-2xl">  All your files in one secure location</h1>
                        <h1 className=" text-white font-bold w-[490px] mr-auto ml-auto text-xl">accessible anywhere.</h1>
                        <p className=" w-[390px] xl:w-[450px] mr-auto ml-auto mt-4 text-[#c2c8d4]">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                            iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
                              nulla impedit commodi.
                        </p>

                    </div>
                    <button className=" bg-[#85dee4] w-[220px] ml-auto mr-auto mt-4 rounded-[10px] text-white">Get Started</button>
                </div>
                    
            </section>        

        </>
    )
}
export default Landing;