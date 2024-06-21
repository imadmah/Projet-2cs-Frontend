
import { BiChevronRight } from "react-icons/bi";

const Invite = () => {
    return (
        <div className=" w-full h-15 flex flex-col mt-2 items-center justify-center">
            <div className=" w-[40%] bg-[size:50%] bg-center pt-2 flex flex-col bg-[#E6EDF8]">
                <div className="flex items-center flex-col gap-y-2 mb-2 justify-center">
                     <div className="flex flex-col items-center my-2">
                         <button className="flex items-center gap-x-4 px-10 py-2 font-medium text-white bg-main-blue group">
                         <span>Become a Partner</span>
                         <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
                         </button>
                     </div>
                <div className="flex items-center flex-col gap-y-2 mb-4 justify-center">
                <p> Join us and become one of our partners </p>         
                <div className="flex items-center flex-col gap-y-2 mb-4 justify-center">
                    <h1 className="text-3xl text-center text-main-blue font-bold ">
                      One way to experience
                    </h1>
                </div>
            </div>
        </div>
        </div>
        
        </div>
    )};

    export default Invite;
