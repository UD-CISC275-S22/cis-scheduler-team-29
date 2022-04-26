import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Courses } from "../Interfaces/Courses";

export function CourseEditor({
    changeEditing,
    Course,
    editCourse,
    show,
    handleClose
}: {
    changeEditing: () => void;
    show: boolean;
    handleClose: () => void;
    Course: Courses;
    editCourse: (id: string, newCourse: Courses[]) => void;
    deleteCourse: (id: string) => void;
}): JSX.Element {
    const [Coursecode, setCourseCode] = useState<string>(Course.Code);
    const [CourseCredit, setCourseCredit] = useState<string>(Course.Credits);
    const [CourseStatus, setCourseStatus] = useState<string>(Course.Status);
    function save() {
        editCourse(Course.ID, {
            ...Course,
            Code: Coursecode,
            Credit: CourseCredit || "0",
            Status: CourseStatus
        });
        changeEditing();
    }
    function cancel() {
        changeEditing();
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            {/_ COURSE CODE _/}
            <Modal.Body>
                <Form.Group controlId="formCourseCode" as={Row}>
                    <Form.Label column sm={2}>
                        Code:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={Coursecode}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCourseCode(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="formCourseCredit" as={Row}>
                    <Form.Label column sm={2}>
                        Code:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={CourseCredit}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCourseCode(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/_ COURSE CREDIT _/}
                <Form.Group controlId="formCourseCredit" as={Row}>
                    <Form.Label column sm={2}>
                        Credit:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={Coursecode}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCourseCredit(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/_ COURSE STATUS (CHANGE TO DESC LATER)_/}
                <Form.Group controlId="formCourseStatus" as={Row}>
                    <Form.Label column sm={2}>
                        Status:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={Coursecode}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCourseStatus(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" className="me-4" onClick={save}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
