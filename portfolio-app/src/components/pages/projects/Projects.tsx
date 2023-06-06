import './Projects.scss'
import Lead from './lead/Lead'
import List from './list/List'
import dungeon from '../../../assets/img/DungeonGame-GIF.gif';
import rick from '../../../assets/img/Mortys Book of Schwifty Ricktails.gif'

import eldenRing from '../../../assets/img/ER quiz.png'

import firstPort from '../../../assets/img/Personal Portfolio.gif'

// class Project{
//   constructor(title, src, desc, inProgress,highlighted,deployed,repo){
//     this._id=Project.increment()
//     this.title=title
//     this.src=src
//      this.desc=desc
//     this.inProgress=inProgress
//     this.highlighted=highlighted
//     this.deployed=deployed
//     this.repo=repo
//   }
//   static increment(){
//     if(!this.onlyId) this.onlyId=1
//     else this.onlyId++
//     return this.onlyId
//   }
// }

//set useState for list const[projectList,setList]=useState([])

const projectList = [
    {
      id: 1,
      title: "Dungeon Crawler",
      src: dungeon,
      desc: `A vintage 8-bit RPG dungeon crawler where you play as 'Ruby the Rectangle' who is fighting her way through the intricate labyrinth filled with demons and dangers.`,
      inProgress: true,
      highlighted: true,
      deployed: 'https://dungeon-crawler-d.herokuapp.com/',
      repo: 'https://github.com/Meister7K/02-Project-Gamer4Lyfe'
    },
    {
      id: 2,
      title: "Ricksy Cocktail Generator",
      src: rick,
      desc: `A random cocktail generator with a Rick and Morty theme`,
      inProgress: false,
      highlighted: false,
      deployed:'https://meister7k.github.io/Rick-and-Morty-Cocktail-Generator/',
      repo: 'https://github.com/Meister7K/Rick-and-Morty-Cocktail-Generator'
    },
    {
      id: 3,
      title: "Original Portfolio",
      src: firstPort,
      desc: `My first portfolio attempt`,
      inProgress: false,
      highlighted: false,
      deployed:'https://meister7k.github.io/02-Advanced-CSS-Challenge-Professional-Portfolio/',
      repo: 'https://github.com/Meister7K/02-Advanced-CSS-Challenge-Professional-Portfolio'
    },
    {
      id: 4,
      title: "Elden Ring Quiz",
      src: eldenRing,
      desc: `A fun little timed quiz that lets you test your knowledge of the game Elden Ring.`,
      inProgress: false,
      highlighted: false,
      deployed:'https://meister7k.github.io/04-Web-APIs-Challenge-Code-Quiz/',
      repo: 'https://github.com/Meister7K/04-Web-APIs-Challenge-Code-Quiz'
    },
  ];

function Projects() {
  return (
    <>
    <h1>Projects</h1>
    <Lead projectList={projectList}/>
    <List projectList={projectList}/>
    </>
  )
}

export default Projects