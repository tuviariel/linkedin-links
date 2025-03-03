import { ReactElement } from "react";

interface ButtonProps {
    onClick: (e: any) => void;
    className: string;
    label: string;
    children: ReactElement;
}
/**
 * Button component- enables adding a styled button to any page or component
 * @param props onClick, className, style, label, children
 * @returns a button that can be wrapped around more tsx elements (children)
 */
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
