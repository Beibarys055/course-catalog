import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <Link href={`/courses/${id}`} className="block h-full">
            <Card className="h-full rounded-3xl border-0 bg-blue-50 p-2 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="px-6 pt-6">
                    <CardTitle className="text-xl font-bold leading-tight text-slate-900">
                        {title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex h-[170px] flex-col justify-between px-6 pb-6">
                    <p className="text-base leading-7 text-slate-500">
                        {description}
                    </p>

                    <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              {credits} Credits
            </span>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full text-slate-700 hover:bg-white"
                        >
                            ♥ {likes}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}