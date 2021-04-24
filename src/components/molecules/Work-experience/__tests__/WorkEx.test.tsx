import WorkEx from "..";
import { create } from "react-test-renderer";

describe("Work Experience Component", () => {

   describe("On shallow rendering component", () => {

      it("Should render correctly", () => {
         const component = create(<WorkEx />).toJSON();
         expect(component).toMatchSnapshot();
      });
   });
});