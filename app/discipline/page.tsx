export default function Discipline() {
    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <section className="mb-14 max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Course Information
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-slate-950">
                        Advanced Web Technologies
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-500">
                        A practical discipline focused on modern technologies used to
                        design and develop web applications.
                    </p>
                </section>

                <section className="grid gap-5 md:grid-cols-3">
                    <div className="rounded-3xl bg-blue-50 p-8">
                        <div className="mb-6 text-3xl">01</div>

                        <h2 className="mb-4 text-2xl font-bold text-slate-950">
                            Frontend Development
                        </h2>

                        <p className="leading-7 text-slate-500">
                            React, Next.js, TypeScript, Server Components and the App
                            Router for building modern user interfaces.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-blue-50 p-8">
                        <div className="mb-6 text-3xl">02</div>

                        <h2 className="mb-4 text-2xl font-bold text-slate-950">
                            Backend Development
                        </h2>

                        <p className="leading-7 text-slate-500">
                            REST APIs, backend architecture and modern web services used
                            to connect applications and manage data.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-blue-50 p-8">
                        <div className="mb-6 text-3xl">03</div>

                        <h2 className="mb-4 text-2xl font-bold text-slate-950">
                            Databases & Security
                        </h2>

                        <p className="leading-7 text-slate-500">
                            PostgreSQL, authentication, authorization and essential
                            security principles for web applications.
                        </p>
                    </div>
                </section>

                <section className="mt-5 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                        What you will explore
                    </p>

                    <h2 className="mb-4 text-3xl font-bold">
                        Modern tools and technologies
                    </h2>

                    <p className="max-w-3xl leading-7 text-slate-300">
                        The discipline combines frontend development, backend services,
                        databases, APIs, web security, and artificial intelligence
                        integration into one practical learning experience.
                    </p>
                </section>
            </div>
        </main>
    );
}