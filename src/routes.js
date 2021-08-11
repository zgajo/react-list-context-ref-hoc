import { lazy } from "react";
import CssStylesheet from "./pages/CssStylesheet";
import CssStylesheetProblemSolution from "./pages/CssStylesheetProblemSolution";
import InlineStyle from "./pages/InlineStyle";
import MaterialUI from "./pages/MaterialUI";
import StyledComponents from "./pages/StyledComponents";
const CssStylesheetProblem = lazy(() => "./pages/CssStylesheetProblem");

export const routes = [
  {
    path: "/",
    pathLabel: "1. Inline style show",
    RouteComponent: InlineStyle,
  },
  {
    path: "/css-style",
    pathLabel: "2. CSS Stylesheet",
    RouteComponent: CssStylesheet,
  },
  {
    path: "/css-style-problem",
    pathLabel: "3. CSS Stylesheet problem",
    RouteComponent: CssStylesheetProblem,
  },
  {
    path: "/css-style-problem-solution",
    pathLabel: "4. CSS Stylesheet problem solution",
    RouteComponent: CssStylesheetProblemSolution,
  },
  {
    path: "/style-components",
    pathLabel: "5. Styled components",
    RouteComponent: StyledComponents,
  },
  {
    path: "/material",
    pathLabel: "6. Material UI",
    RouteComponent: MaterialUI,
  },
];
