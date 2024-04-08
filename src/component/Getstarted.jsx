const Getstarted = ()=>{
    return(
        <>
        <section className=" mt-[40px] mb-[50px] ">

            <div className="bg-[#1c2230] container mx-auto ">
                <div>
                    <div className=" py-[30px] text-center">
                        <h1 className=" text-white font-bold">Get early access today</h1>
                        <p className=" w-[300px] md:w-[550px] mx-auto text-[#c5c9d2]">orem ipsum dolor sit amet consectetur, adipisicing elit. A,
                            tempore? Vero adipisci eveniet voluptatibus cupiditate!
                        </p>
                    </div>
                    <form className=" w-[350px] md:w-[680px] mx-auto flex flex-col md:flex-row gap-3 md:justify-between ">
                        <input type="text"  placeholder="eamil@example.com" className=" py-4 w-[300px] md:w-[450px] px-[] outline-none rounded-[20px]" />
                        <button className=" bg-[#42b0d1] text-white rounded-[20px] w-[300px] md:w-[200px] py-[10px] ">Getstarted</button>
                    </form>
                </div>
              

            </div>
        </section>
        
        </>
    )
}
export default Getstarted;