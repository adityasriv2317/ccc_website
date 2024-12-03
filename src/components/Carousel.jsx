import React from "react";
import img1 from "../assets/team/2k24.jpg";
import img2 from "../assets/team/gow.jpg";
import img3 from "../assets/team/so.jpg";
import img4 from "../assets/team/tod.jpg";

const Carousel = () => {
  return (
    <div className="flex">
      <div className="clist w-1/5 flex space-x-8">
        <div className="gdata active">Red Dead Redemption II</div>
        <div className="gdata">Red Dead Redemption II</div>
        <div className="gdata">Red Dead Redemption II</div>
        <div className="gdata">Red Dead Redemption II</div>
      </div>

      <div class="clist w-4/5 overflow-x-auto flex space-x-8">
        <div className="cgame active">
          <img src={img1} className="h-full" alt="" />
        </div>
        <div className="cgame">
          <img src={img2} className="h-full" alt="" />
        </div>
        <div className="cgame">
          <img src={img3} className="h-full" alt="" />
        </div>
        <div className="cgame">
          <img src={img4} className="h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
