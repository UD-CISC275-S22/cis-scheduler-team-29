import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Courses } from "../Interfaces/Courses";

export function CourseEditor({
    Course,
    show,
    handleClose,
    editCourse
}: {
    show: boolean;
    handleClose: () => void;
    editCourse: (course: Courses, newCourse: Courses) => void;
    Course: Courses;
}): JSX.Element {
    const [Coursecode, setCourseCode] = useState<string>(Course.Code);
    const [CourseCredit, setCourseCredit] = useState<string>(Course.Credits);
    const [CourseStatus, setCourseStatus] = useState<string>(Course.Status);
    function save() {
        editCourse(Course, {
            ID: Course.ID,
            Code: Coursecode,
            Credits: CourseCredit,
            Status: CourseStatus
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            {/* COURSE CODE */}
            <Modal.Body>
                <Form.Group controlId="formCourseCode" as={Row} spacing={2}>
                    <Form.Label data-testid="coursecodeedit" column sm={2}>
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
                {/* COURSE NAME */}
                <Form.Group controlId="formCourseCredit" as={Row}>
                    <Form.Label data-testid="coursenameedit" column sm={2}>
                        Name:
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
                    <Form.Label data-testid="coursecreditedit" column sm={2}>
                        Credit:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={CourseCredit}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCourseCredit(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* COURSE STATUS (CHANGE TO DESC LATER)*/}
                <Form.Group controlId="formCourseStatus" as={Row}>
                    <Form.Label data-testid="coursedescedit" column sm={2}>
                        Status:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={CourseStatus}
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
                <Button
                    data-testid="savechangesforeditsinglecourse"
                    variant="success"
                    className="me-4"
                    onClick={save}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
