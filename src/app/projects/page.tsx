import { baseURL, about, person, projects } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return {
    title: projects.title,
    description: projects.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(projects.title)}`,
    path: projects.path,
  };
}

export default function ProjectsPage() {
  return (
    <div>
      <h1>{projects.title}</h1>
      <Projects />
    </div>
  );
}
