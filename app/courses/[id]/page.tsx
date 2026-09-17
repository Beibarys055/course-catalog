import { notFound } from "next/navigation";
import { getCourse } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";

type CoursePageProps = {
    params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
    const { id } = await params;

    const course = await getCourse(id);

    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">
                    {course.title}
                </h1>

                <p className="text-lg mb-4">
                    {course.description}
                </p>

                <p className="mb-4">
                    Credits: {course.credits}
                </p>

                <LikeButton initialLikes={course.likes} />
            </div>
        </main>
    );
}