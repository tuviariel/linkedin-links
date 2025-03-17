import Job from "./Job";
/**
 * ApplyToJobs component:
 * @param props none
 * @returns the Jobs list with apply button.
 */
export const ApplyToJobs = () => {
    const apply = (id: string) => {
        console.log(id);
    };
    return (
        <div className="flex-col">
            <h3 className="font-bold">Jobs you may be interested in</h3>
            <Job
                onClick={apply}
                data={{ image: "", company: "dfvdsv", position: "sdfvsdf", id: "sefvsekvjr34" }}
            />
            <Job
                onClick={apply}
                data={{ image: "", company: "dfvdsv", position: "sdfvsdf", id: "sefvsekvjr34" }}
            />
        </div>
    );
};
