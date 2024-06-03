import type { ReactNode } from 'react';

export interface JobPositionProps {
  company: string;
  companyDesc?: string;
  position: string;
  duration: string;
  technology?: string;
  children: ReactNode;
}
