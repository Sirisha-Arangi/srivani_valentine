import React from "react";
import { motion } from "framer-motion";
import "./LoveLetter.css";

export default function LoveLetter({ onClose }) {
  return (
    <motion.div
      className="love-letter-container"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="love-letter">
        <p>
          **My Love,**  
          It feels like we've known each other for lifetimes.  
          Every moment with you is a mix of endless laughter, sweet annoyance, and the kind of happiness that only you can bring me.  
          You drive me crazy, yet you're the only one who can calm my storms.  
          No matter how angry or frustrated I am, the second I see you, everything else fades away.  
          You are my safe place, my constant, my forever kind of love.  
          With you, every day is an adventure, and I wouldn’t want it any other way.  
          So here’s to us—to the love that feels timeless, to the laughter that never stops, and to the beautiful journey ahead. 💖  
        </p>
        <button className="close-letter-btn" onClick={onClose}>
          Close Letter ❌
        </button>
      </motion.div>
    </motion.div>
  );
}
