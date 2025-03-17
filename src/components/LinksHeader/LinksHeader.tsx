import linkedInIcon from "../../assets/images/logo.svg";

interface HeaderProps {}
/**
 * LinksHeader component- the Links header: logo, title bar:
 * @param props none
 * @returns the header bar.
 */
export const LinksHeader = () => {
    // const { className = "", onClick, label, children = "" } = props;

    return (
        <div className={`h-16 pt-6 pb-6 flex `}>
            <img src={linkedInIcon} alt="linkedIn" className="flex h-6 w-6 mr-8" />
            <h3 className="text-center w-full font-bold">Links</h3>
            {/* <img src={options} alt='options' className="" /> */}
            <div className="flex h-6 w-6 mx-4"></div>
        </div>
    );
};
