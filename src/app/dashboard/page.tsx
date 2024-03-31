'use client'
import { ProjectDTO } from "@/models/project";
import { getProjects } from "@/services/project_service";
import { useEffect, useState } from "react"
import styles from './dashboard.module.scss'
import { LoadingAnimation } from "../components/LoadingAnimation";
import { ProjectListItem } from "../components/ProjectListItem";


const ProjectDashboard = () => {
  const [projects, setProjects] = useState<ProjectDTO[]>([]);

  useEffect(() => {
    async function initProjects() {
      var projects = await getProjects();
      setProjects(projects);
    }

    initProjects()
  }, [])

  const printProjects = 
    projects.map((project, index) => {
      return (
        <ProjectListItem project={project} />
      )
    })
  
  return (
    <div className={`flex_center ${styles.page_wrapper}`}>
      <div id="panel" className={`border_radius_sm ${styles.panel}`}>
        <div className={`${styles.list_wrapper}`}>
          <>{projects.length == 0 ? <LoadingAnimation /> : printProjects}</>
        </div>
      </div>

    </div>
  )
}

export default ProjectDashboard