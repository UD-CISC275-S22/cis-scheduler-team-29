import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { PlanView } from "./PlanView";

export function NewPlanList({
    plans,
    setPlan
}: {
    plans: Plan[];
    setPlan: (plans: Plan[]) => void;
}): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);
    const [planToShow, setPlanToShow] = useState<Plan>();

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = (plan: Plan) => {
        setPlanToShow(plan);
        setShowAddModal(true);
    };

    function deletePlan(id: string) {
        setPlan(plans.filter((plan: Plan): boolean => plan.id !== id));
    }

    // function rightPlan(id: string) {
    //     const rP = plans.filter((plan: Plan): boolean => plan.id === id);
    // }

    return (
        <Stack gap={3}>
            {plans.map((plan: Plan) => (
                <div key={plan.id} className="planlist">
                    <Button
                        className="btn effect01"
                        target="_blank"
                        onClick={() => handleShowAddModal(plan)}
                    >
                        <span>{plan.id}</span>
                    </Button>
                </div>
            ))}
            <PlanView
                plan={
                    planToShow !== undefined
                        ? planToShow
                        : { id: "", title: "", semesters: [] }
                }
                plans={plans}
                deletePlan={deletePlan}
                semesters={planToShow !== undefined ? planToShow.semesters : []}
                setPlan={setPlan}
                show={showAddModal}
                handleClose={handleCloseAddModal}
            ></PlanView>
        </Stack>
    );
}
