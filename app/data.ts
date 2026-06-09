import jobify01 from '@/public/jobify01.png'
import jobify02 from '@/public/jobify02.png'
import madar01 from '@/public/madar01.png'
import madar02 from '@/public/madar02.png'
import comfyStore01 from '@/public/comfyStore01.png'
import comfyStore02 from '@/public/comfyStore02.png'
export const projects = [
  {
    id: 1,
    title: "Jobify",
    description:
      "A full-stack web application for managing and tracking job applications. Allows users to add, edit, and delete jobs with search and filter functionality by status.",
    image:[jobify01, jobify02],
    liveUrl: "https://jobify-three-ochre.vercel.app",
    githubUrl: "https://github.com/Abdelrhmanx3/jobify",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Clerk"],
  },
  {
    id: 2,
    title: "Madar",
    description:
      "A full-stack e-commerce website built with React and Supabase, featuring real-time data management with a professional and fully responsive user interface.",
    image:  [madar01, madar02],
    liveUrl: "https://madar-rouge.vercel.app",
    githubUrl: "https://github.com/Abdelrhmanx3/madar",
    tags: ["React", "JavaScript", "Tailwind CSS", "Supabase"],
  },
  {
    id: 3,
    title: "Comfy Store",
    description:
      "A professional e-commerce store built with React and Tailwind CSS, featuring global state management using Context API. Users can browse products and manage their cart seamlessly.",
    image: [comfyStore01, comfyStore02],
    liveUrl: "https://mycomfystores.netlify.app",
    githubUrl: "https://github.com/Abdelrhmanx3/comfy-store",
    tags: ["React", "JavaScript", "Tailwind CSS", "Context API"],
  },
]