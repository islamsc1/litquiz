export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export enum QuizState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED'
}