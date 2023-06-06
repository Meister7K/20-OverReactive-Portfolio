import './Footer.scss'

function Footer() {

  const links={
    github: 'https://github.com/Meister7K',
    linkedin:'https://www.linkedin.com/in/karl-finkel-188a83199/'
}
  return (
    <>
    <ul>
            <li><a href={links.github} target='_blank'>Github</a></li>
            <li><a href={links.linkedin} target='_blank'>LinkedIn</a></li>
        </ul>
    </>
  )
}

export default Footer