import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/animations.module.css";

interface props {
  images: string[];
  delay?: number;
  startAnime?: any;
  endAnim?: any;
}

const HorizontalCarousal = ({ images, delay, endAnim, startAnime }: props) => {
  const [current, setCurrent] = useState(0);
  const [pred, setPred] = useState(images.length - 1);

  useEffect(() => {
    if (current + 1 < images.length) {
      setTimeout(() => {
        setCurrent(current + 1);
      }, delay || 1000);
      if (pred + 1 < images.length) {
        setTimeout(() => {
          setPred(pred + 1);
        }, delay || 1000);
      } else {
        setTimeout(() => {
          setPred(0);
        }, delay || 1000);
      }
    } else {
      setTimeout(() => {
        setCurrent(0);
      }, delay || 1000);
      setTimeout(() => {
        setPred(images.length - 1);
      }, delay || 1000);
    }
  }, [current]);

  return (
    <div
      className="w-full 
    relative overflow-hidden
    flex flex-col items-center
    h-full"
    >
      {images.map((image, idx) => {
        if (current === idx || pred === idx)
          return (
            <div
              key={idx}
              className={`w-full ${
                pred === idx
                  ? `${endAnim ? endAnim : styles.slideAnimOutLeft} absolute `
                  : ""
              }  ${startAnime ? startAnime : styles?.slideAnimInLeft}  h-full`}
            >
              <Image src={image} alt="Promotional Images" quality={100} fill />
            </div>
          );
      })}
      <div className="absolute bottom-4 gap-[10px] transition-all flex ">
        {images.map((dot, idx) => {
          return (
            <div
              className={`w-[10px] h-[10px] rounded-full ${
                current === idx ? "bg-[#D9D9D9]" : "bg-[#D9D9D9]/[0.5]"
              } `}
              key={idx}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalCarousal;
