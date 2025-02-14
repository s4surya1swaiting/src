import React, { useState } from "react";
import { motion } from "framer-motion";

const Quiz = () => {
  const [starsLit, setStarsLit] = useState(0);

  const handleAnswer = (correct) => {
    if (correct) setStarsLit((prev) => prev + 1);
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8">Chocolate Memory Test</h2>
      <div className="space-y-4">
        <div>
          <p className="text-lg mb-2">What is the brand of chocolate Mammam gave Momo for the first time?</p>
          <div className="flex gap-4">
            {["Bonville", "Mother Dairy", "Amul Dark", "Campco"].map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option === "Bonville")}
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg mb-2">What is the brand of chocolate Momo gave Mammam for the first time?</p>
          <div className="flex gap-4">
            {["Bonville", "Mother Dairy", "Amul Dark", "Campco"].map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option === "Mother Dairy")}
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-2">
        {Array.from({ length: starsLit }). map((_, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-yellow-500 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Quiz;