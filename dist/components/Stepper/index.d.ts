import { FC } from 'react';
export * from './Step';
export * from './StepLabel';
export interface StepperProps {
    onChange?: (stepIndex: number) => void;
    labels?: {
        title: string;
    }[];
    currentStep?: number;
    dense?: boolean;
}
export declare const Stepper: FC<StepperProps>;
