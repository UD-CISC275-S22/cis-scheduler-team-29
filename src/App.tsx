import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { ShowHidePlans } from "./Components/ShowHidePlans";
import { TableView } from "./Components/TableView";
//import { Courses } from "./Interfaces/Courses";
import { Plan } from "./Interfaces/Plan";
//import { Semester } from "./Interfaces/Semester";

function App(): JSX.Element {
    const [plans, setPlan] = useState<Plan[]>([]);
    const [visible, setVisible] = useState<boolean>(true);

    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <body className="App">
            <div className="header">
                <header>
                    <div className="headertopright">
                        <p>TBD Resources</p>
                    </div>
                    <div className="headertopleft">
                        <p>University of Delaware</p>
                    </div>
                    <div className="Welcomemiddle">
                        <h1>Welcome</h1>
                        <h1>to the</h1>
                        <h1>UD Course</h1>
                        <h1>Scheduler!</h1>
                    </div>
                </header>
                {/* <header className="App-intro">
                <h1>Computer Science(BS) Degree Planner</h1>
                <div className="App-intro-text">
                    Welcome to the team 29 course scheduler for computer science
                    students at UD
                </div>
            </header> */}
            </div>
            <ShowHidePlans realPlans={plans}
                        setPlan={setPlan}></ShowHidePlans>
        </body>
    );
}

export default App;
