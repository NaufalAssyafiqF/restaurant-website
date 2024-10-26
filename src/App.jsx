import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TopList from "./components/TopList/TopList";
import BgImage from "./assets/2.png";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function App() {
  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
      </div>
    </div>
  );
}

export default App;
