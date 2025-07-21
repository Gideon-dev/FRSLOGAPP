import { useTransition } from 'react';

export function usePageTransition() {
  const [isPending, startTransition] = useTransition();
  return { isPending, startTransition };
}
