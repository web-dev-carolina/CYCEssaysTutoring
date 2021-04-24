import React, { useState, useEffect } from "react";
import '../styles/EventsPanel.css';
import PopupBox from "../components/PopupBox";

function EventsPanel(props) {

    // to do
    // put the panel to the left
    // add dates
    // inline style color
    // styling

    const {
        events,
        viewMonth,
        viewYear,
    } = props;

    return (
        <div className="scroll">
            <p>Events In {viewMonth + " " + viewYear}</p>
            {events.map(x=> {
                if (x.start.toString().split(" ")[1] === viewMonth && x.start.toString().split(" ")[3] === viewYear) {
                    console.log(x);//
                    return (
                        <div key = {x.id}>
                            
                            <div className="card" style={{width: 18 + "em"}}>
                                <div className="card-body">
                                    <h5 className="card-title">{x.title}</h5>
                                    <p className="card-text">{x.description}</p>
                                    <div><PopupBox event={x} fromPanel={true}></PopupBox></div>
                                </div>
                            </div>
                            
                            
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default EventsPanel;