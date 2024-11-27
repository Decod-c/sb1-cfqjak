export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      resources: {
        Row: {
          id: string
          created_at: string
          title: string
          type: 'worksheet' | 'lesson' | 'game' | 'activity'
          subject: string
          grade: string
          downloads: number
          content_url: string
          author_id: string
        }
        Insert: Omit<Database['public']['Tables']['resources']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['resources']['Row']>
      }
      progress: {
        Row: {
          id: string
          created_at: string
          user_id: string
          resource_id: string
          completed: boolean
          score: number | null
          last_accessed: string
        }
        Insert: Omit<Database['public']['Tables']['progress']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['progress']['Row']>
      }
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          name: string
          role: 'student' | 'teacher' | 'parent'
          grade: string | null
          avatar_url: string | null
        }
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['users']['Row']>
      }
    }
  }
}