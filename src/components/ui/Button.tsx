import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const baseStyle = "px-4 py-2 rounded text-sm font-medium transition";
  const variants = {
    default: "bg-green-700 text-white hover:bg-green-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={classNames(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
