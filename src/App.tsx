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
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript.
                <ul>
                    <li>Adam O</li>
                    <li>Rehan A</li>
                    <li>Dhruv P</li>
                </ul>
            </header>
            <header className="App-intro">
                <h1>Computer Science(BS) Degree Planner</h1>
                <div className="App-intro-text">
                    Welcome to the team 29 course scheduler for computer science
                    students at UD
                </div>
            </header>
            <p>
                {visible && (
                    <ShowHidePlans
                        realPlans={plans}
                        setPlan={setPlan}
                    ></ShowHidePlans>
                )}
            </p>
            <hr></hr>
            <TableView></TableView>
            <hr></hr>
            <Button onClick={flipVisibility}>Edit</Button>
        </div>
    );
}

export default App;
