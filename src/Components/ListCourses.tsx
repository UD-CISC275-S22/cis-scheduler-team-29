import { Courses } from "../Interfaces/Courses";
import React from "react";
import { Stack } from "react-bootstrap";
import { Row, Table, Col } from "react-bootstrap";
// import { CourseEditor } from "./EditCourse";

export function ListCourses({ course }: { course: Courses[] }): JSX.Element {
    return (
        <Stack gap={3}>
            <Table>
                <Row>
                    <Col>Course Code</Col>
                    <Col>Credits</Col>
                </Row>
                {course.map((courses: Courses) => (
                    <Row className="Row_ListCourses" key={courses.ID}>
                        <Col className="Code_Col">{courses.Code}</Col>
                        <Col className="Credit_Col">{courses.Credits}</Col>
                    </Row>
                ))}
            </Table>
        </Stack>
    );
}
