import Button from "../../global/Button";
interface UserDataObject {
    image: string;
    name: string;
    title: string;
    id: string;
}
interface NewConnectionProps {
    data: UserDataObject;
    onClick: (e: any) => void;
}
/**
 * NewConnection component:
 * @param props none
 * @returns the checkbox list bar.
 */
export const NewConnection = (props: NewConnectionProps) => {
    const { data, onClick } = props;
    // console.log(addedConnections, likedPosts, commentedPosts);
    return (
        <div className="flex mt-2 mb-3 py-auto">
            <img src={data.image} alt={data.name} className="h-14 w-14 mx-3 rounded-full border" />
            <div className="flex flex-col my-auto">
                <div className="font-semibold">{data.name}</div>
                <div className="text-[#4F6E96]">{data.title}</div>
            </div>
            <Button
                onClick={() => onClick(data.id)}
                className="flex ml-auto my-auto py-auto"
                label="Connect"
            />
        </div>
    );
};
