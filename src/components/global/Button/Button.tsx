import { ReactElement } from "react";

interface ButtonProps {
    onClick: (e: any) => void;
    className: string;
    label: string;
    children: ReactElement;
}
/**
 * Button component- enables adding a styled button to any page or component
 * @param props onClick, className, label, children
 * @returns a button that can be wrapped around more tsx elements (children)
 */
export const Button: React.FC<Partial<ButtonProps>> = (props) => {
    const { className = "", onClick, label, children = "" } = props;

    return (
        <button
            onClick={onClick}
            className={`h-8 m-2 py-auto px-3 rounded-xl cursor-pointer ${className}`}
            style={{ backgroundColor: "#E8EDF2" }}>
            {children}
            {label}
        </button>
    );
};
