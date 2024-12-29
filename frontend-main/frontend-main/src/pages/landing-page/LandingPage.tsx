import About from "../../components/landing-page/about/About";
import Artists from "../../components/landing-page/artists/Artists";
import Footer from "../../components/landing-page/footer/Footer";
import Genres from "../../components/landing-page/generes/Genres";
import Header from "../../components/landing-page/header/Header"
import Hero from "../../components/landing-page/hero/Hero"
import PlayLists from "../../components/landing-page/playlists/PlayLists";
import Stacks from "../../components/landing-page/stacks/Stacks";
import Tracks from "../../components/landing-page/playlists_tracks/Tracks.jsx";
import "./style.scss";


function LandingPage() {
  return (
    <div className="landing__page">
      <Header />
      <Hero />
      <About />
      <Stacks />
      <Genres />
      <PlayLists />
      <Artists />
      <Footer />
      <Tracks />
    </div>
  )
}
export default LandingPage