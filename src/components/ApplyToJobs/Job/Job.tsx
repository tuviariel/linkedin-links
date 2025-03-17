import Button from "../../global/Button";
import JobImage from "../../../assets/images/job.svg";
interface UserDataObject {
    image: string;
    position: string;
    company: string;
    id: string;
}
interface JobProps {
    data: UserDataObject;
    onClick: (e: any) => void;
}
/**
 * NewConnection component:
 * @param props none
 * @returns the checkbox list bar.
 */
export const Job = (props: JobProps) => {
    const { data, onClick } = props;
    return (
        <div className="flex mt-2 mb-3 py-auto">
            <img src={data.image || JobImage} alt={data.company} className="h-14 w-14 mx-3" />
            <div className="flex flex-col my-auto">
                <div className="font-semibold">{data.position}</div>
                <div className="text-[#4F6E96]">{data.company}</div>
            </div>
            <Button
                onClick={() => onClick(data.id)}
                className="flex ml-auto my-auto py-auto"
                label="Apply"
            />
        </div>
    );
};
