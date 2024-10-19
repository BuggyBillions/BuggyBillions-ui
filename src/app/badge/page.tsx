"use client"
import React from "react"
import Badge from "../../components/badge/Badge"

const Badgepage = () => {

    return (

        <div style={{ padding: '20px' }}>
      
            <h1 style={{ marginBottom: "2rem"}}>Badge Library Demo</h1>

            <div style={{ display: "flex", gap: "2rem" }}>
                {/* Badge */}
                <Badge text="New" className="myBadge" />

                {/* Badge with full radius */}
                <Badge text="New" className="myBadge badge-circle" />

                {/* Badge with rounded radius */}
                <Badge text="New" className="myBadge badge-ellipse" />
            </div>
            
        </div>

    )

}

export default Badgepage;