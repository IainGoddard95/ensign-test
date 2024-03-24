const exampleProjects = [{ title: 'Mock Project 1', description: 'Mock Project 1' }, { title: 'Mock Project 2', description: 'Mock Project 2' }]
const ProjectDashboard = () => {
  return (
    exampleProjects.map((project, index) => {
      return (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      )
    })
  )
}

export default ProjectDashboard