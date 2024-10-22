"use client"
import { useState } from "react";
import Switch from "../../components/switch";

const SwitchPage = () => {

    const [checked, setChecked] = useState(false)

    const handleToggle = (checked: boolean) => {
        console.log('Switch is now', checked ? 'ON' : 'OFF');
        setChecked(!checked);
    };

    return (

        <div style={{ padding: '20px' }}>
        
            <h1 style={{ margin: "2rem 0"}}>Switch Component Demo</h1>
            
            <div style={{ display: "flex", gap: "2rem" }}>
                <Switch 
                    icon={<span>
                        {!checked ? "☀️" : "🌙"}                        
                    </span>} 
                    onToggle={handleToggle} 
                />
            </div>

        </div>

    );
};

export default SwitchPage;