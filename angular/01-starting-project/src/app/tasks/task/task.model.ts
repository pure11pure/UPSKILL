export interface Task {
    id: string;
    userId: string;
    title: string;
    summury: string;
    date: string;
}

export interface NewTaskData {
    title: string;
    summary: string;
    date: string;
}