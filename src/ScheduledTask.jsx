export default function ScheduledTask({ name, time }) {

    return (
        <>
            {
                time ? <p>Task: {name} at {time}</p>
                     : <p>Task: {name}</p>
            }
        </>
    )
}

