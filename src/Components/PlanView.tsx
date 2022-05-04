import React, { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
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
    setPlan,
    show,
    handleClose,
    saveDataKey
}: {
    course: Courses[];
    plan: Plan;
    plans: Plan[];
    deletePlan: (id: string) => void;
    semesters: Semester[];
    setPlan: (plans: Plan[]) => void;
    show: boolean;
    handleClose: () => void;
    saveDataKey: string;
}): JSX.Element {
    const [showPlanViewModal, setPlanViewModal] = useState(false);

    const handleClosePlanViewModal = () => setPlanViewModal(false);
    const handleShowPlanViewModal = () => setPlanViewModal(true);
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
                    <PlanViewModal
                        show={showPlanViewModal}
                        handleClose={handleClosePlanViewModal}
                        semester={plan.semesters}
                        course={course}
                    ></PlanViewModal>
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
                <Button onClick={handleShowPlanViewModal} disabled>
                    View
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
