import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function Home() {
    const courses = await getCourses();

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    Course Catalog
                </h1>

                <div className="grid gap-6 md:grid-cols-2">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            description={course.description}
                            credits={course.credits}
                            likes={course.likes}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}