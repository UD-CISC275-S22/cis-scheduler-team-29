import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { Semester } from "../Interfaces/Semester";
import { SemesterAdd } from "./SemesterAdd";
import { SemesterList } from "./SemesterList";

export function SemesterModal({
    plan,
    plans,
    realSemesters,
    setPlan,
    dontSave
}: {
    plan: Plan;
    plans: Plan[];
    realSemesters: Semester[];
    setPlan: (plans: Plan[]) => void;
    dontSave: (plan: Plan) => void;
}): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);

    function addSemester(newSemester: Semester) {
        if (
            !realSemesters.some((semester) => semester.id === newSemester.id) &&
            newSemester.id !== ""
        ) {
            plan.semesters = [...plan.semesters, newSemester];
            setPlan([...plans]);
        }
    }
    function deleteSemester(id: string) {
        plan.semesters = realSemesters.filter(
            (semester: Semester): boolean => semester.id !== id
        );
        setPlan([...plans]);
    }

    function deleteAllSemesters() {
        plan.semesters = [];
        setPlan([...plans]);
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <>
            <h4>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                    data-testid="addsemesterbutton"
                >
                    Add New Semester
                </Button>
                <Button
                    variant="danger"
                    className="m-4"
                    onClick={deleteAllSemesters}
                    data-testid="deleteAllSemestersButton"
                >
                    Delete All Semesters
                </Button>
                <Button variant="secondary" onClick={() => dontSave(plan)}>
                    Close
                </Button>
            </h4>
            <div>
                <SemesterAdd
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addSemester={addSemester}
                ></SemesterAdd>
                <SemesterList
                    semesters={realSemesters}
                    deleteSemester={deleteSemester}
                    setPlan={setPlan}
                    plan={plan}
                    plans={plans}
                ></SemesterList>
            </div>
        </>
    );
}
