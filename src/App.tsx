import { NavBar } from "./components/NavBar";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="font-nunito min-h-screen bg-[url('assets/icons/background-stars-dark.svg')]">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
