import "./Header.scss";
import logo from '../../../assets/img/hunterLogo.png'


// interface HeaderProps{
//     currentPage: string;
//     handlePageChange: (page:string)=>void;
// }

function Header({ currentPage, handlePageChange }:any) {
  return (
    <>
      <div className="header">
        <div className="title">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="h1">Karl Finkel</h1>
        </div>
        
        <div className="nav">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
