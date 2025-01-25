import TaskCard from "@/components/module/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  //   const filter = useAppSelector(selectFilter);
  //   console.log(filter);
  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
