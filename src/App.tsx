import React from "react";
import "./App.css";
import { ShowHidePlans } from "./Components/ShowHidePlans";
import { TableView } from "./Components/TableView";

function App(): JSX.Element {
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
                <ShowHidePlans></ShowHidePlans>
            </p>
            <hr></hr>
            <TableView></TableView>
            <hr></hr>
        </div>
    );
}

export default App;
