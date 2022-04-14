import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { PlanAdd } from "./PlanAdd";
import { PlanList } from "./PlanList";

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
