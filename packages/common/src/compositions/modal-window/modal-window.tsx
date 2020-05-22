import React, { FC, ReactNode } from "react";

// https://peteris.rocks/blog/modal-window-in-react-from-scratch/

interface ModalWindowProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalClassName?: string;
}

export const ModalWindow: FC<ModalWindowProps> = ({
  children,
  isOpen,
  onClose,
  modalClassName,
}) => {
  const close = (e: any) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };
  if (isOpen === false) return null;

  return (
    <section className="modal">
      <div className={modalClassName}>{children}</div>
      <div className="backdrop" onClick={(e) => close(e)} />
    </section>
  );
};
