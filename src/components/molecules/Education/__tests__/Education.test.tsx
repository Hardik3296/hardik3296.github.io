import Education from "..";
import {shallow, ShallowWrapper} from "enzyme";
import {findAttributeByTestId} from "../../../../utils/testUtils";

const renderComponent=()=>{
   return shallow(<Education/>);
}

describe("Education Component",()=>{

   let wrapper:ShallowWrapper;

   beforeEach(()=>{
      wrapper = renderComponent();
   });

   it("Should contain an image div",()=>{
      const component = findAttributeByTestId(wrapper,"image-div");
      expect(component.length).toBe(1);
   });

   it("Should contain a text div",()=>{
      const component = findAttributeByTestId(wrapper,"text-div");
      expect(component.length).toBe(1);
   });

   // it("Should contain 3 education records",()=>{
   //    const component = findAttributeByTestId(wrapper,"records");
   //    expect(component.length).toBe(3);
   // });

   it("renders correctly",()=>{
      expect(wrapper).toMatchSnapshot();
   });

});