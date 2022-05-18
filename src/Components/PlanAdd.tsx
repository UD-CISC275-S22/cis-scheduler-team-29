import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";

export function PlanAdd({
    show,
    handleClose,
    addPlan
}: {
    show: boolean;
    handleClose: () => void;
    addPlan: (newPlan: Plan) => void;
}) {
    const [id, setId] = useState<string>("");

    function saveChanges() {
        addPlan({
            id: id,
            semesters: []
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="planId" as={Row}>
                    <Form.Label column sm={3}>
                        Plan Name
                    </Form.Label>
                    <Col>
                        <Form.Control
                            data-testid="addPlanInputName"
                            value={id}
                            autoFocus
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    data-testid="savePlanButton"
                    variant="success"
                    onClick={saveChanges}
                >
                    Add Plan
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
