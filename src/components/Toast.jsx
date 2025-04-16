import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose }) => {
  const bgColor = type === 'success' ? 'bg-blue-500' : 'bg-blue-500';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center`}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 hover:text-gray-200"
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;