import React from "react";
import { motion } from "framer-motion";

const notes = [
  "Tui chocolate er moto—simple, but ekbar taste korle bhola jay na.",
  "Ekta chhoto surpriseo j koto boro energy dite pare, seta tui ajke bojhli!",
  "kalker raat ta was some other worldly energy for me!"
];

const HiddenNotes = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8">Hidden Love Notes</h2>
      <div className="space-y-4">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => alert(note)}
          >
            Click to reveal a note
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HiddenNotes;