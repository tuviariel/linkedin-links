import Button from "../global/Button";
/**
 * NewConnections component:
 * @param props none
 * @returns the checkbox list bar.
 */
export const WritePost = () => {
    // const {User} = useUserContext()
    const post = () => {
        console.log("post link...");
    };
    return (
        <div className="flex-col mb-6">
            {/* {User.position} */}
            <h3 className="font-bold">What's on your mind? Share your experiences!</h3>
            <Button label="Post" onClick={() => post()} className="flex ml-auto mt-4 py-auto" />
        </div>
    );
};
