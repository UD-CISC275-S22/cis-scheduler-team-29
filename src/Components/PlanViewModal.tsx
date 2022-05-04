import { Courses } from "../Interfaces/Courses";
import { Semester } from "../Interfaces/Semester";
import React from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { Row, Table, Col } from "react-bootstrap";

export function PlanViewModal({
    semester,
    course,
    show,
    handleClose
}: {
    semester: Semester[];
    course: Courses[];
    show: boolean;
    handleClose: () => void;
}): JSX.Element {
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Current Schedule</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Stack gap={3}>
                    {semester.map((semesters: Semester) => (
                        <Table key={semesters.id}>{semesters}</Table>
                    ))}
                    <Table>
                        <Row>
                            <Col>Course Code</Col>
                            <Col>Credits</Col>
                        </Row>
                        {course.map((courses: Courses) => (
                            <Row className="Row_ListCourses" key={courses.ID}>
                                <Col className="Code_Col">{courses.Code}</Col>
                                <Col className="Credit_Col">
                                    {courses.Credits}
                                </Col>
                            </Row>
                        ))}
                    </Table>
                </Stack>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
