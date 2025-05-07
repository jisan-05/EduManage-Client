import React from "react";

const SecondaryButton = ({ buttonText }) => {
    return (
        <div>
            <button className="btn btn-neutral bg-white hover:bg-[#07a698] border-none rounded-3xl px-7 md:px-9 py-4 md:py-6 text-[16px] md:text-lg text-black hover:text-white">
                {buttonText}
            </button>
        </div>
    );
};

export default SecondaryButton;
