import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer"; 
import OptimizationWidget from "./OptimizationWidget";

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
const setView=jest.fn((arg:any)=>arg)
test('renders the compoenet and finding whether a text present in the dom or not', () => {
  const MyOptimizationWidget=()=>{
    return (
      <Router>
        <OptimizationWidget   />
      </Router>
    )
  }
  render(<MyOptimizationWidget />);
  const linkElement = screen.getByText("Popup Setup");
  expect(linkElement).toBeInTheDocument();
}); 

it("creating the snapshot of the compoenent correctly", () => {
  const MyOptimizationWidget = () => {
    return (
      <Router>
        <OptimizationWidget   />
      </Router>
    );
  };
  const tree = renderer.create(<MyOptimizationWidget />).toJSON();
  expect(tree).toMatchSnapshot();
});
