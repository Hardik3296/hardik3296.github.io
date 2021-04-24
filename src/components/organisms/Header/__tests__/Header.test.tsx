import { shallow, ShallowWrapper } from "enzyme";
import { findAttributeByTestId } from "../../../../utils/testUtils";
import renderer from "react-test-renderer";
import Header from "..";

const renderComponent = (): ShallowWrapper => {
   return shallow(<Header />)
}

describe("Header Component", () => {
   let wrapper: ShallowWrapper;

   beforeEach(() => {
      wrapper = renderComponent();
   });

   it("Should have my pic", () => {
      const component = findAttributeByTestId(wrapper, "image");
      expect(component.length).toBe(1);
   });

   it("Should have my name", () => {
      const component = findAttributeByTestId(wrapper, "name");
      expect(component.length).toBe(1);
   });

   it("Should have social-media", () => {
      const component = findAttributeByTestId(wrapper, "social-media");
      expect(component.length).toBe(1);
   });

   it("Should have menu", () => {
      const component = findAttributeByTestId(wrapper, "menu");
      expect(component.length).toBe(1);
   });

   it("Should render correctly", () => {
      const component = renderer.create(<Header />).toJSON();
      expect(component).toMatchSnapshot();
   })

})