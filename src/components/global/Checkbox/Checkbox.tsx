interface CheckboxProps {
    children: string;
    onChange: (e: any) => void;
}
/**
 * LinksHeader component- the Links header: logo, title bar:
 * @param props none
 * @returns the header bar.
 */
export const Checkbox = (props: CheckboxProps) => {
    const { onChange, children = "" } = props;

    return (
        <div className="flex mt-2 mb-3">
            <input
                type="checkbox"
                className="mr-3"
                onChange={onChange}
                // value={addedConnections}
            />
            <label>{children}</label>
        </div>
    );
};
