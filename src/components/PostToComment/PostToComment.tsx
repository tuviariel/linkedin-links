import Like from "../../assets/images/like.svg";
import Comment from "../../assets/images/comment.svg";
import RePost from "../../assets/images/rePost.svg";
import { useEffect, useState } from "react";
interface UserDataObject {
    image: string;
    name: string;
    content: string;
    likesNumber: number;
    commentsNumber: number;
    rePostsNumber: number;
    id: string;
}
/**
 * NewConnections component:
 * @param props none
 * @returns the checkbox list bar.
 */
export const PostToComment = () => {
    const [data, setData] = useState<UserDataObject | null>(null);
    useEffect(() => {
        const getPostData = () => {
            try {
                setData({
                    image: "https...",
                    name: "Joice Diaz",
                    content: "Just finished a great book...",
                    likesNumber: 12,
                    commentsNumber: 3,
                    rePostsNumber: 1,
                    id: "egtrb5g4vvw4",
                });
            } catch (err) {}
        };
        getPostData();
    }, []);
    const onClickLike = () => {
        console.log("like");
    };
    const onClickComment = () => {
        console.log("comment");
    };
    const onClickRePost = () => {
        console.log("rePost");
    };
    // console.log(addedConnections, likedPosts, commentedPosts);
    return (
        <div className="flex-col mb-2">
            <h3 className="font-bold">Post to Like and Comment on</h3>
            <div className="flex mt-2 mb-3 py-auto">
                <img
                    src={data?.image}
                    alt={data?.name}
                    className="h-10 w-10 mr-3 rounded-full border"
                />
                <div className="flex flex-col my-auto font-semibold">{data?.name}</div>
            </div>
            <div className="">{data?.content}</div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex mx-auto">
                    <img src={Like} alt="Like" className="cursor-pointer" onClick={onClickLike} />
                    <div className="text-[#4F6E96] ml-1">{data?.likesNumber}</div>
                </div>
                <div className="flex mx-auto">
                    <img
                        src={Comment}
                        alt="Comment"
                        className="cursor-pointer"
                        onClick={onClickComment}
                    />
                    <div className="text-[#4F6E96] ml-1">{data?.commentsNumber}</div>
                </div>
                <div className="flex mx-auto">
                    <img
                        src={RePost}
                        alt="Re-post"
                        className="cursor-pointer"
                        onClick={onClickRePost}
                    />
                    <div className="text-[#4F6E96] ml-1">{data?.rePostsNumber}</div>
                </div>
            </div>
        </div>
    );
};
