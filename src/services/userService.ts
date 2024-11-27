import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type User = Database['public']['Tables']['users']['Row'];

export const userService = {
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) throw error;
    return data;
  },

  async updateUser(userId: string, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select(`
        *,
        progress (
          completed,
          score,
          last_accessed
        )
      `)
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  }
};