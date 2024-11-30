import { useState } from "react";
export default function Player({
  Initialname,
  symbol,
  isActive,
  onPlayerChangeName,
}) {
  const [username, setName] = useState(Initialname);
  const [isEditing, setIsEditing] = useState(false);

  const setEdit = function () {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onPlayerChangeName(symbol, username);
    }
  };

  function handleChange(event) {
    setName(event.target.value);
  }
  let playerName = <span className="player-name">{username}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" required value={username} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={setEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
