import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ScheduledTask({ name, time, removeScheduledTask }) {
    const [styleTask, setStyleTask] = useState({
        transform: 'translate(-10px, 3px)',
        opacity: '0',

    });

    function formatTime(timeString) {
        const [hourString, minute] = timeString.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
    }

    function transformLabel(active) {
        setStyleTask({
            transform: active
                ? 'translate(0px, 3px)' : 'translate(-40px, 3px)',
            opacity: 1,
            transition: "opacity 2s, transform 1s"

        })
    }

    return (
        <div>
            {
                time ? <p
                    onClick={() => transformLabel(true)}>
                    Task: {name} at {formatTime(time)}
                </p>
                    : <p
                        onClick={() => transformLabel(true)}>
                        Task: {name}
                    </p>
            }

            <label style={styleTask} onClick={removeScheduledTask} ><IoClose /></label>
        </div>
    )
}

