import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Courses } from "../Interfaces/Courses";
import { CourseEditor } from "./EditCourse";

export function EditCourseModal({
    course,
    editCourse,
    deleteCourse
}: {
    course: Courses;
    editCourse: (course: Courses, newCourse: Courses) => void;
    deleteCourse: (name: string) => void;
}): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <Button
                data-testid="editbuttonforsinglecourse"
                variant="success"
                onClick={handleShowAddModal}
            >
                Edit
            </Button>
            <Button
                data-testid="deletebuttonforsinglecourse"
                onClick={() => deleteCourse(course.Code)}
                variant="danger"
            >
                X
            </Button>
            <CourseEditor
                show={showAddModal}
                handleClose={handleCloseAddModal}
                Course={course}
                editCourse={editCourse}
            ></CourseEditor>
        </div>
    );
}
