import { me } from "@/app/lib/constant";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const AboutMe = () => {


    return (
        <div className="h-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12 tracking-wide">
                    About Me
                </h1>            
                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-auto">
                    <div className="md:flex h-full">
                        <div className="md:w-1/3 relative h-full">
                            <img
                                src={me.image}
                                alt={me.name}
                                className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <div className="p-8 md:w-2/3">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">{me.name}</h2>
                                <p className="text-purple-600 font-medium">{me.role}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
                                <p className="text-gray-600 leading-relaxed">{me.bio}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {me.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* LinkedIn Link */}
                            <div className="mt-6 max-w-xs">
                                <Link
                                    href={me.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all"
                                >
                                    <Linkedin />
                                    <p>Connect on LinkedIn</p>
                                </Link>
                            </div>
                            <div className="mt-6 max-w-xs">
                                <Link
                                    href={me.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-neutral-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-700 transition-all"
                                >
                                    <Github />
                                    <p>Follow on Github</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;
