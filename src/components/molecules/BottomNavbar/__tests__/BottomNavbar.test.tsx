import BottomNavBar from "..";
import {shallow, ShallowWrapper} from "enzyme";
import renderer from "react-test-renderer"
import {findAttributeByTestId} from "../../../../utils/testUtils";

const renderComponent=():ShallowWrapper=>{
   return shallow(<BottomNavBar/>)
}

describe("Bottom Navbar",()=>{
   let wrapper:ShallowWrapper;

   beforeEach(()=>{
      wrapper=renderComponent();
   });

   it("Should have one profile anchor",()=>{
      const component = findAttributeByTestId(wrapper,"me");
      expect(component.length).toBe(1);
   });

   it("Should have one Education anchor",()=>{
      const component = findAttributeByTestId(wrapper,"Education");
      expect(component.length).toBe(1);
   });

   it("Should have one WorkEx anchor",()=>{
      const component = findAttributeByTestId(wrapper,"WorkEx");
      expect(component.length).toBe(1);
   });

   it("Should have one GithubRepos anchor",()=>{
      const component = findAttributeByTestId(wrapper,"GithubRepos");
      expect(component.length).toBe(1);
   });

   it("Should have one theme icon",()=>{
      const component = findAttributeByTestId(wrapper,"ThemeIcon");
      expect(component.length).toBe(1);
   });

   it("renders correctly",()=>{
      const snapshot = renderer.create(<BottomNavBar/>).toJSON();
      expect(snapshot).toMatchSnapshot();
   });

});