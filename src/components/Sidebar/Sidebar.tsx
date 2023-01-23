// import React from "react";
// import {
//   UpCircleOutlined,
//   SettingOutlined,
//   ProjectOutlined,
//   PullRequestOutlined,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import "./SIdebar.scss";
// import { paths } from "../../utils/constant";
// function Sidebar() {
//   const navigate = useNavigate();
//   const SidebarData = [
//     {
//       icon: (
//         <UpCircleOutlined
//           onClick={() => {
//             navigate(paths.Dashboard);
//           }}
//         />
//       ),
//       title: "Home",
//     },
//     {
//       icon: (
//         <SettingOutlined
//           onClick={() => {
//             navigate(paths.QuickOptimizationWidget);
//             // navigate(paths.OptimizationWidget);
//           }}
//         />
//       ),
//       title: "Setting",
//     },
//     {
//       icon: (
//         <ProjectOutlined
//           onClick={() => {
//             navigate(paths.CircutBoard);
//           }}
//         />
//       ),
//       title: "Quick tuning",
//     },
//     {
//       icon: <PullRequestOutlined onClick={() => {}} />,
//       title: "MPET",
//     },
//   ];
//   return (
//     <div className="sidebarsIconsTitle">
//       {SidebarData.map((obj) => {
//         return (
//           <div>
//             <div className="Sidebar_icons"> {obj.icon}</div>
//             <div className="Sidebar_title"> {obj.title}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Sidebar;

import { Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState("/");
  const onHandleSelect = (event: any, value: any) => {
    setSelectedButton(value);
  };
  return (
    <>
      <Drawer variant="permanent" anchor="left" className="MuiDrawer-paper ">
        <Toolbar />
        <List>
          <ListItem
            className="sidenav_listitem"
            component={NavLink}
            onClick={(e) => onHandleSelect(e, "/")}
            to="/"
          >
            <Box
              className={`list_box ${
                selectedButton === "/" && "selected-Tab-bgColor"
              }  `}
            >
              <img
                src={`${
                  selectedButton === "/"
                    ? "Images/home-Selected.svg"
                    : "Images/home-Unselected.svg"
                }`}
                style={{ fill: "red!important" }}
                alt="dd"
              />
            </Box>
            <Typography
              className={`menulist_typography ${
                selectedButton === "/" && "selected-text-color"
              } `}
            >
              Home
            </Typography>
          </ListItem>
          <ListItem
            className="sidenav_listitem"
            component={NavLink}
            onClick={(e) => onHandleSelect(e, "/setting")}
            to="/setting"
          >
            <Box
              className={`list_box ${
                selectedButton === "/setting" && "selected-Tab-bgColor"
              }  `}
            >
              <img
                src={`${
                  selectedButton === "/setting"
                    ? "Images/setting-Unselected.svg"
                    : "Images/setting-Unselected.svg"
                }`}
                alt="dd"
              />
            </Box>
            <Typography
              className={`menulist_typography ${
                selectedButton === "/setting" && "selected-text-color"
              } `}
            >
              Setting
            </Typography>
          </ListItem>
          <ListItem
            className="sidenav_listitem"
            component={NavLink}
            onClick={(e) => onHandleSelect(e, "/quick_tuning")}
            to="/quick_tuning"
          >
            <Box
              className={`list_box ${
                selectedButton === "/quick_tuning" && "selected-Tab-bgColor"
              }  `}
            >
              <img
                src={`${
                  selectedButton === "/quick_tuning"
                    ? "Images/quick-Unselected.svg"
                    : "Images/quick-Unselected.svg"
                }`}
                alt="dd"
              />
            </Box>
            <Typography
              className={`menulist_typography_quickTuning ${
                selectedButton === "/quick_tuning" && "selected-text-color"
              } `}
            >
              Quick Tuning
            </Typography>
          </ListItem>
          <ListItem
            className="sidenav_listitem sidenav_listitem_mpet"
            component={NavLink}
            onClick={(e) => onHandleSelect(e, "/mpet")}
            to="/mpet"
          >
            <Box
              className={`list_box ${
                selectedButton === "/mpet" && "selected-Tab-bgColor"
              }  `}
            >
              <img
                src={`${
                  selectedButton === "/mpet"
                    ? "Images/mpet-Unselected.svg"
                    : "Images/mpet-Unselected.svg"
                }`}
                alt="dd"
              />
            </Box>
            <Typography
              className={`menulist_typography ${
                selectedButton === "/mpet" && "selected-text-color"
              } `}
            >
              MPET
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
