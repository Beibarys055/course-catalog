import Link from "next/link";
import LikeButton from "./LikeButton";

type CourseCardProps = {
    id: string;
    title: string;
    description: string;
    credits: number;
    likes: number;
};

export default function CourseCard({
                                       id,
                                       title,
                                       description,
                                       credits,
                                       likes,
                                   }: CourseCardProps) {
    return (
        <Link href={`/courses/${id}`}>
            <div className="rounded-lg border p-4">
                <h2 className="text-xl font-semibold">{title}</h2>

                <p>{description}</p>

                <p>Credits: {credits}</p>

                <LikeButton initialLikes={likes} />
            </div>
        </Link>
    );
}