import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Progress = Database['public']['Tables']['progress']['Row'];

export const progressService = {
  async getUserProgress(userId: string) {
    const { data, error } = await supabase
      .from('progress')
      .select(`
        *,
        resources (
          title,
          subject,
          type
        )
      `)
      .eq('user_id', userId);

    if (error) throw error;
    return data;
  },

  async updateProgress(progressData: Omit<Progress, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('progress')
      .upsert(progressData)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getProgressStats(userId: string) {
    const { data, error } = await supabase
      .from('progress')
      .select('resources(subject), completed')
      .eq('user_id', userId);

    if (error) throw error;
    
    // Aggregate progress by subject
    return data.reduce((acc: Record<string, { completed: number; total: number }>, curr) => {
      const subject = curr.resources?.subject;
      if (!subject) return acc;
      
      if (!acc[subject]) {
        acc[subject] = { completed: 0, total: 0 };
      }
      
      acc[subject].total += 1;
      if (curr.completed) {
        acc[subject].completed += 1;
      }
      
      return acc;
    }, {});
  }
};