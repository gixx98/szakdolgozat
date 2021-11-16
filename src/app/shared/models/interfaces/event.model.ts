export interface Event {
    id: string;
    title: string;
    daysOfWeek: string;
    color?: string;
    startRecur?: string;
    endRecur?: string;
    startTime: string;
    endTime: string;
}