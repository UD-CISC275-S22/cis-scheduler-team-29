import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
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
    const [visible, setVisible] = useState<boolean>(true);

    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <Stack direction="horizontal" gap={0}>
            <Col>
                <h3>{semester.id}</h3>
                {visible && (
                    <Button
                        onClick={() => deleteSemester(semester.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Semester
                    </Button>
                )}
                <Button onClick={flipVisibility}>Edit</Button>
            </Col>
        </Stack>
    );
}
