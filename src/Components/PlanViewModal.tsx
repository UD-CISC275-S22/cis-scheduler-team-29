import { Courses } from "../Interfaces/Courses";
import { Semester } from "../Interfaces/Semester";
import React from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export function PlanViewModal({
    semesters,
    show,
    handleClose
}: {
    semesters: Semester[];
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
                    {semesters.map((semester: Semester) => (
                        <div key={semester.id}>
                            <span
                                style={{ fontWeight: "bold" }}
                            >{`${semester.season} ${semester.year}`}</span>
                            <Row>
                                <Col>Course Code</Col>
                                <Col>Credits</Col>
                            </Row>
                            {semester.course.map((courses: Courses) => (
                                <Row
                                    className="Row_ListCourses"
                                    key={courses.ID}
                                >
                                    <Col className="Code_Col">
                                        {courses.Code}
                                    </Col>
                                    <Col className="Credit_Col">
                                        {courses.Credits}
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    ))}
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
