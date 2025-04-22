import { act, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ScheduledTask({ name, time }) {
    const [styleTask, setStyleTask] = useState({
        transform: 'translate(-40px, 3px)'
    });

    function transformLabel(active) {

        setStyleTask({
            transform: active
                ? 'translate(0px, 3px)' : 'translate(-40px, 3px)'
        })
    }

    return (
        <div>
            {
                time ? <p
                    onClick={() => transformLabel(true)}
                >Task: {name} at {time}</p>
                    : <p
                        onClick={() => transformLabel(true)}
                    >Task: {name}</p>
            }

            <label style={styleTask}><IoClose /></label>
        </div>
    )
}

