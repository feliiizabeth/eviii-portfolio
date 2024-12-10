// Centralized data fetching of portfolio projects
export const fetchProjectsData = async () => {
  const baseUrl = process.env.PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data/projects.json`);
  const data = await res.json();
  return data.ProjectsData;
};
