import { useState, useEffect } from "react";

function Comment() {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [username, setUsername] = useState("");

    // Load comments from local storage on component mount
    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        setComments(savedComments);
    }, []);

    // Save comments to local storage whenever comments change
    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);

    const handleAddComment = () => {
        if (commentText.trim() === "" || username.trim() === "") return;

        const newComment = {
            id: Date.now(),
            text: commentText,
            username: username,
        };

        setComments([...comments, newComment]);
        setCommentText("");
        setUsername("");
    };

    const handleDeleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div className="bg-[#0c0d12] text-white grid md:grid-cols-2 grid-cols-1 lg:px-52 md:px-20 sm:px-12 px-8 py-8 gap-4">
            <div className="bg-[#444444] max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        className="text-black md:w-1/2 w-full p-2 mb-2 border rounded"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <textarea
                        className="text-black w-full p-2 border rounded resize-none"
                        rows="3"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    ></textarea>
                    <button
                        onClick={handleAddComment}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ease-in-out duration-300"
                    >
                        Post Comment
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="text-black p-3 bg-gray-100 rounded">
                        <p className="font-semibold">{comment.username}</p>
                        <p>{comment.text}</p>
                        <button
                            onClick={() => handleDeleteComment(comment.id)}
                            className="mt-2 text-sm text-red-500 hover:bg-opacity-80 hover:text-red-700 p-1.5 bg-[#9c9c9c] rounded-lg transition ease-in-out duration-300"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;
