import { motion } from "framer-motion";
import PropTypes from 'prop-types';

interface TypingCodeSnippetProps {
  text: string;
}

export const TypingCodeSnippet: React.FC<TypingCodeSnippetProps> = ({ text }) => {
  return (
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {text.split("").map((char, index) => (
          <motion.div
            key={index}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.div>
        ))}
      </motion.span>
  );
};

TypingCodeSnippet.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypingCodeSnippet;
