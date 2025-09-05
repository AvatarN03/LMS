"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseList = ({ courses }) => {


    return (
        <div className="p-5">
            <div
                className="mt-5 w-full grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-3 gap-10 "
            >
                {courses.map((course) => (
                    <Link href={`/course-preview/${course.id}`} key={course.id}>
                        <div
                            key={course.id}
                            className="mb-4 p-4  border-2 rounded-lg shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg 
                                bg-neutral-300 dark:bg-neutral-800  hover:-translate-y-2 dark:text-white hover:border-purple-500"
                        >
                            <div className="w-full h-[300px] relative mb-4 shadow-md">
                                <Image
                                    src={course.banner.url}
                                    alt={course.courseName}
                                    fill
                                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="flex justify-between items-center px-2">

                                <div>

                                    <h2 className="text-xl font-bold mb-2">{course.courseName}</h2>
                                    <div className="flex gap-3 justify-start items-center my-3">
                                        <Image alt={course.authorName} src={course.authorAvatar.url} width={40} height={40} className="rounded-full border-1 border dark:border-white" />
                                        <h3 className="font-bold dark:text-slate-400 text-slate-600 text-sm">
                                            {course.authorName}
                                        </h3>
                                    </div>
                                </div>
                                <div className="bg-purple-600 p-3 rounded-md shadow-md">
                                    <button>{course.cost ? "Paid" : "Free"}</button>
                                </div>
                            </div>




                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
