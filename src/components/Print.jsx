import React from "react";

export default function Print({ handlePrint }) {

  return (
    <div className='gradient color-2 about-mobile print-desktop'>
      <button 
        onClick={handlePrint}
        className="print-button view-button"
      >Print</button>
    </div>
  );
}
