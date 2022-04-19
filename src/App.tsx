import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { PlanAdd } from "./Components/PlanAdd";
import { PlanList } from "./Components/PlanList";
import { Plan } from "./Interfaces/Plan";

const PLANS: Plan[] = [];

export function ShowHidePlans(): JSX.Element {
    const [plans, setPlan] = useState<Plan[]>(PLANS);
    const [showAddModal, setShowAddModal] = useState(false);

    function addPlan(newPlan: Plan) {
        if (
            !plans.some((plan) => plan.id === newPlan.id) &&
            newPlan.id !== ""
        ) {
            setPlan([...plans, newPlan]);
        }
    }

    function deletePlan(id: string) {
        setPlan(plans.filter((plan: Plan): boolean => plan.id !== id));
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <Button
                variant="success"
                className="m-4"
                onClick={handleShowAddModal}
            >
                Add New Plan
            </Button>
            <PlanAdd
                show={showAddModal}
                handleClose={handleCloseAddModal}
                addPlan={addPlan}
            ></PlanAdd>
            <PlanList plans={plans} deletePlan={deletePlan}></PlanList>
        </div>
    );
}
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
