// components/LottieAnimation.js
"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1724580418650.json";

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: 200, height: 200 }} // Adjust the width and height as needed
    />
  );
};

export default LottieAnimation;
