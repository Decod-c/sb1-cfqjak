export interface Resource {
  id: string;
  title: string;
  type: 'worksheet' | 'lesson' | 'game' | 'activity';
  subject: string;
  grade: string;
  downloads: number;
}

export interface ProgressData {
  subject: string;
  completed: number;
  total: number;
}

export interface User {
  name: string;
  role: 'student' | 'teacher' | 'parent';
  grade?: string;
  avatar: string;
}