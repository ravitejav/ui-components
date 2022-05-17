/// <reference types="react" />
import { CommonProps } from '../../Common/CommonProps';
interface Listener {
    seconds: number;
    callback: number;
}
interface TimerProps extends CommonProps {
    seconds: number;
    onTimeEnd?: () => void;
    listenerList?: (list: Array<Listener>) => void;
}
export declare const Timer: (props: TimerProps) => JSX.Element;
export {};
