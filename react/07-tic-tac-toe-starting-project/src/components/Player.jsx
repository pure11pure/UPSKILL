import { useState } from "react";

export default function Player({ name, symbol }) {

    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setEditing] = useState(false);

    function handleEditClick() {
        // setEditing(!isEditing);
        setEditing((isEditing) => !isEditing); //มีความปลอดภัยกว่า
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}