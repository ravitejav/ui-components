import { ComponentRouter } from "../../Models/ConstantModels";

export const AVAILABLE_COMPONENTS: Array<ComponentRouter> = [
    {
        url: "/ui-components/timer",
        name: "Timer",
        title: "Timer Component"
    }
]
export const getTitle = (pathName: string) => {
    const route: Array<ComponentRouter> = AVAILABLE_COMPONENTS.filter(component => component.url === pathName);
    if(route.length > 0) {
        return route[0].title;
    }
    return 'Ui-Components';
}
