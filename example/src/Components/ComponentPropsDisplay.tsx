import React from "react";
import { ComponentPropsItem } from "../Models/ConstantModels";
import { ComponentPropsListProps } from "../Models/PropModels";
import { CodeBlock } from "./CodeBlock";

export const ComponentPropsList = (props: ComponentPropsListProps) => {

    return (
        <ul className='flex flex-col font-light'>
        {props.list?.map((componentProp: ComponentPropsItem, index) => (
          <li key={index} className="p-0 pb-2">
            <div className='flex flex-col bg-slate-800 text-white p-2 rounded-md'>
              <span>Property: {componentProp.name}</span>
              {/* <span>{componentProp.syntax}</span> */}
              <CodeBlock title="sytax" code={componentProp.syntax} />
              <span>{componentProp.explanation}</span>
              <span>Optional: {componentProp.optional ? 'true':'false'}</span>
            </div>
          </li>
        ))}
      </ul>
    )

}