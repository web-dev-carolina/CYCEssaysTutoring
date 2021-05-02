import React, {  useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { fireDb } from '../firebase/firebaseConfig';
import PopupBox from "../components/PopupBox";
import EventsPanel from "../components/EventsPanel";
import '../styles/Registration.css';

const localizer = momentLocalizer(moment);

export default function Registration() {
  const now = new Date();
  const unorgEvents = [];
  const [events, setEvents] = useState([]);
  const [popup, setPopup] = useState(false);
  let id = 0;

  // These states below contains the month and year that the user is viewing on the calendar
  const [viewMonth, setViewMonth] = useState(now.toString().split(" ")[1]);
  const [viewYear, setViewYear] = useState(now.toString().split(" ")[3]);

  useEffect(() => {
    let eventsByMonths = [];
    fireDb
    .ref("/events")
    .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          eventsByMonths.push(snap.val());
        });
        eventsByMonths.forEach((oneMonth) => {
          let monthEventKeys = Object.keys(oneMonth);
          monthEventKeys.forEach((eventKey) => {
            let oneE = oneMonth[eventKey];
            unorgEvents.push(
                {
                  id: id,
                  title: oneE.name,
                  start: new Date(oneE.startYear, oneE.startMonth, oneE.startDay, 
                                  oneE.startHour, oneE.startMin),
                  end: new Date(oneE.endYear, oneE.endMonth, oneE.endDay, 
                                oneE.endHour, oneE.endMin),
                  color: oneE.color,
                  description: oneE.desc,
                  vac: oneE.vac
                }
            );
            id++;
          });
        });
        setEvents(unorgEvents);
    });
  }, []);

  //Popup to send email to register
  let registerHandler = () => {
    setPopup(!popup);
  }

  function Event({ event }) {
    //Style of popover info
    let starting = event.start.toString().split(" ");
    let startingTime = starting[4].split(":");
    let startDon = " AM";
    if(parseInt(startingTime[0]) > 12) {
      startingTime[0] = parseInt(startingTime[0]) - 12;
      startDon = " PM";
    }
  
    let ending = event.end.toString().split(" ");
    let endingTime = ending[4].split(":");
    let endDon = " AM";
    if(parseInt(endingTime[0]) > 12) {
      endingTime[0] = parseInt(endingTime[0]) - 12;
      endDon = " PM";
    }
  
    return (
      <div>
        <PopupBox event={event}></PopupBox>
      </div>
    );
  }

  function eventStyleGetter(event, start, end, isSelected) {
    let backgroundColor = '#' + event.color;
    let style = {
        backgroundColor: backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block',
        fontFamily: 'Ibarra Real Nova, serif',
    };
    return {
        style: style
    };
  }

    return (
        <div className="horzDisplay">

            <EventsPanel events = {events} viewMonth = {viewMonth} viewYear = {viewYear} />

            <div className="calendar">
                <Calendar
                    events = {events}
                    startAccessor = "start"
                    endAccessor = "end"
                    defaultDate = {moment().toDate()}
                    onNavigate = {date => {  
                        setViewMonth(date.toString().split(" ")[1]);
                        setViewYear(date.toString().split(" ")[3]);
                    }}
                    localizer = {localizer}
                    components = {{
                        event: Event
                    }}
                    eventPropGetter = {(eventStyleGetter)}
                    style = {{ fontFamily: 'Ibarra Real Nova, serif', zIndex: -1 }}
                />
            </div>
     
        </div>
    );

}
