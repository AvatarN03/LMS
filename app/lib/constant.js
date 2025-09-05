import { Link2, ListChecks, PlayCircle} from "lucide-react";

export const features = [
  {
    title: "Video-First Learning",
    description:
      "Stream crystal-clear course demos and full lectures directly in the built-in player for a distraction-free experience.",
    icon: <PlayCircle />,        // lucide-react has PlayCircle
  },
  {
    title: "Unified Course Catalog",
    description:
      "Browse and filter a rich list of courses with quick links to details, GitHub repos, and supporting resources.",
    icon: <ListChecks />,        // or <BookOpen /> if you prefer
  },
  {
    title: "Seamless Resource Links",
    description:
      "One click takes you to the right place—GitHub code, YouTube references, or any external URL tied to the course.",
    icon: <Link2 />,             // lucide-react link icon
  },
];


export const  me = {
    name: "Prashanth Naidu",
    role: "Full Stack Developer & Tech Enthusiast",
    bio: `Prashanth Naidu is a driven and versatile developer with a strong foundation in both frontend and 
        backend technologies. Known for his problem-solving mindset, passion for innovation, and a 
        strategic approach to development, he thrives in fast-paced tech environments. Always eager to 
        learn and grow, Prashanth balances technical expertise with creativity and a collaborative attitude.`,
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "AWS & S3",
      "GitHub",
      "REST APIs",
      "Pusher.js",
      "Clerk/Auth",
    ],
    image: "/prashanth.jpg",
    linkedin: "https://www.linkedin.com/in/prashanth-naidu03/",
    github:"https://github.com/AvatarN03"
  }