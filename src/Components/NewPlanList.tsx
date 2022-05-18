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
    return (
        <Stack direction="horizontal" gap={2}>
            {plans.map((plan: Plan) => (
                <div key={plan.id}>
                    <Button
                        data-testid={plan.id}
                        className="plans"
                        onClick={() => handleShowAddModal(plan)}
                    >
                        <span>{plan.id}</span>
                    </Button>
                </div>
            ))}
        </Stack>
    );
}
