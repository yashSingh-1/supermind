import React from "react";
import PaymentButton from "../payment-button";

const Upgrade = () => {
  return (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm">
        Upgrade to {""}
        <span
          className="bg-gradient-to-r
            from-[#CC3BD4] to-[#D064AC] font-bold 
            bg-clip-text text-transparent"
        >
            Smart AI
        </span>
      </span>
      <p className="text-[#9A9BA0] font-light text-sm">
        Unlcok all features <br /> including AI and more!
      </p>
      <PaymentButton />
    </div>
  );
};

export default Upgrade;
