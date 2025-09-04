import { Book, Clock, User, ExternalLink, PlayCircle, FileText, Star } from 'lucide-react'
import React from 'react'
import Enrollment from './Enrollment'

const CourseDetails = ({ course }) => {
    return (
        <div className='mt-5 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            {/* Header Section */}
            <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                    <h2 className='text-3xl font-bold text-gray-900 dark:text-white/80 leading-tight'>{course.name}</h2>
                    {course.rating && (
                        <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full">
                            <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                            <span className="text-sm font-medium text-yellow-700">{course.rating}</span>
                        </div>
                    )}
                </div>
                
                {/* Course Meta Information */}
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Book className='h-4 w-4 text-purple-600' />
                        <span className="text-sm font-medium">{course.totalChapters} chapters</span>
                    </div>
                    
                    {course.duration && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className='h-4 w-4 text-blue-600' />
                            <span className="text-sm font-medium">{course.duration}</span>
                        </div>
                    )}
                    
                    {course.level && (
                        <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                                course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                            }`}>
                                {course.level}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Author Section */}
            {course.author && (
                <div className="mb-6 p-4  rounded-lg shadow-xl bg-slate-200 dark:bg-neutral-800 dark:text-neutral-300">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            {course.avatar ? (
                                <img src={course.avatar} alt={course.author} className="w-full h-full rounded-full object-cover" />
                            ) : (
                                <User className='h-6 w-6 text-white' />
                            )}
                        </div>
                        <div>
                            <h4 className="font-semibold">Instructor</h4>
                            <p className="text-gray-300 font-medium">{course.author}</p>
                            {course.credentials && (
                                <p className="text-sm text-gray-300">{course.credentials}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Description Section */}
            <div className="mb-6">
                <h4 className='font-semibold text-gray-900 text-neutral-400 mb-3'>Course Description</h4>
                <p className='text-gray-600 leading-relaxed'>{course.description}</p>
            </div>

            {/* Course Links Section */}
            {course.links && course.links.length > 0 && (
                <div className="mb-6">
                    <h4 className='font-semibold text-gray-900 mb-3'>Course Resources</h4>
                    <div className="grid gap-3">
                        {course.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
                            >
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200">
                                    {link.type === 'video' ? (
                                        <PlayCircle className='h-4 w-4 text-purple-600' />
                                    ) : link.type === 'document' ? (
                                        <FileText className='h-4 w-4 text-purple-600' />
                                    ) : (
                                        <ExternalLink className='h-4 w-4 text-purple-600' />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 group-hover:text-purple-700">
                                        {link.title}
                                    </p>
                                    {link.description && (
                                        <p className="text-sm text-gray-500">{link.description}</p>
                                    )}
                                </div>
                                <ExternalLink className='h-4 w-4 text-gray-400 group-hover:text-purple-600' />
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="w-full">
               <Enrollment />
            </div>
        </div>
    )
}

export default CourseDetails
