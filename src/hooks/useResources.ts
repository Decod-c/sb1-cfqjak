import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { resourceService } from '../services/resourceService';

export function useResources() {
  const queryClient = useQueryClient();

  const resources = useQuery({
    queryKey: ['resources'],
    queryFn: resourceService.getResources
  });

  const createResource = useMutation({
    mutationFn: resourceService.createResource,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resources'] });
    }
  });

  const updateResource = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      resourceService.updateResource(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resources'] });
    }
  });

  const deleteResource = useMutation({
    mutationFn: resourceService.deleteResource,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resources'] });
    }
  });

  return {
    resources: resources.data ?? [],
    isLoading: resources.isLoading,
    error: resources.error,
    createResource,
    updateResource,
    deleteResource
  };
}