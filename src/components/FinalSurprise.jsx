import React from "react";
import { motion } from "framer-motion";

const FinalSurprise = () => {
  return (
    <section className="h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="text-6xl mb-4">☕</div>
        <h2 className="text-4xl font-bold">Tui amar chocolate.</h2>
        <p className="text-lg mt-4">
          Tui jodi konodin mon kharap hoy, ei site ta khule dekhis karon amar kache tor mane ekta chocolate er moto—shobcheye priyo, shobcheye shokto, ar shobcheye beshi energy dayok.
        </p>
      </motion.div>
    </section>
  );
};

export default FinalSurprise;