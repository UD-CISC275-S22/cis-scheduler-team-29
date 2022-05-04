import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Courses } from "../Interfaces/Courses";
import { Plan } from "../Interfaces/Plan";
import { PlanAdd } from "./PlanAdd";
import { PlanList } from "./PlanList";

export function ShowHidePlans({
    course,
    realPlans,
    setPlan
}: {
    course: Courses[];
    realPlans: Plan[];
    setPlan: (plans: Plan[]) => void;
}): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);

    function addPlan(newPlan: Plan) {
        if (
            !realPlans.some((plan) => plan.id === newPlan.id) &&
            newPlan.id !== ""
        ) {
            setPlan([...realPlans, newPlan]);
        }
    }

    function deletePlan(id: string) {
        setPlan(realPlans.filter((plan: Plan): boolean => plan.id !== id));
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <Button
                className="btn effect01"
                target="_blank"
                onClick={handleShowAddModal}
            >
                <span>📂New Plan</span>
            </Button>
            <PlanAdd
                show={showAddModal}
                handleClose={handleCloseAddModal}
                addPlan={addPlan}
            ></PlanAdd>
            <PlanList
                course={course}
                plans={realPlans}
                deletePlan={deletePlan}
                setPlan={setPlan}
            ></PlanList>
        </div>
    );
}
