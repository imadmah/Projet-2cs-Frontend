import React from "react";
import MiniCard from "./Mini_Card";
import Cardimg5 from "../assets/images/XMLID.png";
import Cardimg2 from "../assets/images/Promotion.png";
import Cardimg6 from "../assets/images/Online_lesson.png";
import Cardimg3 from "../assets/images/Group.png";
import Cardimg1 from "../assets/images/Excellence.png";
import Cardimg4 from "../assets/images/Save_the_planet.png";

const WhyEsi = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-main-blue text-center">
        Why Choose Esi
      </p>
      <div className="grid p-16 grid-cols-2 gap-4 ">
        <MiniCard
          imageUrl={Cardimg1}
          initialText="Empower Your Journey"
          secondText="Students shape their journey with a rich curriculum and diverse activities, equipping them with essential skills for success."
        />
        <MiniCard
          imageUrl={Cardimg2}
          initialText="Refine your approach
          to improvement"
          secondText="Students develop practical skills, interpersonal abilities, and professionalism through lectures, activities, and real-world challenges"
        />
        <MiniCard
          imageUrl={Cardimg3}
          initialText="Value your own efforts"
          secondText="At ESI, every effort counts. Students, faculty, and staff are at the heart of our institution, ensuring continuous support for all."
        />
        <MiniCard
          imageUrl={Cardimg4}
          initialText="Explore diverse
          intellectual horizons"
          secondText="ESI fosters personal growth by uniting diverse skills, ideas, and experiences. Students expand expertise through varied courses and activities"
        />
        <MiniCard
          imageUrl={Cardimg5}
          initialText="Enjoy a harmonious and
          innovative environment"
          secondText="ESI fosters innovation, connecting students to the job market and research opportunities through a network of active alumni and partner companies."
        />
        <MiniCard
          imageUrl={Cardimg6}
          initialText="Bring out your best and benefit
          from others' strengths"
          secondText="At ESI, mutual efforts benefit all members, fostering collective intelligence to stay ahead and prepare for the future."
        />
      </div>
    </div>
  );
};

export default WhyEsi;
