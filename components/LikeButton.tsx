"use client";

import { useState } from "react";

type LikeButtonProps = {
    initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
    const [likes, setLikes] = useState(initialLikes);

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                setLikes(likes + 1);
            }}
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
            ♥ {likes}
        </button>
    );
}