import React from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import { SlickSliderCssProps } from './styled';
export interface CarouselProps extends Settings, SlickSliderCssProps {
}
export declare class Carousel extends React.PureComponent<CarouselProps> {
    slider: React.RefObject<Slider>;
    constructor(props: CarouselProps);
    onNext: () => void;
    onPrevious: () => void;
    render(): JSX.Element;
}
