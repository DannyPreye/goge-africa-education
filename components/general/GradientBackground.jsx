import React from "react";

const GradientBackground = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-dark to-yellow w-screen">
      {children}
    </div>
  );
};

export default GradientBackground;
