import {
    Book,
    User,
    ExternalLink,

} from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CourseDetails = ({ course }) => {
    return (
        <div className="mt-5 p-2 md:p-6 rounded-xl bg-neutral-200 dark:bg-neutral-800 w-full shadow-lg hover:shadow-xl transition-shadow duration-300">

            <div className="w-full h-auto my-2">
                <Image src={course.banner.url} alt={course.courseName} width={100} height={100} className="rounded-md shadow-md w-full h-full" />
            </div>
            {/* Header Section */}
            <div className="mb-6">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white/80 leading-tight mb-2">
                        {course.courseName}
                    </h2>


                    {/* Course Meta Information */}
                    <div className="mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Book className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-medium">
                                Description
                            </span>
                        </div>
                        <p className="my-2">{course.courseDescription}</p>
                    </div>



                    {course.level && (
                        <div className="flex items-center gap-2">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${course.level === "Beginner"
                                    ? "bg-green-100 text-green-700"
                                    : course.level === "Intermediate"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {course.level}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-6 p-4  rounded-lg shadow-xl bg-slate-200 dark:bg-neutral-600 dark:text-neutral-300">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        {course.authorAvatar.url ? (
                            <img
                                src={course.authorAvatar.url}
                                alt={course.authorName}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <User className="h-6 w-6 text-white" />
                        )}
                    </div>
                    <div>
                        <h4 className="font-semibold">{course.authorName}</h4>

                    </div>
                </div>
            </div>



            {/* Course Links Section */}
            {course.link && course.link.length > 0 && (
                <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Course Resources</h4>
                    <div className="grid gap-3">
                        {course.link.map((l, index) => (
                            <Link
                                key={index}
                                href={l.resourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300
                                hover:text-black hover:bg-purple-50 transition-all duration-200 "
                            >
                                <ExternalLink className="h-4 w-4 text-purple-600" />
                                <p>{l.resourceName}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseDetails;
