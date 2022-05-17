/// <reference types="react" />
import { CommonProps } from '../Common/CommonProps';
interface Listener {
    seconds: number;
    callback: (...args: any) => void;
}
interface TimerProps extends CommonProps {
    seconds: number;
    onTimeEnd?: () => void;
    listenerList?: Array<Listener>;
    key?: any;
}
export declare const Timer: (props: TimerProps) => JSX.Element;
export {};
