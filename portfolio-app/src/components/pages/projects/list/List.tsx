import "./List.scss";

function List(props: any) {
  return (
    <>
      {props.projectList.map((project: any) => {
        return (
          <>
            {!project.highlighted ? (
              <li className="list-item" key={project.id}>
                <img src={project.src} />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a className="deploy" href={project.deployed} target="_blank">
                  <button className="btn">Project Link</button>
                </a>
                {project.inProgress ? <span>Under Development</span> : ""}
                <a className="repo" href={project.repo} target="_blank">
                  <button className="btn">Repository</button>
                </a>
              </li>
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
}

export default List;
