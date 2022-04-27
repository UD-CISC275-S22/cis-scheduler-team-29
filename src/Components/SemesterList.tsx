import { Grid } from "@mui/material";
import React from "react";
import { Semester } from "../Interfaces/Semester";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    deleteSemester
}: {
    semesters: Semester[];
    deleteSemester: (id: string) => void;
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
            <Grid className="SemesterList" direction="row" gap={3}>
                {sortBySeason(semesters)
                    .sort(function (a, b) {
                        return a.year.localeCompare(b.year);
                    })
                    .map((semester: Semester) => (
                        <div
                            key={semester.id}
                            // className="bg-light border m-2 p-2"
                            className="hey"
                        >
                            <SemesterView
                                semester={semester}
                                deleteSemester={deleteSemester}
                            ></SemesterView>
                        </div>
                    ))}
            </Grid>
        </div>
    );
}
