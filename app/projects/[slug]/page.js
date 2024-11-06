import { ProjectsData } from "@/app/data/projectsData";
import NotFound from "@/app/not-found";

const ProjectPage = ({ params }) => {
  // Extract slug from params
  const { slug } = params;

  // Use predefined slug to find project
  const project = ProjectsData.find((p) => p.slug === slug);

  // Return NotFound component if project is not found
  if (!project) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
};

export default ProjectPage;
