// Data fetching for About Me Section
export const fetchAboutMeData = async () => {
  const baseUrl = process.env.PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data/about-me.json`);
  const data = await res.json();
  return data;
};
