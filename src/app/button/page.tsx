"use client"
import React, { useState } from 'react';
import Button from '../../components/button/Button';
import Badge from '../../components/badge';
import Loader from '../../components/spinner/Spinner';
import Icon from '../../components/icon/icon';

import styles from "../../components/button/Button.module.css"

const ButtonPage = () => {

  const [loading, setLoading] = useState(false)

  const doSomeThing = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <div style={{ padding: '20px' }}>
      
      <h1 style={{ marginBottom: "2rem"}}>Button Component Demo</h1>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {/* Button */}
        <Button text="A Button" type={"button"} className='myButton' />

        {/* Round Button with Outline */}
        <Button text="A Button" type={"button"} appearance='outline' className='badge-ellipse button-outline' />
        
        {/* Round Button */}
        <Button text="A Button" type={"button"} appearance='custom' className='myButton badge-ellipse' />
        
        {/* Button with action */}
        <Button text="I'll alert you" type={"button"} className='myButton' onClick={()=>alert("I kept my word!")} />
        
        {/* Button with spinner */}
        <Button text="I'll add a loader" type={"button"} icon={<Loader size="20px" color="white" type='check' loading={loading} />} className='myButton button-reverse' onClick={() => doSomeThing()} />

        {/* Button with icon direction normal */}
        <Button text="Icon, text" icon={<Icon name="academic-cap" type="solid" className="custom" />} type="button" className="myButton" />
        
        {/* Button with icon direction reverse */}
        <Button text="Text, Icon" icon={<Badge text="+99" className="myBadge newBadge" />} type="button" className="myButton button-reverse" />

        {/* Button with badge at top-left */}
        <Button text="Add to cart" icon={<Badge text="+99" className="myBadge badge-top-left badge-circle" />} type="button" className="myButton" />
        
        {/* Button with badge at top-right */}
        <Button text="Add to cart" icon={<Badge text="+99" className="myBadge badge-top-right badge-ellipse" />} type="button" className="myButton" />
      </div>

    </div>
  );
};

export default ButtonPage;
