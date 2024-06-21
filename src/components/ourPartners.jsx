import ENP from "../assets/images/ENP.png";
import Oracle from "../assets/images/oracle.png";
import Ministere from "../assets/images/ministere.png";
import Ensa from "../assets/images/ensa.png";
import Cerist from "../assets/images/CERIST.png";
import Enssmal from "../assets/images/ENSSMAL.png";
import Sga from "../assets/images/sga.png";
import { BiChevronRight } from "react-icons/bi";

function ourPartners() {
    return (
        <div className="w-full h-full bg-white p-4 bg-[size:50%]  items-center justify-center flex flex-col gap-y-4">
            <div className="flex w-fit justify-center items-center  lg:items-center gap-y-2">
                <div className="h-4 w-full lg:w-32 mr-4 bg-main-blue" />
                <h1 className="text-greytitle text-5xl text-center mr-4  font-bold">
                    Our Partners
                </h1>
                <div className="h-4 w-full lg:w-32 mr-4 bg-main-blue" />
            </div>
            <p className="text-xl text-center  w-3/5">
                “At ESI, we believe in the power of collaboration. In an era of growing competition, partnerships are essential for success. “
            </p>

            <div className="flex flex-col mt-4">
                <div className=" flex justify-around gap-x-20">
                    <img src={ENP} alt="Partner 1"  />
                    <img src={Oracle} alt="Partner 2" className=" object-none" />
                    <img src={Ministere} alt="Partner 3" className=" object-none" />
                    <img src={Ensa} alt="Partner 4" className=" object-none" />
                </div>
                <div className="flex justify-center gap-x-20 mt-20">
                    <img src={Cerist} alt="Partner 5" className=" object-none" />
                    <img src={Enssmal} alt="Partner 6" className=" object-none" />
                    <img src={Sga} alt="Partner 7" className=" object-none" />
                </div>
            </div>
            <div className="flex items-center justify-center mb-6">
                            <button className="flex items-center gap-x-4 px-10 py-2 mt-4 font-medium text-white bg-main-blue group">
                            <span>Become a Partner</span>
                            <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
                            </button>
            </div>
        </div>
    );
}

export default ourPartners;