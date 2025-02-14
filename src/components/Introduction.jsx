import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Ei site ta ekta special jaiga, tor jonne.</h1>
        <p className="text-lg">
          Tui jokhon chocolate niye dariye chhili, shei moment ta amar jonne alada chhilo. Unexpected, but perfect. Ei site ta shei moment er ekta digital version—chhoto chhoto moment gulo ek jaigay. Just scroll kor, bujhte parbi.
        </p>
      </motion.div>
    </section>
  );
};

export default Introduction;