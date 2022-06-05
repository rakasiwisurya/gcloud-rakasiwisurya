import { Certificates, Experiences, Footer, Header, Hero } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experiences />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
