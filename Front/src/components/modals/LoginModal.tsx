import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div
        className="relative bg-white p-8 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <span
          className="absolute top-0 right-0 cursor-pointer text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
