import { 
  createMemoryRouter 
} from "react-router-dom";
import Home, { loader as getLoader } from "./home";
import Root from "./root";

export const router = createMemoryRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: getLoader,
        element: <Home />
      }
    ]
  },
])