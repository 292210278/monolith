import { useRef, useState } from "react";
import { throttle } from "lodash";
import { motion } from "motion/react";
import "./App.css";

function Magnify() {
  const [magnifyState, setMagnifyState] = useState({
    mousePosition: { x: 0, y: 0 },
    backgroundPosition: "50% 50%",
  });
  const animationFrameRef = useRef(null);

  const throttledMouseMove = throttle((e) => {
    if (animationFrameRef.current) return;
    animationFrameRef.current = requestAnimationFrame(() => {
      const { left, top, width, height } = e.target.getBoundingClientRect();

      const xPercent = ((e.clientX - left) / width) * 100;
      const yPercent = ((e.clientY - top) / height) * 100;

      const newMousePosition = {
        x: e.clientX - left - 165,
        y: e.clientY - top - 165,
      };

      setMagnifyState({
        mousePosition: newMousePosition,
        backgroundPosition: `${xPercent}% ${yPercent}%`,
      });

      animationFrameRef.current = null;
    });
  }, 16);

  return (
    <>
      <motion.div
        className="absolute bottom-0  bg-white z-10 origin-bottom"
        initial={{ width: "100vw", height: "0vh" }}
        animate={{ width: "100vw", height: ["0vh", "100vh", "100vh", "0vh"] }}
        transition={{ duration: 2, times: [0, 0.4, 0.6, 1] }}
      ></motion.div>
      <div className="h-screen w-full flex">
        <div
          className="h-screen w-[50vw] relative overflow-hidden"
          onMouseMove={throttledMouseMove}
        >
          <img
            className="w-full h-full object-cover"
            src="./bg/bg-8.avif"
            alt="Main"
          />
        </div>
        <div
          className="h-screen w-[50vw] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('./bg/bg-8.avif')`,
            backgroundSize: "200%",
            backgroundPosition: magnifyState.backgroundPosition,
          }}
        ></div>
      </div>
    </>
  );
}

export default Magnify;
