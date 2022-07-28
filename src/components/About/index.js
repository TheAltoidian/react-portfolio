import React from "react";
import cullen from "../../assets/images/cullen.png"

function About() {
    return (
        <section id="About">
            <h1 id="about">Who am I?</h1>
            <img src={cullen} style={{ width: "25%" }} alt="picture of Cullen" />
            <p>Cullen studied at University of California, Irvine, for 4 years and earned a degree in Political Science. 
                Afterwards, he earned a Certificate as a full stack web developer through UC Berkley Extension to 
                develop programming skills, and is looking for a job where to further expand what he has learned.
                In his free time, he likes to think of simple websites to create and share with friends for fun, both 
                as a joke, and to serve practical purposes.</p>
        </section>
    );
}

export default About;