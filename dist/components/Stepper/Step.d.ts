import { FC } from 'react';
export interface StepProps {
    stepIndex?: number;
    currentStep?: number;
    vertical?: boolean;
}
export declare const Step: FC<StepProps>;
