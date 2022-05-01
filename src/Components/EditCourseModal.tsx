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

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function changeEditing() {}

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <Button variant="success" onClick={handleShowAddModal}>
                Edit
            </Button>
            <Button onClick={() => deleteCourse(course.Code)} variant="danger">
                X
            </Button>
            <CourseEditor
                show={showAddModal}
                handleClose={handleCloseAddModal}
                changeEditing={changeEditing}
                deleteCourse={deleteCourse}
                Course={course}
                editCourse={editCourse}
            ></CourseEditor>
        </div>
    );
}
