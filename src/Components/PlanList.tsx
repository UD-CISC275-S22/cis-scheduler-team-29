import React from "react";
import { Stack } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { PlanView } from "./PlanView";

export function PlanList({
    plans,
    deletePlan
}: {
    plans: Plan[];
    deletePlan: (id: string) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {plans.map((plan: Plan) => (
                <div key={plan.id} className="planlist">
                    <PlanView plan={plan} deletePlan={deletePlan}></PlanView>
                </div>
            ))}
        </Stack>
    );
}
//  <Stack gap={3}></Stack>;
