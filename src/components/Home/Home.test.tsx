// import { render, screen } from "@testing-library/react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { SelectWrapper } from "../SelectDevice/SelectDevice";
// import DashboardContainer, {
//   Dashboard,
//   QuickOptimizationWidget, 
// } from "./Home";

// const handleChange = jest.fn((arg: any) => arg);
// const handleTheMotor = jest.fn(() => null);
// const BtnSelectDeviceOpacity = "0.5";
// const dotColor = "#40C36C";
// const deviceTitle = "MCF8316EVM";
// const devDesc = "This GUI supports MCF8316EVM";
// const devSubDesc = "Correct device detected : MCF8316A";

// const mockHistoryPush = jest.fn();
// const mockGoBack = jest.fn();
// const setView = jest.fn((arg: any) => arg);

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useLocation: () => ({
//     pathname: "/",
//   }),
//   useHistory: () => ({
//     push: mockHistoryPush,
//     goBack: mockGoBack,
//   }),
//   useParams: () => ({
//     pathParam: "haribusine-HOAoFA",
//   }),
//   useNavigate: () => ({
//     pathParam: "haribusine-HOAoFA",
//   }),
// }));

// test("renders the compoenet and finding whether a text present in the dom or not", () => {
//   const MyApp = () => {
//     return (
//       <Router>
//         <DashboardContainer />
//       </Router>
//     );
//   };
//   render(<MyApp />);
//   const linkElement = screen.getByText("Hardware Setup");
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders the compoenets and finding whether a text present in the dom or not", () => {
//   const MyApp = () => {
//     return (
//       <Router>
//         <Dashboard
//           setView={setView}
//           selectedDevice="M13"
//           setselectedDevice={(arg: any) => {}}
//         />
//       </Router>
//     );
//   };
//   render(<MyApp />);
//   const linkElement = screen.getByText("Users's Guide");
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders the QuickOptimizationWidget and finding whether a text present in the dom or not", () => {
//   const MyQuickOptimizationWidget = () => {
//     return (
//       <Router>
//         <QuickOptimizationWidget
//           selectedDevice="M13"
//           setselectedDevice={(arg: any) => {}}
//           setView={setView}
//         />
//       </Router>
//     );
//   };
//   render(<MyQuickOptimizationWidget />);
//   const linkElement = screen.getByText("in one single page");
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders the and QuickOptimizationWidget whether a text present in the dom or not", () => {
//   const MyQuickOptimizationWidget = () => {
//     return (
//       <Router>
//         <QuickOptimizationWidget
//           selectedDevice="M13"
//           setselectedDevice={(arg: any) => {}}
//           setView={setView}
//         />
//       </Router>
//     );
//   };
//   render(<MyQuickOptimizationWidget />);
//   const linkElement = screen.getByText("Hardware Setup");
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders the SelectWrapper and finding whether a text present in the dom or not", () => {
//   const MySelectWrapper = () => {
//     return (
//       <Router>
//         <SelectWrapper
//           selectedDevice="M13"
//           setselectedDevice={(arg: any) => {}}
//           handleChange={handleChange}
//           handleTheMotor={handleTheMotor}
//           BtnSelectDeviceOpacity={BtnSelectDeviceOpacity}
//           dotColor={dotColor}
//           devDesc={devDesc}
//           devSubDesc={devSubDesc}
//         />
//       </Router>
//     );
//   };
//   render(<MySelectWrapper />);
//   const linkElement = screen.getByText("This GUI supports MCF8316EVM");
//   expect(linkElement).toBeInTheDocument();
// });

export{ }
