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

  // Combine default styles with custom styles
  const mergedOverlayStyle = {
    ...modalStyles.overlay,
    ...(style.overlay || {}),
  };
  const mergedContainerStyle = {
    ...modalStyles.container,
    ...(style.container || {}),
  };
  const mergedHeaderStyle = { ...modalStyles.header, ...(style.header || {}) };
  const mergedTitleStyle = { ...modalStyles.title, ...(style.title || {}) };
  const mergedCloseButtonStyle = {
    ...modalStyles.closeButton,
    ...(style.closeButton || {}),
  };
  const mergedContentStyle = {
    ...modalStyles.content,
    ...(style.content || {}),
  };

  return (
    <div style={mergedOverlayStyle}>
      <div
        ref={modalRef}
        style={mergedContainerStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div style={mergedHeaderStyle}>
          <h2 id="modal-title" style={mergedTitleStyle}>
            {title}
          </h2>
          <button
            style={mergedCloseButtonStyle}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div style={mergedContentStyle}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
