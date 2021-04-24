import Footer from "..";
import { shallow, ShallowWrapper } from "enzyme";
import { findAttributeByTestId } from "../../../../utils/testUtils";
import renderer from "react-test-renderer";

const renderComponent = (): ShallowWrapper => {
   return shallow(<Footer />)
}

describe("Footer component", () => {
   let wrapper: ShallowWrapper;

   beforeEach(() => {
      wrapper = renderComponent();
   });

   it("Should contain 1 react icon", () => {
      const component = findAttributeByTestId(wrapper, "react-icon");
      expect(component.length).toBe(1);
   });

   it("Should contain 1 typescript icon", () => {
      const component = findAttributeByTestId(wrapper, "typescript-icon");
      expect(component.length).toBe(1);
   });

   it("Should contain 1 material icon", () => {
      const component = findAttributeByTestId(wrapper, "material-icon");
      expect(component.length).toBe(1);
   });

   it("Should contain 1 icons8 icon", () => {
      const component = findAttributeByTestId(wrapper, "icons8-icon");
      expect(component.length).toBe(1);
   });

   it("Should contain 1 sass icon", () => {
      const component = findAttributeByTestId(wrapper, "sass-icon");
      expect(component.length).toBe(1);
   });

   it("Should render correctly", () => {
      const component = renderer.create(<Footer />).toJSON();
      expect(component).toMatchSnapshot();
   });
});