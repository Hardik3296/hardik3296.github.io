import {shallow, ShallowWrapper} from "enzyme";
import Drawer from "..";
import {findAttributeByTestId} from "../../../../utils/testUtils";

const renderComponent=()=>{
   return shallow(<Drawer />);
}

describe("Drawer Component",()=>{

   let wrapper:ShallowWrapper;

   beforeEach(()=>{
      wrapper=renderComponent();
   })

   it("Should have one linkedin icon",()=>{
      const component = findAttributeByTestId(wrapper,"LinkedIn");
      expect(component.length).toBe(1);
   });

   it("Should have one github icon",()=>{
      const component = wrapper.find(`[test-id="Github"]`);
      expect(component.length).toBe(1);
   });

   it("Should have one mail icon",()=>{
      const component = wrapper.find(`[test-id="Mail"]`);
      expect(component.length).toBe(1);
   });

   it("Should have one GeeksForGeeks icon",()=>{
      const component = wrapper.find(`[test-id="GeeksForGeeks"]`);
      expect(component.length).toBe(1);
   });

   it("renders correctly",()=>{
      expect(wrapper).toMatchSnapshot();
   });
});