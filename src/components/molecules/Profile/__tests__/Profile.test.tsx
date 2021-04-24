import { MutableRefObject, createRef } from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Profile from "..";
import renderer from "react-test-renderer";
import { findAttributeByTestId } from "../../../../utils/testUtils";

const ref = createRef<MutableRefObject<HTMLDivElement>>();

const renderComponent = (): ShallowWrapper => {
   return shallow(<Profile profileRef={ref} />);
}

let wrapper: ShallowWrapper;

describe("Profile component", () => {

   beforeEach(() => {
      wrapper = renderComponent();
   });

   it("Should have 1 image div", () => {
      const component = findAttributeByTestId(wrapper, "image-div");
      expect(component.length).toBe(1);
   });

   it("Should have 1 name ", () => {
      const component = findAttributeByTestId(wrapper, "name");
      expect(component.length).toBe(1);
   });

   it("Should have 1 social icons", () => {
      const component = findAttributeByTestId(wrapper, "social-icons");
      expect(component.length).toBe(1);
   });

   it("Should render correcty", () => {
      const component = renderer.create(<Profile profileRef={ref} />).toJSON();
      expect(component).toMatchSnapshot();
   })
});