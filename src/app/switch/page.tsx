"use client";
import { useState } from "react";
import Switch from "../../components/switch";

const SwitchPage = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = (newChecked: boolean) => {
    console.log('Switch is now', newChecked ? 'ON' : 'OFF');
    setChecked(newChecked);
  };

  const beforeToggleAction = () => {
    console.log('This action runs before the switch toggles.');
    alert("This action runs before the switch toggles")
  };

  const afterToggleAction = () => {
    console.log('This action runs after the switch toggles.');
    alert("This action runs after the switch toggles")
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ margin: "2rem 0" }}>Switch Component Demo</h1>

      <div style={{ display: "flex", gap: "2rem" }}>
        <Switch
          icon={<span>{checked ? "🌙" : "☀️"}</span>}
          onToggle={handleToggle}
          beforeToggle={beforeToggleAction} // Action before toggle
          afterToggle={afterToggleAction} // Action after toggle
        />
      </div>
    </div>
  );
};

export default SwitchPage;
