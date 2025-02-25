import { ReactElement } from "react";

interface ButtonProps {
    onClick: (e: any) => void;
    className: string;
    label: string;
    children: ReactElement;
}

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
    const { className = "", onClick, label, children = "" } = props;

    return (
        <button
            onClick={onClick}
            className={`h-8 m-2 pb-3 text-amber-200 bg-cyan-800 ${className}`}
            style={{ backgroundColor: "blue", padding: "8px" }}>
            {children}
            {label}
        </button>
    );
};
