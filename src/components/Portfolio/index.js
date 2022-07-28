import React from "react";
import catmap from "../../assets/images/catmap.png";
import budgetTracker from "../../assets/images/budgetTracker.png";
import teamMember from "../../assets/images/teamMember.png";
import rpgGame from "../../assets/images/rpgGame.png";
import portfolio from "../../assets/images/portfolio.png";

function Portfolio() {

    return (
        <section id="Portfolio">
            <div>
                <img src={rpgGame} style={{ width: "25%" }} alt="Frozen Falls" />
                <br></br>
                <p>
                    A simple game to expand our group's knowledge of React, to create the app's
                    layout and functionality, and MongoDB, to create and manage individual player accounts.</p>
                <a href="https://github.com/smendoza94/rpg-game" target="_blank">Frozen Falls Githup</a>
                <br></br>
                <a href="https://frozen-falls-81566.herokuapp.com/" target="_blank">Frozen Falls deployed</a>
            </div>
            <div >
                <br></br>
                <img src={budgetTracker} style={{ width: "25%" }} alt="Budget Tracker" />
                <br></br>
                <p>
                    A budget tracking app to moniter income and expenses, created to develop SQL database 
                    skills and learn how to publish them onto a website.
                </p>

                <a href="https://github.com/TheAltoidian/budget-tracker" target="_blank">Budget Tracker Githup</a>
                <br></br>
                <a href="https://powerful-earth-63050.herokuapp.com/" target="_blank">Budget Tracker deployed</a>
            </div>
            <div>
                <br></br>

                <img src={catmap} style={{ width: "25%" }} alt="Cats to Maps" />
                <br></br>
                <p>
                    An excercise in learning how to use multiple different APIs in the same project to integrate them
                    all at once.
                </p>
                <a href="https://github.com/TheAltoidian/Cats-to-Maps" target="_blank">Cats to Maps Githup</a>
                <br></br>
                <a href="https://thealtoidian.github.io/Cats-to-Maps/" target="_blank">Cats to Maps deployed</a>
            </div>
            {/* <div className="felx-row">
                <br></br>
                <img src={teamMember} style={{ width: "25%" }} alt="Team Member Management" />
                <br></br>
                <a href="https://github.com/TheAltoidian/Team-Member-Management" target="_blank">Team Member Management Githup</a>
                <br></br>
                <a href="https://cullen-team-member-manager.herokuapp.com/" target="_blank">Team Member Management deployed</a>
            </div> */}
            <div className="felx-row">
                <br></br>
                <img src={portfolio} style={{ width: "25%" }} alt="Portfolio" />
                <br></br>
                <p>
                    Creating a portfolio to showcase my work while learning how to use React to create apps.
                </p>
                <a href="https://github.com/TheAltoidian/react-portfolio" target="_blank">Portfolio Githup</a>
                <br></br>
                <a href="https://thealtoidian.github.io/react-portfolio/" target="_blank">Portfolio deployed</a>
            </div>
        </section>
    );
}

export default Portfolio;