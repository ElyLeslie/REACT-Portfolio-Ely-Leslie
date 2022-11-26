import React from 'react';

export default function Project({url, github, title, pic, description }) {

    return (
        <div className='projectCard d-flex m-3 gorgeousCards' style={{ width: "300px"}}>
            
            <h2 style={{display: 'contents'}}>

            <div style={{textAlign: "center", fontStyle: "italic"}}>
            {title}
            </div>
            <img src={pic} alt={description} className='m-1'/> 
                
               
            </h2>
            <p style={{fontWeight: "bolder"}}>
                {description}
                
            </p>
            <div style={{height: "-webkit-fill-available"}}>

            </div>
            <div className='d-flex' style={{alignSelf: "center"}}>
            <p className='d-flex'>
             <a className='appBtn'href={url} style={{marginRight: "15px"}}> LIVE URL</a>
                <a className='appBtn' href={github}> GitHub Repo</a>
            </p>
            </div>
           
        </div>
    )

}