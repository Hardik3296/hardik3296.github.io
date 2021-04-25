import GithubRepo from "..";
import { shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";

const renderComponent = () => {
   return shallow(<GithubRepo />);
}

describe("Github Repos", () => {
   let wrapper: ShallowWrapper;

   beforeEach(() => {
      wrapper = renderComponent();
   });

   it("Should render correctly", () => {
      const component = renderer.create(<GithubRepo />).toJSON();
      expect(component).toMatchSnapshot();
   })
})