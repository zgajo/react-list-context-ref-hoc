import ContextSolution from "./pages/ContextSolution";
import PropsDrillingProblem from "./pages/PropsDrillingProblem";

export const routes = [
  {
    path: "/",
    pathLabel: "1. Props drilling problem",
    RouteComponent: PropsDrillingProblem,
  },
  {
    path: "/context-solution",
    pathLabel: "2. Context: Props drilling problem solution",
    RouteComponent: ContextSolution,
  },
];
