import ScheduledTask from "./ScheduledTask"

export default function ScheduledTasks({ tasks }) {
    tasks.sort((a, b) => {
        let [h1, m1] = a.time.split(":").map(Number);
        let [h2, m2] = b.time.split(":").map(Number);
        return h1 * 60 + m1 - (h2 * 60 + m2);
    });

    return (
        <>
            {tasks.length > 0 && <h1>Scheduled Tasks</h1>} {/*inline conditions*/}

            {(tasks === undefined) ? "" :
                tasks.map((task, index) => (
                    <ScheduledTask key={index} name={task.name} time={task.time} />
                ))
            }
        </>
    )
}