"use client";
import boardMembers from "@/data/BoardCards";
import BoardCard from "@/components/board/BoardCard";
import Header from "@/components/Header";
import { motion } from "motion/react";

const boardAnimation = {
  hidden: { opacity: 0, y: -50 },
  display: { opacity: 1, y: 0 },
};

const BoardMapping = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Header text="Meet the Board!" />
      <div className="mt-10 grid grid-cols-1 gap-x-40 gap-y-20 md:grid-cols-2">
        {boardMembers.map((member, index) => (
          <motion.div
            variants={boardAnimation}
            initial="hidden"
            whileInView="display"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
          >
            <BoardCard
              key={index}
              name={member.name}
              role={member.title}
              image={member.image}
              email={member.email}
              instagram={member.instagram}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoardMapping;
