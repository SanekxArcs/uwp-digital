import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid w-screen h-screen place-content-center"
    >
      <h1 className="text-6xl font-black text-center uppercase">
        <span className=" text-port-gore-950">Hello </span>
        <span className=" text-ocean-green-400"> World</span>
      </h1>
      <h2 className="pt-10 text-5xl text-center">Loading . . .</h2>
    </motion.div>
  );
};
