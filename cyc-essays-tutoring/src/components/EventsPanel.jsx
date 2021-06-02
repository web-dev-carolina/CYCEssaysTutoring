import React, { useState, useEffect } from "react";
import '../styles/EventsPanel.css';
import PopupBox from "./PopupBox";

function EventsPanel(props) {

    const {
        events,
        viewMonth,
        viewYear,
    } = props;

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
        
        return week + " " + day + ", " + time[0] + ":" + time[1] + " " + time[2];

        // below is the full date
        // return week + " " + monthToNum(month) + "/" + day + "/" + year + " " + time[0] + ":" + time[1] + " " + time[2];

    }


    return (
        <div className="panel">
            <p class="h4 title">{viewMonth + " " + viewYear + " Events"}</p>
            <div className="scroll">
                
                {events.map(x=> {
                    if (x.start.toString().split(" ")[1] === viewMonth && x.start.toString().split(" ")[3] === viewYear) {
            
                        return (
                            <div key = {x.id} className={x.key}>
                                <div className="card shadow" style={{backgroundColor: "#" + x.color}}>
                                    <div className="card-body">
                                        <h5 className="card-title shadow p-1 rounded">{x.title}</h5>
                                        <p className="date">{formatDate(x.start) + " - " + formatDate(x.end)}</p>
                                        <p className="description">{x.description}</p>
                                        <button className="btn btn-outline-light register">
                                            <PopupBox event={x} fromPanel={true}></PopupBox>
                                        </button>
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