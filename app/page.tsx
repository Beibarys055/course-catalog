import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function Home() {
    const courses = await getCourses();

    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <section className="mb-16 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                        Advanced Web Technologies
                    </p>

                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
                        Learn modern
                        <span className="text-blue-600"> web technologies</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                        Explore courses covering frontend development, backend
                        technologies, databases, API design, web security, and
                        artificial intelligence.
                    </p>
                </section>

                <section>
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <p className="mb-2 text-sm font-semibold text-blue-600">
                                Course Catalog
                            </p>

                            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                                Explore our courses
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