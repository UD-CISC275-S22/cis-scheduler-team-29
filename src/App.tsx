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
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
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
