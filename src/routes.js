import { BasicRef } from "./pages/BasicRef";
import FunctionRef from "./pages/FunctionRef";
import { RefChangeColor } from "./pages/RefChangeColor";
import RefDifferencesClass from "./pages/RefDifferencesClass";
import RefDifferencesDOM from "./pages/RefDifferencesDOM";
import RefForwardRefs from "./pages/RefForwardRefs";
import RefsFunctionComponents from "./pages/RefsFunctionComponents";

export const routes = [
  {
    path: "/",
    pathLabel: "1. Basic Ref example",
    RouteComponent: BasicRef,
  },
  {
    path: "/change-color",
    pathLabel: "2. Change color using ref ",
    RouteComponent: RefChangeColor,
  },
  {
    path: "/ref-diff",
    pathLabel: "3. Difference Adding a Ref to a DOM Element ",
    RouteComponent: RefDifferencesDOM,
  },
  {
    path: "/ref-diff-class",
    pathLabel: "4. Difference Adding a Ref to a Class component",
    RouteComponent: RefDifferencesClass,
  },
  {
    path: "/ref-functional-component",
    pathLabel: "5. Setting ref attribute to functional component",
    RouteComponent: RefsFunctionComponents,
  },
  {
    path: "/ref-forward",
    pathLabel:
      "6. Setting ref attribute to functional component using forwardRef",
    RouteComponent: RefForwardRefs,
  },
  {
    path: "/ref-in-function",
    pathLabel: "7. Using ref in function",
    RouteComponent: FunctionRef,
  },
];
