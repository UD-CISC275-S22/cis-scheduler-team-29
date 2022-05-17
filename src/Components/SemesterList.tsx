import Grid from "@mui/material/Grid";
import React from "react";
import { Plan } from "../Interfaces/Plan";
import { Semester } from "../Interfaces/Semester";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    deleteSemester,
    setPlan,
    plan,
    plans
}: {
    semesters: Semester[];
    deleteSemester: (id: string) => void;
    setPlan: (plans: Plan[]) => void;
    plan: Plan;
    plans: Plan[];
}): JSX.Element {
    function sortBySeason(semester: Semester[]) {
        const seasonName: string[] = ["Summer", "Fall", "Winter", "Spring"];
        semester.sort(function (a, b) {
            return seasonName.indexOf(a.season) - seasonName.indexOf(b.season);
        });
        return semester;
    }

    return (
        <div>
            <Grid
                container
                className="SemesterList"
                direction="row"
                gap={2}
                spacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                alignContent="center"
                justify-content="center"
            >
                {sortBySeason(semesters)
                    .sort(function (a, b) {
                        return a.year.localeCompare(b.year);
                    })
                    .map((semester: Semester) => (
                        <div key={semester.id} className="semesterview">
                            <SemesterView
                                semester={semester}
                                deleteSemester={deleteSemester}
                                courses={semester.course}
                                plan={plan}
                                plans={plans}
                                setPlan={setPlan}
                            ></SemesterView>
                        </div>
                    ))}
            </Grid>
        </div>
    );
}
