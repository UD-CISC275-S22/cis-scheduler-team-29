import React from "react";
import { Stack } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { PlanView } from "./PlanView";

export function PlanList({
    plans,
    deletePlan,
    setPlan
}: {
    plans: Plan[];
    deletePlan: (id: string) => void;
    setPlan: (plans: Plan[]) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {plans.map((plan: Plan) => (
                <div key={plan.id} className="planlist">
                    <PlanView
                        plan={plan}
                        plans={plans}
                        deletePlan={deletePlan}
                        semesters={plan.semesters}
                        setPlan={setPlan}
                    ></PlanView>
                </div>
            ))}
        </Stack>
    );
}
