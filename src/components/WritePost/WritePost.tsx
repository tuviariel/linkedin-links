import Button from "../global/Button";
/**
 * WritePost component:
 * @param props none
 * @returns title and button to open post on page
 */
export const WritePost = () => {
    // const {User} = useUserContext()
    const post = () => {
        console.log("post link...");
    };
    return (
        <div className="flex-col mb-2">
            {/* {User.position} */}
            <h3 className="font-bold">What's on your mind? Share your experiences!</h3>
            <Button label="Post" onClick={() => post()} className="flex ml-auto mt-2 py-auto" />
        </div>
    );
};
