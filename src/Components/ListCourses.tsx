import { Courses } from "../Interfaces/Courses";
import React from "react";
import { Stack } from "react-bootstrap";

export function ListCourses({ course }: { course: Courses[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {course.map((courses: Courses) => (
                <div key={courses.ID}>{courses.CourseName}</div>
            ))}
        </Stack>
    );
}
