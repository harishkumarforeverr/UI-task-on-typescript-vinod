import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer"; 
import ButtonWrapper from "./ButtonWrapper";

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

 test('renders the and finding whether a text present in the dom or not', () => {
  const MyButtonWrapper=()=>{
    return (
      <Router>
         <ButtonWrapper className="btn">button label</ButtonWrapper>
      </Router>
    )
  }
  render(<MyButtonWrapper />);
  const linkElement = screen.getByText("button label");
  expect(linkElement).toBeInTheDocument();
}); 

it("creating the snapshot of the compoenent correctly", () => {
  const MyButtonWrapper = () => {
    return (
      <Router>
         <ButtonWrapper className="btn">button label</ButtonWrapper>
      </Router>
    );
  };
  const tree = renderer.create(<MyButtonWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
