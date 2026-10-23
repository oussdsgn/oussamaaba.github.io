import type { Metadata } from "next";
import { WorkGallery } from "@/components/WorkGallery";
import { Cta } from "@/components/Cta";
import { Archive } from "@/components/Archive";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <div className="page-top">
        <div className="container">
          <div className="page-head">
            <h1 className="page-title page-title--caps"><span className="line"><span>Projects</span></span></h1>
            <p className="page-head__count">({String(projects.length).padStart(2, "0")})</p>
          </div>
          <WorkGallery items={projects} layout="grid" filters />
        </div>
      </div>
      <Archive />
      <Cta />
    </>
  );
}
