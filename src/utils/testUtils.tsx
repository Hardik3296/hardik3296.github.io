import { ShallowWrapper } from "enzyme"

export const findAttributeByTestId = (component:ShallowWrapper, attr:string):ShallowWrapper=>{
   return component.find(`[test-id='${attr}']`);
}