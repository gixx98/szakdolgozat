import {testType} from "../enums/_testType.enum";

export interface Test {
    tid?: string,
    type: testType,
    date: Date
}