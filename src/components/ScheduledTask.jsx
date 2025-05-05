import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ScheduledTask({ name, time, removeScheduledTask }) {
    const [styleTask, setStyleTask] = useState({
        transform: 'translate(-10px, 3px)',
        opacity: '0',
        display: "none"
    });

    const [toggleSchedule, setToggleSchedule] = useState(true)

    function formatTime(timeString) {
        const [hourString, minute] = timeString.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
    }

    function transformLabel() {
        setToggleSchedule(prev => !prev)

        setStyleTask({
            transform: toggleSchedule
                ? 'translate(0px, 3px)' : 'translate(-40px, 3px)',
            opacity: 1,
            transition: "opacity 2s, transform 1s"

        })
    }

    return (
        <div className="scheduled-task">
            {
                time ? <p
                    onClick={() => transformLabel()}>
                    Task: {name} at {formatTime(time)}
                </p>
                    : <p
                        onClick={() => transformLabel()}>
                        Task: {name}
                    </p>
            }

            <label style={styleTask} onClick={removeScheduledTask} ><IoClose /></label>
        </div>
    )
}

