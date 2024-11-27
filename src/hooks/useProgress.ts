import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { progressService } from '../services/progressService';

export function useProgress(userId: string) {
  const queryClient = useQueryClient();

  const progress = useQuery({
    queryKey: ['progress', userId],
    queryFn: () => progressService.getUserProgress(userId)
  });

  const stats = useQuery({
    queryKey: ['progress-stats', userId],
    queryFn: () => progressService.getProgressStats(userId)
  });

  const updateProgress = useMutation({
    mutationFn: progressService.updateProgress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress', userId] });
      queryClient.invalidateQueries({ queryKey: ['progress-stats', userId] });
    }
  });

  return {
    progress: progress.data ?? [],
    stats: stats.data ?? {},
    isLoading: progress.isLoading || stats.isLoading,
    error: progress.error || stats.error,
    updateProgress
  };
}