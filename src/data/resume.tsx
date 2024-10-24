import { Icons } from "@/components/icons";
import { FacebookIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mark Ivanbern Loque",
  initials: "ML",
  url: "",
  location: "Bacoor Cavite",
  locationLink: "14.444716524373357, 120.94721612387869",
  description:
    "A 3rd year student that is currently studying at Cavite State University - Bacoor Campus.",
  summary: "A boy who isn't fascinated by superheroes. Instead, he's captivated by the intricate orld of the human body and the magic of computer coding.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Javascript",
    "Php",
    "Python",
    "Nextjs",
    "HTML",
    "CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/contact", icon: Icons.email, label: "Email" },
  ],
  contact: {
    email: "marklowkey00@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ivanbern01",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/itzymitzyviny",
        icon: Icons.x,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/tiktilaokkruk/",
        icon: FacebookIcon,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "Moonwalk Elementary School",
      href: "https://www.facebook.com/moonwalkelementaryschoolmain136785/",
      degree: "Grade 1 - Grade 6",
      logoUrl: "/Moonwalk.jpg",
      start: "2008",
      end: "2014",
    },
    {
      school: "City of Bacoor National High School - Green Valley",
      href: "https://www.facebook.com/DepEdTayoCBNHSSN305687",
      degree: "Grade 7 to Grade 10",
      logoUrl: "/Greenvalley.jpg",
      start: "2014",
      end: "2020",
    },
    {
      school: "University of Perpetual Help - Molino Campus",
      href: "https://www.facebook.com/perpetualmolino/",
      degree: "Grade 11 to Grade 12 (STEM)",
      logoUrl: "/Perpetual.jpg",
      start: "2020",
      end: "2022",
    },
    {
      school: "Cavite State University - Bacoor Campus",
      href: "https://cvsu.edu.ph/bacoor/",
      degree: "Bachelors of Science in Computer Science (BSCS)",
      logoUrl: "/cvsu.jpg",
      start: "2022",
      end: "Current",
    },
  ],
  projects: [
    {
      title: "CVSU Website",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "",   

      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Calculator",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
};
