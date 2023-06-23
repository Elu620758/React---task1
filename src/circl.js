import React from "react";

export default function circle({color = ''})
{
    return(
        <div className="circle" style = {{background:color}}>
            my circle
        </div>
    );
}