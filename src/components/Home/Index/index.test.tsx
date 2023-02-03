import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer"; 
import DashboardContainer from "./index";

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
 
test('renders the compoenet and finding whether a text present in the dom or not', () => {
  const MyApp=()=>{
    return (
      <Router>
        <DashboardContainer />
      </Router>
    )
  }
  render(<MyApp />);
  const linkElement = screen.getByText("Hardware Setup");
  expect(linkElement).toBeInTheDocument();
}); 

 
