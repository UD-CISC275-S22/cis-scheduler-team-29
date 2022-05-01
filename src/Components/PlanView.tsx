import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { Semester } from "../Interfaces/Semester";
import { SemesterModal } from "./SemesterModal";

export function PlanView({
    plan,
    plans,
    deletePlan,
    semesters,
    setPlan
}: {
    plan: Plan;
    plans: Plan[];
    deletePlan: (id: string) => void;
    semesters: Semester[];
    setPlan: (plans: Plan[]) => void;
}): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{plan.id}</h3>
                    <SemesterModal
                        realSemesters={semesters}
                        plan={plan}
                        plans={plans}
                        setPlan={setPlan}
                    ></SemesterModal>
                    <Button
                        onClick={() => deletePlan(plan.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Plan
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
