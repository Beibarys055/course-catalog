import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
    const courses = await getCourses();

    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <section className="mb-14">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Advanced Web Technologies
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-slate-950">
                        Course Catalog
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
                        Explore our collection of modern web development courses and
                        discover the technologies used to build today's applications.
                    </p>
                </section>

                <section>
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <p className="mb-2 text-sm font-semibold text-blue-600">
                                Available Courses
                            </p>

                            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                                Choose your course
                            </h2>
                        </div>

                        <span className="hidden text-sm text-slate-400 md:block">
              {courses.length} courses
            </span>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                </section>
            </div>
        </main>
    );
}