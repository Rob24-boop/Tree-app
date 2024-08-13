import React, { useRef } from "react";
import styles from "./Modal.module.css";
import { IModalProps } from "../../types/types";

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  iconType,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      onSubmit(inputValue, iconType);
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {iconType === "add" ? <h2>Add New Item</h2> : <h2>Change The Name</h2>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name={iconType === "add" ? "newItem" : "newName"}
            placeholder={
              iconType === "add" ? "Enter item name" : "Enter new name"
            }
            required
            ref={inputRef}
          />
          <div className={styles.modalActions}>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">
              {iconType === "add" ? "Add Item" : "Change"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
