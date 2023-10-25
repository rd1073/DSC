import Logo from "../components/navbar"; 
import Discover from "../components/discover";
import About from "../components/about";
import Domains from "../components/domains";
import Footer from "../components/footer";



function Home() {
  return (
    <div className="Home" >
      <Logo />
      <Discover />
      <About />
      <Domains />
      <Footer />
    </div>
  );
}

export default Home;
