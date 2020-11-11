import React, { Component } from 'react';

export default class Registration extends Component {
  render() {
    return (
      <div className="calendarCon">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23A79B8E&amp;ctz=America%2FNew_York&amp;src=Y3ljZXNzYXl0dXRvcmluZ0BnbWFpbC5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%23E67C73&amp;showPrint=0&amp;showCalendars=0&amp;showTitle=0" style="border:solid 1px #777"  style={{border: 2, border:"solid 1px #777"}}  width="100%" height="750" frameborder="3" scrolling="no"></iframe>      
      </div>
    );
  };
}