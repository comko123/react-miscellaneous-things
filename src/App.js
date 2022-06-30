import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePages from "./HomePage";
import CookieComponentd from "./Cookie/CookieComponents";
import MovieComponents from "./movie/MovieComponents";
import WeatherComponents from "./weather/WeatherComponents";
import TimeControl from "./time/TimeControl";
export default function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={HomePages} />
      <Route path="/movie" component={MovieComponents} />
      <Route path="/weather" component={WeatherComponents} />
      <Route path="/cookie" component={CookieComponentd} />
      <Route path="/time" component={TimeControl} />
          </Switch>
          </Router>
  );
}

 
