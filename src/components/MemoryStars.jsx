import React from "react";
import { motion } from "framer-motion";

const memories = [
  "Tui khub excited chhili amake gift debar jonno on valentines day, your eyes said all",
  "Tui akash dekhe thakte pochondo korish, tai ei akasher moddhei amader moment likhe rakhlam.",
  "Ekta random moment, ekta simple kotha—sheguloi to actually special."
];

const MemoryStars = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8">Floating Memory Stars</h2>
      <div className="space-y-4">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => alert(memory)}
          >
            Click a star to remember
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryStars;