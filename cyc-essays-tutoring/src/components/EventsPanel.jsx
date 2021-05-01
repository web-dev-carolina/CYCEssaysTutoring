import React, { useState, useEffect } from "react";
import '../styles/EventsPanel.css';
import PopupBox from "./PopupBox";

function EventsPanel(props) {

    // to do
    // put the panel to the left
    
    // styling

    // add a event to see if am or pm works

    // This is inline styling for card
    // style={{width: 18 + "em"}}

    const {
        events,
        viewMonth,
        viewYear,
    } = props;

    // useEffect(() => {
    //     console.log(events);
    // }, []);

    const monthToNum = (month) => {
        if (month === "Jan") {
            return "1";
        } else if (month === "Feb") {
            return "2";
        } else if (month === "Mar") {
            return "3";
        } else if (month === "Apr") {
            return "4";
        } else if (month === "May") {
            return "5";
        } else if (month === "Jun") {
            return "6";
        } else if (month === "Jul") {
            return "7";
        } else if (month === "Aug") {
            return "8";
        } else if (month === "Sep") {
            return "9";
        } else if (month === "Oct") {
            return "10";
        } else if (month === "Nov") {
            return "11";
        } else if (month === "Dec") {
            return "12";
        }
    }

    const formatDate = (date) => {
        let week = date.toString().split(" ")[0];
        let month = date.toString().split(" ")[1];
        let day = date.toString().split(" ")[2];
        let year = date.toString().split(" ")[3];
        let time = date.toString().split(" ")[4].split(":");

        // Determine if time is either AM or PM
        if (parseInt(time[0]) > 12) {
            time[0] = parseInt(time[0]) - 12;
            time[2] = "PM";
        } else {
            time[2] = "AM";
        }
        
        return week + " " + monthToNum(month) + "/" + day + "/" + year + " " + time[0] + ":" + time[1] + " " + time[2];
    }

    return (
        <div>
            <p>{viewMonth + " " + viewYear + " Events"}</p>
            <div className="scroll">
                
                {events.map(x=> {
                    if (x.start.toString().split(" ")[1] === viewMonth && x.start.toString().split(" ")[3] === viewYear) {
            
                        return (
                            <div key = {x.id}>
                                
                                <div className="card" style={{backgroundColor: "#" + x.color}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{x.title}</h5>
                                        <p>{formatDate(x.start) + " - " + formatDate(x.end)}</p>
                                        <p className="card-text">{x.description}</p>
                                        <div><PopupBox event={x} fromPanel={true}></PopupBox></div>
                                    </div>
                                </div>
                                
                            </div>
                        );

                    }
                })}
            </div>
        </div>
    );
}

export default EventsPanel;