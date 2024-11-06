import { ProjectsData } from "@/app/data/projectsData";
import NotFound from "@/app/not-found";

// Function that returns a unique, human-readable
// identifier from a given project title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .normalize("NFD") // Separate chars and their accent marks
    .replace(/[\u0300-\u036f]/g, "") // Remove accent marks
    .replace(/[^\w\s-]/g, "") // Remove non-alphanumeric chars except space and hyphen
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/--+/g, "-"); // Replace many dashes with one dash
};

const ProjectPage = ({ params }) => {
  // Extract slug from params
  const { slug } = params;

  // Use generated slug to find project
  const project = ProjectsData.find((p) => generateSlug(p.title) === slug);

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
