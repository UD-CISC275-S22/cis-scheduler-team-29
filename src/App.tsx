import React, { useState } from "react";
import "./App.css";
import { NewPlanList } from "./Components/NewPlanList";
import { PlanView } from "./Components/PlanView";
import { ShowHidePlans } from "./Components/ShowHidePlans";
import { Plan } from "./Interfaces/Plan";
import UDLOGO from "../src/UDPrimaryLogo2945.png";
import defaultplan from "./Data/default.json";

const saveDataKey = "MY-PAGE-DATA";
let loadedData: Plan[] = [];
// Check if the user's data already exists
const previousData = localStorage.getItem(saveDataKey);
// If the data doesn't exist, `getItem` returns null
if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

function App(): JSX.Element {
    const [plans, setPlan] = useState<Plan[]>(
        loadedData.length === 0 ? [...defaultplan] : loadedData
    );
    const [plansToShow, setPlansToShow] = useState<Plan[]>([]);

    const handleShowAddModal = (plan: Plan) => {
        if (plansToShow.includes(plan)) {
            setPlansToShow([
                ...plansToShow.filter(
                    (planX: Plan): boolean => planX.id !== plan.id
                )
            ]);
        } else {
            setPlansToShow([...plansToShow, plan]);
        }
    };

    function deletePlan(id: string) {
        setPlan(plans.filter((plan: Plan): boolean => plan.id !== id));
        localStorage.setItem(
            saveDataKey,
            JSON.stringify(
                plans.filter((plan: Plan): boolean => plan.id !== id)
            )
        );
        setPlansToShow(
            plansToShow.filter((plan: Plan): boolean => plan.id !== id)
        );
    }
    return (
        <div className="App">
            <div className="header">
                <header>
                    <div id="staticbar">
                        <div className="alignplanviewleft">
                            {plans.length === 0 && (
                                <div>
                                    No plans saved, please press new plan to
                                    begin
                                </div>
                            )}
                            <NewPlanList
                                plans={plans}
                                handleShowAddModal={handleShowAddModal}
                            ></NewPlanList>
                        </div>
                        <div className="alignnewplanright-group" role="group">
                            <ShowHidePlans
                                realPlans={plans}
                                setPlan={setPlan}
                                saveDataKey={saveDataKey}
                            ></ShowHidePlans>
                        </div>
                    </div>
                    <div id="main">
                        <div className="mainalignleft">
                            <img src={UDLOGO}></img>
                        </div>
                        <div className="mainaligncenter">
                            <h1>
                                Department of Computer Science Course Scheduler
                            </h1>
                            <div className="div2">
                                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                            </div>
                            <span>
                                Welcome to the student made course scheduler!
                                This application is ment for any UD students to
                                be able to create a course plan of their
                                choosing. To begin using, please select and name
                                a NEW PLAN (located top right). After, select
                                any # of semesters. You will see that there is a
                                search feature located in each semester to
                                quickly browser and select any available course
                                offered at the University of Delaware. If a
                                course is out of date or you would like to edit
                                a course, you can find the edit button in each
                                row of a given course. After you are done making
                                a plan you can simply save changes and it will
                                save to your local computer. If you wish to see
                                more resources about the University of Delaware,
                                please refer to the bottom of the page.
                            </span>
                        </div>
                    </div>
                </header>
            </div>
            <div>
                {plansToShow.map((plan: Plan) => (
                    <div key={plan.id} className="planShow">
                        <PlanView
                            plan={plan}
                            plans={plans}
                            deletePlan={deletePlan}
                            semesters={plan.semesters}
                            setPlan={setPlan}
                            saveDataKey={saveDataKey}
                            plansToShow={plansToShow}
                            setPlansToShow={setPlansToShow}
                        ></PlanView>
                    </div>
                ))}
            </div>
            <div className="ResourceSection">
                <h1>COMING SOON! RESOURCE SECTION</h1>
            </div>
        </div>
    );
}

export default App;
