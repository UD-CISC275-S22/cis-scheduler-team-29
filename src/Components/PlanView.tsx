import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { Semester } from "../Interfaces/Semester";
import { SemesterModal } from "./SemesterModal";

export function PlanView({
    plan,
    plans,
    deletePlan,
    semesters,
    setPlan,
    show,
    handleClose
}: {
    plan: Plan;
    plans: Plan[];
    deletePlan: (id: string) => void;
    semesters: Semester[];
    setPlan: (plans: Plan[]) => void;
    show: boolean;
    handleClose: () => void;
}): JSX.Element {
    function saveChanges() {
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} animation={true} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>{plan.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <SemesterModal
                                realSemesters={semesters}
                                plan={plan}
                                plans={plans}
                                setPlan={setPlan}
                            ></SemesterModal>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => deletePlan(plan.id)}
                    variant="danger"
                    className="me-8"
                >
                    Delete Plan
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
