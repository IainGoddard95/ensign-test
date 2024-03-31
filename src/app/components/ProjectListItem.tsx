import { stringToCurrency } from "@/helpers/formatters";
import { ProjectDTO } from "@/models/project";
import styles from '@/app/dashboard/dashboard.module.scss'

interface ProjectListItemProps {
    project: ProjectDTO;
}

export const ProjectListItem = ({project}: ProjectListItemProps) => {
    return <div key={project.id} className={`border_radius_sm ${styles.list_item}`}>
    <p className={styles.project_number}>{project.number}</p>
    <p className={styles.project_title}>{project.name}</p>
    <p className={styles.description}>{project.description}</p>
    <p className={styles.project_value}>{stringToCurrency(project.order_value)}</p>
    <p className={styles.project_status}>{project.status}</p>
  </div>
}