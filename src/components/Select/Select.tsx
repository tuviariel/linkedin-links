import { ReactElement } from "react";

interface SelectProps {
    onChange: (e: any) => void;
    className: string;
    label: string;
    value: string;
    children: ReactElement;
}
/**
 * Select component- enables adding a select input element to any page or component
 * @param props onChange, classname, label, value, children (the options tags)
 * @returns the select input as a component while wrapped around the option tags as children
 */
export const Select: React.FC<Partial<SelectProps>> = (props) => {
    const { className = "", onChange, value, label, children = "" } = props;

    return (
        <div className="flex flex-col my-6">
            <label className="text-center text-sm font-bold">{label}</label>
            <select
                value={value}
                onChange={onChange}
                className={`mx-10 border rounded bg-blue-200 ${className}`}>
                {children}
            </select>
        </div>
    );
};
