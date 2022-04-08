import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export function tableView(): JSX.Element {
    const [semester, setSemester] = useState<string>("Fall 1");
    const [courses, setCourse] = useState<string[]>([]);
    const [credits, setCredits] = useState<number>(0);

    function clearCourses() {
        setCourse([]);
    }

    return (
        <div>
            <Col>
                <strong>{semester}</strong>
                {courses.map((course: string) => (
                    <li key={course}>{course}</li>
                ))}
                <Button onClick={clearCourses}>Clear Courses</Button>
            </Col>
        </div>
    );
}
