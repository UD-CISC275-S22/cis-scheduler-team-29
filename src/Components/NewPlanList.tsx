import React from "react";
import { Button, Stack } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";

export function NewPlanList({
    plans,
    handleShowAddModal
}: {
    plans: Plan[];
    handleShowAddModal: (plan: Plan) => void;
}): JSX.Element {
    // function rightPlan(id: string) {
    //     const rP = plans.filter((plan: Plan): boolean => plan.id === id);
    // }

    return (
        <Stack gap={2} className="planlist">
            {plans.map((plan: Plan) => (
                <div key={plan.id}>
                    <Button
                        data-testid={plan.id}
                        className="btn effect02"
                        target="_blank"
                        onClick={() => handleShowAddModal(plan)}
                    >
                        <span>{plan.id}</span>
                    </Button>
                </div>
            ))}
        </Stack>
    );
}
