import React from "react";

const CustomArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={'slick-common '+className}
        type='button'
        style={{ ...style, height: "42px", width: "42px", color: "#2a404e"
        }}
        onClick={onClick}
      />
    );
  };

  export default CustomArrow;