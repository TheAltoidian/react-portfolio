import React from "react";
import cullen from "../../assets/images/cullen.png"

function About() {
    return (
        <section>
            <h1 id="about">Who am I?</h1>
            <img src={cullen} style={{ width: "25%" }} alt="picture of Cullen" />
            <p>Cullen studied at University of California, Irvine, for 4 years and earned a degree in Political Science. However, he realized too late there's kind of nothing he wants to do that needs a Political Science degree. Therefore, he is going through a coding bootcamp so he can get a job in the tech field, and hopefully get a job that pays well enough to continue living in the silicon valley.
            </p>
        </section>
    );
}

export default About;