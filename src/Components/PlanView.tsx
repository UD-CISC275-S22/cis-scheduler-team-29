import React from "react";
import { Container, Button, Modal } from "react-bootstrap";
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
    handleClose,
    saveDataKey
}: {
    plan: Plan;
    plans: Plan[];
    deletePlan: (id: string) => void;
    semesters: Semester[];
    setPlan: (plans: Plan[]) => void;
    show: boolean;
    handleClose: () => void;
    saveDataKey: string;
}): JSX.Element {
    function saveChanges() {
        localStorage.setItem(saveDataKey, JSON.stringify(plans));
        handleClose();
    }
    return (
        <Modal
            show={show}
            centered
            onHide={handleClose}
            animation={true}
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title>{plan.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <SemesterModal
                        realSemesters={semesters}
                        plan={plan}
                        plans={plans}
                        setPlan={setPlan}
                    ></SemesterModal>
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
