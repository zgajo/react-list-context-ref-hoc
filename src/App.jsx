import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {routes.map((el, index) => {
              return (
                <li key={index}>
                  <Link to={el.path}>{el.pathLabel}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {routes.map((el, index) => {
            return (
              <Route
                exact
                key={index}
                path={el.path}
                component={(props) => (
                  <>
                    <h1>{el.pathLabel}</h1>
                    <hr></hr>
                    <el.RouteComponent {...props} />
                  </>
                )}
              />
            );
          })}
          <Redirect to={routes[0].path} />
        </Switch>
      </div>
    </Router>
  );
}
