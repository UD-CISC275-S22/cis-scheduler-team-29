import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { Semester } from "../Interfaces/Semester";
import { AddCourse } from "./AddCourseTest";
import { Stack } from "react-bootstrap";
import { Courses } from "../Interfaces/Courses";
import { Plan } from "../Interfaces/Plan";

export function SemesterView({
    semester,
    deleteSemester,
    courses,
    plans,
    setPlan
}: {
    semester: Semester;
    deleteSemester: (id: string) => void;
    courses: Courses[];
    setPlan: (plans: Plan[]) => void;
    plans: Plan[];
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
                    <AddCourse
                        courses={courses}
                        semester={semester}
                        plans={plans}
                        setPlan={setPlan}
                    ></AddCourse>
                )}
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
