import Logo from "../components/navbar"; 
import Discover from "../components/discover";
import About from "../components/about";
import Domains from "../components/domains";
import Footer from "../components/footer";
import Teamtext from "../components/t3";
import Right from "../components/right";
import FacultyCoordinator from "../components/faculty";
import Coreteam from "../components/coreteam";
import Members from "../components/members";



function Team() {
  return (
    <div className="Home" >
      <Logo />
      <Teamtext />
      <Right />
      <FacultyCoordinator />
      <Coreteam />
      <Members />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      
       <Footer />
       
    </div>
  );
}

export default Team;
