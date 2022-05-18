import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Plan } from "../Interfaces/Plan";
import { Semester } from "../Interfaces/Semester";
import { PlanViewModal } from "./PlanViewModal";
import { SemesterModal } from "./SemesterModal";

export function PlanView({
    plan,
    plans,
    deletePlan,
    semesters,
    setPlan,
    saveDataKey,
    plansToShow,
    setPlansToShow
}: {
    plan: Plan;
    plans: Plan[];
    deletePlan: (id: string) => void;
    semesters: Semester[];
    setPlan: (plans: Plan[]) => void;
    saveDataKey: string;
    plansToShow: Plan[];
    setPlansToShow: (plans: Plan[]) => void;
}): JSX.Element {
    const [showPlanViewModal, setPlanViewModal] = useState(false);

    const handleClosePlanViewModal = () => setPlanViewModal(false);
    const handleShowPlanViewModal = () => setPlanViewModal(true);
    function saveChanges() {
        localStorage.setItem(saveDataKey, JSON.stringify(plans));
        setPlan([...plans]);
    }

    let credits = 0;
    semesters.forEach(function (semester) {
        semester.course.forEach(function (course) {
            credits = credits + parseInt(course.credits);
        });
    });

    const COPYPLANS = JSON.parse(JSON.stringify(plans)) as typeof plans;
    function dontSave(plan: Plan) {
        setPlan([...COPYPLANS]);
        setPlansToShow([
            ...plansToShow.filter(
                (planX: Plan): boolean => planX.id !== plan.id
            )
        ]);
    }

    return (
        <Container fluid={"xxl"}>
            <Row>
                <Col>
                    <h3>{plan.id}</h3>
                    <SemesterModal
                        realSemesters={semesters}
                        plan={plan}
                        plans={plans}
                        setPlan={setPlan}
                        dontSave={dontSave}
                    ></SemesterModal>
                    <PlanViewModal
                        show={showPlanViewModal}
                        handleClose={handleClosePlanViewModal}
                        semesters={plan.semesters}
                    ></PlanViewModal>
                    <Button
                        data-testid="deletePlanButton"
                        onClick={() => deletePlan(plan.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Plan
                    </Button>
                    <Button
                        data-testid="viewPlanButton"
                        onClick={handleShowPlanViewModal}
                    >
                        View
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Col>
            </Row>
            {credits}
            <div className="divider">
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            </div>
        </Container>
    );
}
