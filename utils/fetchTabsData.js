// Data fetching of About Me tabs
export const fetchTabsData = async () => {
  const baseUrl = process.env.PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data/tabs.json`);
  const data = await res.json();
  return data.TabsData;
};
