import type { Metadata } from "next";
import { WorkExplorer } from "@/components/WorkExplorer";
import { Cta } from "@/components/Cta";
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
          <WorkExplorer />
        </div>
      </div>
      <Cta />
    </>
  );
}
