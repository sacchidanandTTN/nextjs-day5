"use client"
import Link from "next/link";
import React from "react";

interface NavButtonProps {
  href: string;
  label: string;
  color?: string; 
}

const NavButton: React.FC<NavButtonProps> = ({ href, label, color }) => {
  const bgColor = color || "green"; 
  const hoverColor = "green";

  return (
    <Link href={href}>
      <button
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
         
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
      >
        {label}
      </button>
    </Link>
  );
};

export default NavButton;