import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((res, index) => (
                <Task key={index}
                    task={res}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
