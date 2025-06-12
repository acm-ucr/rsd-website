import { motion } from "motion/react";

const animationFadeIn = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
};

const Video = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        variants={animationFadeIn}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 mb-10 flex w-5/6 max-w-screen-lg items-center justify-center px-5"
      >
        <iframe
          src="https://www.youtube.com/embed/Xs0hR3QIQNE?si=qkDfhaD82i5ogqoe"
          className="mt-5 mb-5 aspect-video w-full rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default Video;
