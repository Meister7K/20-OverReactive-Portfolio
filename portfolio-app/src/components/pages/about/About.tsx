import './About.scss'
import headshot from'../../../assets/img/headshot.png'
import PDF from '../../../assets/res/resumeKF.pdf'

//TODO move bio into format instead of variable 


function About() {

  const profile = {
    name: 'Karl Finkel',
    img: headshot,
    intro: `"As a child, I loved building things with lego's. Now, thanks to the UTA Web Development Bootcamp, I have rekindled that passion of building with code."`,
    bio: `A quick snapshot of my story. I was born and raised in Minnesota. I spent most of my youth playing every sport my parent's could get me to on time, terrorizing my younger sisters, and exploring my little piece of the world. 
    I graduated from Lakeville North High School while competing in football, hockey, soccer, and track. I then continued my student athlete career at the University of Minnesota Duluth where I acquired a major in criminology and a minor in accounting. I also earned several all conference awards along with many good friends playing defensive end for the UMD Bulldogs football team. During my time in college, I also worked as a street maintenance worker, bartender, and security along with an internship with the Duluth Police Department working with their financial crimes unit. Upon graduation, I began working as a traveling CP technician for a consulting company working in the field of oil and gas. After a year and a half I became a project coordinator and started managing survey teams and small construction projects. During the 2020 Covid-19 pandemic I began my remote working career and my initial study of coding and web development. I transferred to Austin, TX in 2021 and obtained my CAPM certification in 2022. in January of 2023, my grandfather passed away and I was let go from my job. I took some time time to return to Minnesota and be with family which is when I decided it was time for a change in career field. I then began the journey of completing the University of Texas Austin Web Development Bootcamp and my goal of building to change the world. `,
};

  return (
    <>
      <div className='about'>
            <h1>About Me</h1>
            <img className='headshot' src={headshot} alt=''/>
            <p className='intro'>{profile.intro}</p>
            <br/>
            <p className='bio'>{profile.bio}</p>
        </div>
        <div className='resume'>
            <a href={PDF} download><button className='download' >Download Resume</button></a>
        </div>
        <div className='more-info'>
            <h4>Additional Links</h4>
            <ul>
                <a href='https://umdbulldogs.com/news/2017/11/27/football-bulldog-spotlight-karl-finkel.aspx' target='_blank'><li>Football</li></a>
                
            </ul>
        </div>
    </>
  )
}

export default About