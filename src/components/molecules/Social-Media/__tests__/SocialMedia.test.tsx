import SocialMeadia from "..";
import { shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";
import { findAttributeByTestId } from "../../../../utils/testUtils";
import { IconInterface } from "../../../../utils/contexts/ThemeContext";


const icons: IconInterface = { linkedin: { color: "green" }, github: { color: "red" }, mail: { color: "blue" } };

const renderComponent = (): ShallowWrapper => {
   return shallow(<SocialMeadia size={35} icons={icons} />);
}

describe("Social media Component", () => {

   let wrapper: ShallowWrapper;

   beforeEach(() => {
      wrapper = renderComponent();
   });

   it("Should have 1 mail icon", () => {
      const component = findAttributeByTestId(wrapper, "mail");
      expect(component.length).toBe(1);
   });

   it("Should have 1 linkedin icon", () => {
      const component = findAttributeByTestId(wrapper, "linkedin");
      expect(component.length).toBe(1);
   });

   it("Should have 1 github icon", () => {
      const component = findAttributeByTestId(wrapper, "github");
      expect(component.length).toBe(1);
   });

   it("Should have 1 geeksforgeeks icon", () => {
      const component = findAttributeByTestId(wrapper, "geeksforgeeks");
      expect(component.length).toBe(1);
   });

   it("Should render correctly", () => {
      const component = renderer.create(<SocialMeadia size={35} icons={icons} />).toJSON();
      expect(component).toMatchSnapshot();
   })
});