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
    const [Coursecode, setCoursecode] = useState<string>(Course.code);
    const [Coursename, setCoursename] = useState<string>(Course.name);
    const [CourseCredit, setCoursecredit] = useState<string>(Course.credits);
    const [CourseDescr, setCoursedescr] = useState<string>(Course.descr);
    function save() {
        editCourse(Course, {
            code: Coursecode,
            credits: CourseCredit,
            descr: CourseDescr,
            name: Coursename,
            preReq: "",
            restrict: "",
            breadth: "",
            typ: ""
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
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
                            ) => setCoursecode(event.target.value)}
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
                            value={Coursename}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCoursename(event.target.value)}
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
                            ) => setCoursecredit(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* COURSE DESC */}
                <Form.Group controlId="formCourseStatus" as={Row}>
                    <Form.Label data-testid="coursedescedit" column sm={2}>
                        Descr:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={
                                CourseDescr.length == 0
                                    ? "No course description provided..."
                                    : CourseDescr
                            }
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCoursedescr(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
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
