import { Courses } from "../Interfaces/Courses";
import React from "react";
import { Stack } from "react-bootstrap";
import { Row, Table, Col } from "react-bootstrap";
import { EditCourseModal } from "./EditCourseModal";
// import { CourseEditor } from "./EditCourse";

export function ListCourses({ course }: { course: Courses[] }): JSX.Element {
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
                            <EditCourseModal course={courses}></EditCourseModal>
                        </Col>
                    </Row>
                ))}
            </Table>
        </Stack>
    );
}
