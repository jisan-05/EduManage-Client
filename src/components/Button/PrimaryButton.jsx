import React from 'react';

const PrimaryButton = ({buttonText}) => {
  return (
    <div>
      <button className="btn btn-neutral bg-[#07a698] hover:bg-[#01998c] border-none rounded-3xl px-9 py-6 text-lg text-white">{buttonText}</button>
    </div>
  );
};

export default PrimaryButton;