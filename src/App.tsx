import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { PlanAdd } from "./Components/PlanAdd";
import { PlanList } from "./Components/PlanList";
import { Plan } from "./Interfaces/Plan";
import { ControllableStates } from "./Components/AddCourseTest";

const PLANS: Plan[] = [];

export function ShowHidePlans(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    const [plans, setPlan] = useState<Plan[]>(PLANS);
    const [showAddModal, setShowAddModal] = useState(false);

    function addPlan(newPlan: Plan) {
        setPlan([...plans, newPlan]);
    }

    function deletePlan(id: string) {
        setPlan(plans.filter((plan: Plan): boolean => plan.id !== id));
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            {visible && (
                <div>
                    <ControllableStates></ControllableStates>
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
            )}
            <Button onClick={() => setVisible(!visible)}>
                Show/Hide Degree Plans
            </Button>
        </div>
    );
}

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Welcome to UD CISC Scheduler</header>
            <ShowHidePlans></ShowHidePlans>
            <p></p>
        </div>
    );
}

export default App;
