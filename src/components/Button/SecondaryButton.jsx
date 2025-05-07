import React from "react";

const SecondaryButton = ({ buttonText }) => {
    return (
        <div>
            <button className="btn btn-neutral bg-white hover:bg-[#07a698] border-none rounded-3xl px-9 py-6 text-lg text-black hover:text-white">
                {buttonText}
            </button>
        </div>
    );
};

export default SecondaryButton;
