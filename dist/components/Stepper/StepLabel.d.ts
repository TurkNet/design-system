import React, { FC } from 'react';
export interface StepLabelProps {
    isPassive?: boolean;
    isCompleted?: boolean;
    currentStep?: number;
    stepIndex?: number;
    title?: React.ReactNode;
    onClick?: (stepIndex: number) => void;
}
export declare const StepLabel: FC<StepLabelProps>;
