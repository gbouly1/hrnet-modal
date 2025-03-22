import React, { useEffect, useRef } from "react";

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    maxHeight: "90vh",
    overflow: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: 0,
    color: "#333",
  },
  content: {
    marginBottom: "15px",
  },
};

const Modal = ({ isOpen, onClose, title, children, style = {} }) => {
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div
        ref={modalRef}
        style={{ ...modalStyles.container, ...style.container }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div style={modalStyles.header}>
          <h2 id="modal-title" style={modalStyles.title}>
            {title}
          </h2>
          <button
            style={modalStyles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div style={modalStyles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
