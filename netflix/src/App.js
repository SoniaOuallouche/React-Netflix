import "./App.css";
import Section from "./Components/section";
import movies from "./assets/movies.json";
import Logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="App">
      <img className="Logo" src={Logo} />
      {movies.map((item, index) => {
        return (
          <Section key={index} category={item.category} images={item.images} />
        );
      })}
    </div>
  );
};

export default App;
