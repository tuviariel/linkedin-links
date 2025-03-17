import { useState } from "react";
import Checkbox from "../global/Checkbox";

interface DailyChecklistProps {}
/**
 * DailyChecklist component:
 * @param props none
 * @returns the checkbox list bar.
 */
export const DailyChecklist = (props: DailyChecklistProps) => {
    // const { className = "", onClick, label, children = "" } = props;
    const [addedConnections, setAddedConnections] = useState<boolean>(false);
    const [likedPosts, setLikedPosts] = useState<boolean>(false);
    const [commentedPosts, setCommentedPosts] = useState<boolean>(false);
    console.log(addedConnections, likedPosts, commentedPosts);
    return (
        <div className="flex-col">
            <h3 className="font-bold">Your Daily Links Checklist</h3>
            <Checkbox onChange={() => setAddedConnections((prev) => !prev)}>
                Added 5 New Connections
            </Checkbox>
            <Checkbox onChange={() => setLikedPosts((prev) => !prev)}>Liked 3 Posts</Checkbox>
            <Checkbox onChange={() => setCommentedPosts((prev) => !prev)}>
                Commented on 3 Posts
            </Checkbox>
        </div>
    );
};
