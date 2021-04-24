import GithubRepo from "..";
import {shallow, ShallowWrapper} from "enzyme";
import renderer from "react-test-renderer";
import {findAttributeByTestId} from "../../../../utils/testUtils";

const renderComponent=()=>{
   return shallow(<GithubRepo/>);
}

describe("Github Repos",()=>{
   let wrapper:ShallowWrapper;

   beforeEach(()=>{
      wrapper = renderComponent();
   });

   // it("Should have 6 repo",()=>{
   //    const component = findAttributeByTestId(wrapper,"repo-name");
   //    expect(component.length).toBe(6);
   // });

   it("Should render correctly",()=>{
      const component = renderer.create(<GithubRepo/>).toJSON();
      expect(component).toMatchSnapshot();
   })
})