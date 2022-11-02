import { 
  createMemoryRouter 
} from "react-router-dom";
import CreateSchedule from "./create-schedule";
import Home from "./home";
import Root from "./root";
import { 
  createScheduleAction, 
  deleteSchedulesAction, 
  getSchedulesLoader 
} from "../controller/schedule";

export const router = createMemoryRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: getSchedulesLoader,
        element: <Home />
      },
      {
        path: 'create-schedule',
        action: createScheduleAction,
        element: <CreateSchedule />
      },
      {
        path: 'clear-schedules',
        action: deleteSchedulesAction
      }
    ]
  },
])