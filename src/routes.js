import ArrayInJsx from "./pages/ArrayInJsx";
import ArrayMapInJsx from "./pages/ArrayMapInJsx";
import ArrayMapWithComponentInJsx from "./pages/ArrayMapWithComponent";
import ArrayMapWithComponentInKeyJsx from "./pages/ArrayMapWithComponentKey";
import KeyIndexDuplicate from "./pages/KeyIndexDuplicate";
import KeyIndexProblem from "./pages/KeyIndexProblem";
import KeyIndexTree from "./pages/KeyIndexTree";

export const routes = [
  {
    path: "/array-in-jsx",
    pathLabel: "1. Array in JSX",
    RouteComponent: ArrayInJsx,
  },
  {
    path: "/array-map-in-jsx",
    pathLabel: "2. Array .map li in JSX",
    RouteComponent: ArrayMapInJsx,
  },
  {
    path: "/array-map-component-in-jsx",
    pathLabel: "3. Array .map component in JSX",
    RouteComponent: ArrayMapWithComponentInJsx,
  },
  {
    path: "/array-map-component-key-in-jsx",
    pathLabel: "4. Array .map component key in JSX",
    RouteComponent: ArrayMapWithComponentInKeyJsx,
  },
  {
    path: "/key-duplicate-problem",
    pathLabel: "5. Duplicate key problem",
    RouteComponent: KeyIndexDuplicate,
  },
  {
    path: "/key-index-problem",
    pathLabel: "6. Key index problem",
    RouteComponent: KeyIndexProblem,
  },
  {
    path: "/key-index-tree",
    pathLabel: "7. Key index tree",
    RouteComponent: KeyIndexTree,
  },
];
