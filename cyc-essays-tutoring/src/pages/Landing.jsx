import React from 'react';
import About from '../components/About';
import Intro from '../components/Intro';
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer.jsx';
import NewTestimonials from '../components/NewTestimonials'
import './Landing.css';
//import { Axios, db } from '../firebase/firebaseConfig';


const Landing = () => {
    // const sendEmail = (name, email, message) => {
    //     const formData = {
    //         name: name,
    //         email: email,
    //         message: message,
    //     }
    //     console.log(formData);
    //     if (name === "" || email === "" || message === "") {
    //         return
    //     } else {
    //     Axios.post(
    //         'https://us-central1-cycemails-23180.cloudfunctions.net/submit',
    //         formData
    //       )
    //         .then(res => {
    //           db.collection('emails').add({
    //             name: formData.name,
    //             email: formData.email,
    //             message: formData.message,
    //             time: new Date(),
    //           });
    //           alert("Your message has been sent!");
    //         })
    //         .catch(error => {
    //           console.log(error)
    //         });
    //     }
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     sendEmail(e.target.formBasicName.value,
    //            e.target.formBasicEmail.value,
    //             e.target.controlTextarea1.value);
    //     clearForm(e);
    // };

    // const clearForm = (e) => {
    //     e.target.formBasicName.value = "";
    //     e.target.formBasicEmail.value = "";
    //     e.target.controlTextarea1.value = "";
    // };

    return(
        <div id="full-div">
            <Intro id='introsection'/>
            <About id='aboutsection'/>
            <Testimonials id='testimonialssection'/>
            <NewTestimonials id="newTestimonialSection"/>
            <Contact id='contactsection' //handleSubmit={handleSubmit}
            />
            <Footer/>
        </div>
    );
}

export default Landing;