import { ComponentPropsItem } from "../../Models/ConstantModels";

export const TimerComponentPropsList: Array<ComponentPropsItem> = [
    {
        name: 'seconds',
        syntax: '<Timer seconds={100} />',
        explanation: "seconds does take only number, that will converted into hours, minutes and seconds to display",
        optional: false
    },
    {
        name: 'onTimeEnd',
        syntax: '<Timer seconds={100} onTimeEnd={() => console.log("done")} />',
        explanation: "onTimeEnd is a callback function that will be called when timer has reached 0",
        optional: true
    },
    {
        name: 'listenerList',
        syntax: `<Timer 
    seconds={100} 
    listenerList={[
        {seconds: 10, callback: () => console.log("10 seconds")}, 
        {seconds: 20, callback: () => console.log("20 seconds")}
    ]} 
/>`,
        explanation: "listenerList is an array of objects with seconds and callback, callback method will be called when timer has reached the specified seconds passed in object",
        optional: true
    },
    {
        name: 'key',
        syntax: '<Timer seconds={100} key={"unique-value"} />',
        explanation: "key is a unique value that will be used to identify the timer",
        optional: true
    },
    {
        name: 'classList',
        syntax: '<Timer seconds={100} classList={["class1", "class2"]} />',
        explanation: "classList is an array of strings that will be added to the calllist of the timer",
        optional: true
    }
];
