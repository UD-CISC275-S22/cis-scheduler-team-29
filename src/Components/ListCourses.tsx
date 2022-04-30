import { Courses } from "../Interfaces/Courses";
import React from "react";
import { Stack } from "react-bootstrap";
import { Row, Table, Col } from "react-bootstrap";
import { EditCourseModal } from "./EditCourseModal";

export function ListCourses({
    course,
    editCourse
}: {
    course: Courses[];
    editCourse: (course: Courses, newCourse: Courses) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            <Table>
                <Row>
                    <Col>Course Code</Col>
                    <Col>Credits</Col>
                    <Col>Edit</Col>
                </Row>
                {course.map((courses: Courses) => (
                    <Row className="Row_ListCourses" key={courses.ID}>
                        <Col className="Code_Col">{courses.Code}</Col>
                        <Col className="Credit_Col">{courses.Credits}</Col>
                        <Col>
                            <EditCourseModal
                                course={courses}
                                editCourse={editCourse}
                            ></EditCourseModal>
                        </Col>
                    </Row>
                ))}
            </Table>
        </Stack>
    );
}
