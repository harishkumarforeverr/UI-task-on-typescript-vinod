// import React from "react";
// import {
//   UpCircleOutlined,
//   SettingOutlined,
//   ProjectOutlined,
//   PullRequestOutlined,
// } from "@ant-design/icons";
// import "./Nav.scss";
// function Nav() {
//   const HeaderData = [
//     {
//       title: "File",
//     },
//     {
//       title: "Options",
//     },
//     {
//       title: "Tools",
//     },
//     {
//       title: "Help",
//     },
//   ];
//   return (
//     <div className="HeadersIconsTitle">
//       {HeaderData.map((obj) => {
//         return (
//           <div>
//             <div className="Header_title"> <span>{obj.title}</span></div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Nav;

import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <AppBar className="header_appbar">
        <Toolbar className="header_toolbar">
          <Typography className="header_typography">File</Typography>
          <Typography className="header_typography header_options_margin  ">
            Options
          </Typography>
          <Typography className="header_typography header_options_margin  ">
            Tools
          </Typography>
          <Typography className="header_typography header_options_margin  ">
            Help
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
