import { useEffect, useState } from "react";
import { motion } from "motion/react";

function App() {
  const [imgSrc, setImgSrc] = useState("./bg/bg-1.jpg");
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count >= 5) return;

    const intervalId = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 1;
        setImgSrc(`./bg/bg-${newCount}.jpg`);
        return newCount;
      });
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);
  return (
    <motion.div className="bg-black w-screen h-screen relative overflow-x-hidden">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="sticky top-0 w-screen h-[50px] text-white font-bold justify-center items-center"
      >
        <span className="absolute top-1/2 left-1/2 ">ddd</span>
      </motion.header>
      <motion.div
        initial={{ x: "-50%", y: "-50%" }}
        style={{ top: "40%", left: "50%" }}
        className="relative flex justify-center items-center "
      >
        <motion.svg
          initial={{ width: "15vh", height: "15vh" }}
          animate={{ width: "50vh", height: "50vh" }}
          transition={{ duration: 1, delay: 2 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#fff"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="50" cy="50" r="40" />{" "}
          <line x1="50" y1="30" x2="50" y2="52" />{" "}
          <circle cx="50" cy="68" r="1" />
        </motion.svg>
        <motion.svg
          initial={{ width: "15vh", height: "15vh" }}
          animate={{ width: "50vh", height: "50vh" }}
          transition={{ duration: 1, delay: 2 }}
          className="w-[64px] h-[64px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#fff"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon fill="none" points="5,50 30,20 90,20 90,80 30,80" />{" "}
          <line x1="70" y1="38" x2="45" y2="62" />{" "}
          <line x1="45" y1="38" x2="70" y2="62" />
        </motion.svg>

        <motion.div
          className="bg-white w-[300px] h-[400px] mx-5"
          initial={{ width: 0 }}
          animate={{ width: [0, 300, 300, 0] }}
          transition={{
            duration: 2.3,
            times: [0, 0.2, 0.7, 1],
          }}
        >
          {imgSrc && (
            <img
              className="object-cover w-full h-full"
              src={imgSrc}
              alt="Background"
            />
          )}
        </motion.div>
        <motion.svg
          initial={{ width: "15vh", height: "15vh" }}
          animate={{ width: "50vh", height: "50vh" }}
          transition={{ duration: 1, delay: 2 }}
          className="w-[64px] h-[64px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#fff"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon
            fill="none"
            points="5,55 50,10 95,55 80,55 80,95 20,95 20,55"
          />
          <circle cx="50" cy="70" r="15" />{" "}
        </motion.svg>
        <motion.svg
          initial={{ width: "15vh", height: "15vh" }}
          animate={{ width: "50vh", height: "50vh" }}
          transition={{ duration: 1, delay: 2 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#fff"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="50" cy="50" r="40" />{" "}
          <line x1="50" y1="30" x2="50" y2="52" />{" "}
          <circle cx="50" cy="68" r="1" />
        </motion.svg>
      </motion.div>
      <motion.div
        className="flex items-center  gap-5 mt-[200px]  justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <img className="w-[500px] h-[500px]" src="./bg/bg-1.jpg" alt="" />
        <img className="w-[500px] h-[500px]" src="./bg/bg-1.jpg" alt="" />
      </motion.div>
    </motion.div>
  );
}

export default App;
