export default function About() {
    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <section className="mb-14 max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        About the Project
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-slate-950">
                        About Course Catalog
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-500">
                        A modern course catalog created for the Advanced Web Technologies
                        course.
                    </p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-3xl bg-blue-50 p-8">
                        <h2 className="mb-4 text-2xl font-bold text-slate-950">
                            About the course
                        </h2>

                        <p className="leading-7 text-slate-500">
                            This project contains information about different areas of
                            modern web development, including frontend, backend,
                            databases, API design, security, and artificial intelligence.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-blue-50 p-8">
                        <h2 className="mb-4 text-2xl font-bold text-slate-950">
                            Technologies
                        </h2>

                        <p className="leading-7 text-slate-500">
                            The application was built with Next.js, React, TypeScript,
                            Tailwind CSS, and shadcn/ui. It demonstrates routing,
                            reusable components, responsive layouts, and modern UI
                            styling.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-blue-50 p-8 md:col-span-2">
                        <h2 className="mb-4 text-2xl font-bold text-slate-950">
                            Project goal
                        </h2>

                        <p className="max-w-3xl leading-7 text-slate-500">
                            The goal of the project is to create a simple and responsive
                            interface where students can browse courses and view their
                            main information in a clean and convenient way.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}