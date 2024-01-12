"use client"
import { useEffect, useState } from "react";

const TypeWriter = ({ data }) => {
  const [text, setText] = useState("");
  let unmounted = false;
  let loopNum = 0;
  let period = 2000;
  let isDeleting = false;

  const tick = () => {
    if (unmounted) {
      return;
    }

    const toRotate = data;
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    let newText = "";
    if (isDeleting) {
      newText = fullTxt.substring(0, text.length - 1);
    } else {
      newText = fullTxt.substring(0, text.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && newText === fullTxt) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && newText === "") {
      isDeleting = false;
      loopNum++;
      delta = 500;
    }

    setText(newText);

    setTimeout(() => {
      tick();
    }, delta);
  };

  useEffect(() => {
    unmounted = false;
    loopNum = 0;
    period = 2000;
    isDeleting = false;
    tick();

    return () => {
      unmounted = true;
    };
  }, []);

  return <span className="typewriter">{text}</span>;
};

export default TypeWriter;
