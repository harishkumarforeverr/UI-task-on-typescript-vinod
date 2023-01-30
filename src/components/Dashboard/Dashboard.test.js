/* eslint-disable testing-library/no-debugging-utils */
// offical enzyme website link : https://enzymejs.github.io/enzyme/#reacttestutilsact-wrap
import enzyme from "enzyme"; 
import { BrowserRouter as Router } from "react-router-dom";
 
const { default: Dashboard } = require("./Dashboard");

const mockHistoryPush = jest.fn();
const mockGoBack = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
  useHistory: () => ({
    push: mockHistoryPush,
    goBack: mockGoBack,
  }),
  useParams: () => ({
    pathParam: "haribusine-HOAoFA",
  }),
  useNavigate: () => ({
    pathParam: "haribusine-HOAoFA",
  }),
}));

describe("Dashboard im testin g fagagahajkb jajd asd as", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = enzyme.mount(
      <Router>
        <Dashboard />
      </Router>
    );
  });

  // snapshot test cases Starts From Here

  it("snapshot test cases in Dashboard ", (done) => {
    expect(wrapper.debug()).toMatchSnapshot();
    done();
  });
});
