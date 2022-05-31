import React from "react";
import catmap from "../../assets/images/catmap.png";
import budgetTracker from "../../assets/images/budgetTracker.png";
import teamMember from "../../assets/images/teamMember.png";

function Portfolio() {

    return (
        <section id="Portfolio">
            <div>
                <img src={catmap} style={{ width: "25%" }} alt="Cats to Maps" />
                <br></br>
                <a href="https://github.com/TheAltoidian/Cats-to-Maps" target="_blank">Cats to Maps Githup</a>
                <br></br>
                <a href="https://thealtoidian.github.io/Cats-to-Maps/" target="_blank">Cats to Maps deployed</a>
            </div>
            <div >
                <img src={budgetTracker} style={{ width: "25%" }} alt="Budget Tracker" />
                <br></br>
                <a href="https://github.com/TheAltoidian/budget-tracker" target="_blank">Budget Tracker Githup</a>
                <br></br>
                <a href="https://powerful-earth-63050.herokuapp.com/" target="_blank">Budget Tracker deployed</a>
            </div>
            <div className="felx-row">
                <img src={teamMember} style={{ width: "25%" }} alt="Team Member Management" />
                <br></br>
                <a href="https://github.com/TheAltoidian/Team-Member-Management" target="_blank">Team Member Management Githup</a>
                <br></br>
                <a href="https://cullen-team-member-manager.herokuapp.com/" target="_blank">Team Member Management deployed</a>
            </div>
            {/* <div>
                <img src={catmap} style={{ width: "25%" }} alt="Cats to Maps" />
                <a href="https://github.com/TheAltoidian/Cats-to-Maps" target="_blank">Cats to Maps Githup</a>
                <a href="https://thealtoidian.github.io/Cats-to-Maps/" target="_blank">Cats to Maps deployed</a>
            </div> */}
        </section>
    );
}

export default Portfolio;