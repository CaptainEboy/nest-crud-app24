// src/task.model.ts

export class Task {
    id: number;
    title: string;
    description: string;
    status: 'OPEN' | 'DONE';
  }