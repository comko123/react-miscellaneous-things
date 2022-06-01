import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePages from "./HomePage";
import MovieComponents from "./movie/MovieComponents";
import WeatherComponents from "./weather/WeatherComponents";

export default function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={HomePages} />
      <Route path="/movie" component={MovieComponents} />
      <Route path="/weather"  component={WeatherComponents} />
          </Switch>
          </Router>
  );
}

 
