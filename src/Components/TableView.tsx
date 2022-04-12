import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";

export function TableView(): JSX.Element {
    const [semester, setSemester] = useState<string>("Fall ");
    const [counter, setCounter] = useState<number>(1);
    const [courses, setCourse] = useState<string[]>([]);
    //    const [credits, setCredits] = useState<number>(0);

    const semesterByDate: Record<string, string> = {
        "Fall ": "Winter ",
        "Winter ": "Spring ",
        "Spring ": "Summer ",
        "Summer ": "Fall "
    };

    function nextSemester(): void {
        //setSemester(semester.substring(0, semester.length - toWhiteSpace));
        const newSemester = semesterByDate[semester];
        setSemester(newSemester);
        setCounter(counter + 0.5);
    }

    function clearCourses() {
        setCourse([]);
    }

    return (
        <div>
            <Col>
                {courses.map((course: string) => (
                    <li key={course}>{course}</li>
                ))}
                <Button onClick={nextSemester}>Next Semester</Button>
                <Button onClick={clearCourses}>Clear Courses</Button>
            </Col>
            <Col>
                <strong>
                    {semester} {counter}
                </strong>
            </Col>
        </div>
    );
}
