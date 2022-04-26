import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { SemesterModal } from "./SemesterModal";

export function PlanView({
    plan,
    deletePlan
}: {
    plan: Plan;
    deletePlan: (id: string) => void;
}): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{plan.id}</h3>
                    <SemesterModal></SemesterModal>
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