import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export function CreateCourseModal({
    show,
    handleClose,
    createCourse
}: {
    show: boolean;
    handleClose: () => void;
    createCourse: (
        code: string,
        name: string,
        descr: string,
        credits: string,
        preReq: string,
        restrict: string,
        breadth: string,
        typ: string
    ) => void;
}): JSX.Element {
    const [code, setCode] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [descr, setDescr] = useState<string>("");
    const [credits, setCredits] = useState<string>("");

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Enter Class Details</Modal.Title>
            </Modal.Header>
            <Modal.Body data-testid="viewPlanSemester">
                {/* Title */}
                <Form.Group controlId="courseCode" as={Row}>
                    <Form.Label column sm={3}>
                        Code:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={code}
                            autoFocus
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCode(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="courseName" as={Row}>
                    <Form.Label column sm={3}>
                        Name:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="courseName" as={Row}>
                    <Form.Label column sm={3}>
                        Credits:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={credits}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCredits(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="courseDescription" as={Row}>
                    <Form.Label column sm={3}>
                        Description:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={descr}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setDescr(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() =>
                        createCourse(code, name, descr, credits, "", "", "", "")
                    }
                >
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
