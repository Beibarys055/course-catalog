import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
    title: "Course Catalog",
    description: "Advanced Web Technologies Course Catalog",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-slate-900"
                >
                    Course Catalog
                </Link>

                <nav className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                        Home
                    </Link>

                    <Link
                        href="/courses"
                        className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                        Courses
                    </Link>

                    <Link
                        href="/discipline"
                        className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                        Discipline
                    </Link>

                    <Link
                        href="/about"
                        className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>

        {children}
        </body>
        </html>
    );
}