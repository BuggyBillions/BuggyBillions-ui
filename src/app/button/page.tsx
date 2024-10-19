"use client"
import React from 'react';
import Button from '../../components/button/Button';
import Badge from '../../components/badge';

const ButtonPage = () => {

  return (
    <div style={{ padding: '20px' }}>
      
      <h1 style={{ marginBottom: "2rem"}}>Button Component Demo</h1>
      
      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Button */}
        <Button text="A Button" type={"button"} className='myButton' />
        
        {/* Button */}
        <Button text="I'll alert you" type={"button"} className='myButton' onClick={()=>alert("I kept my word!")} />

        {/* Button with icon direction normal */}
        <Button text="Icon, text" icon={<Badge text="+99" className="myBadge" />} type="button" className="myButton" />
        
        {/* Button with icon direction reverse */}
        <Button text="Text, Icon" icon={<Badge text="+99" className="myBadge" />} type="button" className="myButton button-reverse" />

        {/* Button with badge at top-left */}
        <Button text="Add to cart" icon={<Badge text="+99" className="myBadge badge-top-left badge-circle" />} type="button" className="myButton" />
        
        {/* Button with badge at top-right */}
        <Button text="Add to cart" icon={<Badge text="+99" className="myBadge badge-top-right badge-circle" />} type="button" className="myButton" />
      </div>

    </div>
  );
};

export default ButtonPage;
