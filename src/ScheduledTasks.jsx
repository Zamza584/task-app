import ScheduledTask from "./ScheduledTask"

export default function ScheduledTasks({ tasks, setTasks }) {
    tasks.sort((a, b) => {
        if (a.time === "" && b.time === "") return 0; // return normally 
        if (a.time === "") return -1; // a before b 
        if (b.time === "") return 1; //b before a 

        let [h1, m1] = a.time.split(":").map(Number);
        let [h2, m2] = b.time.split(":").map(Number);
        return h1 * 60 + m1 - (h2 * 60 + m2);
    });

    function removeScheduledTask(indexToRemove) {
        const newTasks = tasks.filter((_, index) => index !== indexToRemove)
        setTasks(newTasks)
    }

    return (
        <>
            {tasks.length > 0 && <h1>Scheduled Tasks</h1>} {/*inline conditions*/}

            {(tasks === undefined) ? "" :
                tasks.map((task, index) => (
                    <ScheduledTask
                        key={index}
                        name={task.name}
                        time={task.time}
                        removeScheduledTask={() => removeScheduledTask(index)}
                    />
                ))
            }

        </>
    )
}