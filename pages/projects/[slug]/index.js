/**
 * Project Details
 * {domain}/projects/[slug]
 * Dynamic page providing project details for a selected slug.
 */

import { Outfit } from "next/font/google";
import "@/app/globals.css";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import ProjectPage from "@/app/components/ProjectPage";
import { fetchProjectsData } from "@/utils/fetchProjectsData";

const outfit = Outfit({ subsets: ["latin"] });

function ProjectDetailsPage(props) {
  return (
    <div className={outfit.className}>
      // Main container
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />

        {/* Page content container */}
        <div className="container mt-24 mx-auto px-8 sm:px-12 py-4">
          <ProjectPage
            project={props.project}
            allProjects={props.allProjects}
          />
        </div>

        <Footer />
      </main>
    </div>
  );
}

// Required for dynamic pages using getStaticProps()
export async function getStaticPaths() {
  const projectsData = await fetchProjectsData();

  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps({ params }) {
  const projectsData = await fetchProjectsData();
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project: project,
      allProjects: projectsData,
    },
  };
}

export default ProjectDetailsPage;
