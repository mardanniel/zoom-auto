import { redirect } from "react-router-dom";
import { Schedule } from "../data/interfaces/schedule";
import { clearSchedules, createSchedule, getSchedules } from "../services/storage";

export const createScheduleAction = async () => {
  let schedule: Schedule = {
    id: `SomeRandomID${(Math.random() * 1000).toString()}`,
    title: `SomethingTitle${Math.random() * 100}`,
    datetime: Date.now(),
    description: `SomethingDescription${Math.random() * 100}`,
    link: {
      url: `SomethingURL${Math.random() * 100}`
    }
  }

  try {
    await createSchedule(schedule)
    return redirect('/');
  }catch(error){
    console.error(error)
  }
}

export const getSchedulesLoader = async () => {
  let schedules = await getSchedules() as Schedule[];
  return schedules;
}

export const deleteSchedulesAction = async () => {
  await clearSchedules();
  return redirect("/");
}