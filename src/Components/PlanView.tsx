import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Courses } from "../Interfaces/Courses";
import { Plan } from "../Interfaces/Plan";
import { Semester } from "../Interfaces/Semester";
import { PlanViewModal } from "./PlanViewModal";
import { SemesterModal } from "./SemesterModal";

export function PlanView({
    course,
    plan,
    plans,
    deletePlan,
    semesters,
    setPlan
}: {
    course: Courses[];
    plan: Plan;
    plans: Plan[];
    deletePlan: (id: string) => void;
    semesters: Semester[];
    setPlan: (plans: Plan[]) => void;
}): JSX.Element {
    const [showPlanViewModal, setPlanViewModal] = useState(false);

    const handleClosePlanViewModal = () => setPlanViewModal(false);
    const handleShowPlanViewModal = () => setPlanViewModal(true);
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{plan.id}</h3>
                    <PlanViewModal
                        show={showPlanViewModal}
                        handleClose={handleClosePlanViewModal}
                        semester={plan.semesters}
                        course={course}
                    ></PlanViewModal>
                    <Button onClick={handleShowPlanViewModal} disabled>
                        View
                    </Button>
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
