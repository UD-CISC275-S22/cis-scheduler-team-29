import { Semester } from "./Semester";

export interface Plan {
    id: string;
    semesters: Semester[];
}
