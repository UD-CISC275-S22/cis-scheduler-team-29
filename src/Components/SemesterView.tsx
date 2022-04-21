import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Semester } from "../Interfaces/Semester";
import { AddCourse } from "./AddCourseTest";
import { Stack } from "react-bootstrap";

export function SemesterView({
    semester,
    deleteSemester
}: {
    semester: Semester;
    deleteSemester: (id: string) => void;
}): JSX.Element {
    return (
        <Stack direction="horizontal">
            <Col>
                <h3>{semester.id}</h3>
                <AddCourse></AddCourse>
                <Button
                    onClick={() => deleteSemester(semester.id)}
                    variant="danger"
                    className="me-8"
                >
                    Delete Semester
                </Button>
            </Col>
        </Stack>
    );
}
