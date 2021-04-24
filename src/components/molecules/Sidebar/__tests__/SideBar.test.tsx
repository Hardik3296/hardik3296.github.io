import { shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";
import { findAttributeByTestId } from "../../../../utils/testUtils";
import SideBar from "..";

const renderComponent = (): ShallowWrapper => {
   return shallow(<SideBar />)
}

describe("Sidebar Component", () => {
   let wrapper: ShallowWrapper;

   beforeEach(() => {
      wrapper = renderComponent();
   });

   it("Should have 1 profile anchor", () => {
      const component = findAttributeByTestId(wrapper, "me");
      expect(component.length).toBe(1);
   });

   it("Should have 1 education anchor", () => {
      const component = findAttributeByTestId(wrapper, "education");
      expect(component.length).toBe(1);
   });

   it("Should have 1 work experience anchor", () => {
      const component = findAttributeByTestId(wrapper, "work-experience");
      expect(component.length).toBe(1);
   });

   it("Should have 1 github repos anchor", () => {
      const component = findAttributeByTestId(wrapper, "github-repos");
      expect(component.length).toBe(1);
   });

   it("Should have 1 theme icon", () => {
      const component = findAttributeByTestId(wrapper, "theme-icon");
      expect(component.length).toBe(1);
   })

   it("Should render correctly", () => {
      const component = renderer.create(<SideBar />).toJSON();
      expect(component).toMatchSnapshot();
   });

});