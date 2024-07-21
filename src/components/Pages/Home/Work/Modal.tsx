import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <style>
        {`
          @keyframes scaleUp {
            from {
              transform: scale(0.5);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .scale-up {
            animation: scaleUp 0.5s ease-out forwards;
          }
        `}
      </style>
      <motion.div
        className="bg-white rounded-lg p-4 w-11/12 h-5/6 overflow-auto relative scale-up"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
