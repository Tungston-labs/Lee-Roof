import React, { useState } from "react";

const ImageDropdown = ({ images, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (img) => {
    onChange(img);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", width: 150 }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ccc",
          padding: "6px",
          cursor: "pointer",
          borderRadius: 6,
          background: "#fff",
        }}
      >
        {value ? (
          <img src={value} alt="selected" style={{ width: 32, height: 32, objectFit: "cover" }} />
        ) : (
          <span>Select image</span>
        )}
        <span>▼</span>
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            background: "#fff",
            zIndex: 10,
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => handleSelect(img)}
              style={{
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={img}
                alt="option"
                style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4 }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageDropdown;
