import './Lead.scss'

function Lead(props:any) {
  return (
    <>
       <div className='lead'>{
            props.projectList.map((project:any)=>{
              return(<>{project.highlighted ? (<div key={project.id}>
                    <img src={project.src} alt=''/>
                    <h2 className='project-title'>{project.title}</h2>
                <p className='description'>{project.desc}</p>
                {project.inProgress ?  (<span>Under Development</span>):('')}<a className='deploy' href={project.deployed} target='_blank'><button className='btn'>Project Link</button></a>
                
                <a className='repo' href={project.repo} target='_blank'>
                    <button className='btn'>Repository</button>
                </a>
                
            </div> 
            ):('')}</>)
        })
            
        }
        </div>
    </>
  )
}

export default Lead