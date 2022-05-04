import React, { useState } from "react";
import "./App.css";
import { NewPlanList } from "./Components/NewPlanList";
import { ShowHidePlans } from "./Components/ShowHidePlans";
import { Courses } from "./Interfaces/Courses";
import { Plan } from "./Interfaces/Plan";

const saveDataKey = "MY-PAGE-DATA";
let loadedData: Plan[] = [];
// Check if the user's data already exists
const previousData = localStorage.getItem(saveDataKey);
// If the data doesn't exist, `getItem` returns null
if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

function App(): JSX.Element {
    const [plans, setPlan] = useState<Plan[]>(loadedData);
    const [course] = useState<Courses[]>([]);
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
                    <div id="textbox">
                        <p className="alignleft"></p>
                        <p className="aligncenter">
                            <div className="Welcomemiddle">
                                <h1>Welcome</h1>
                                <h1>to the</h1>
                                <h1>UD Course</h1>
                                <h1>Scheduler!</h1>
                            </div>
                        </p>
                        <p className="alignright">
                            {plans.length !== 0 && (
                                <p>
                                    View/Edit your saved Degree Plans
                                    <div>
                                        <NewPlanList
                                            plans={plans}
                                            setPlan={setPlan}
                                            saveDataKey={saveDataKey}
                                        ></NewPlanList>
                                    </div>
                                </p>
                            )}
                        </p>
                    </div>
                </header>
            </div>
            <ShowHidePlans
                realPlans={plans}
                setPlan={setPlan}
                course={course}
                saveDataKey={saveDataKey}
            ></ShowHidePlans>
        </body>
    );
}

export default App;
