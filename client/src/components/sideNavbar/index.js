import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Logout from "../LogoutButton/index";

const SideNavbar = (props) => {
  return (
    <div className="">
      <h1 className="">QikTik</h1>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">DOW</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">S&P</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <h5>Saved Stocks / Favorites</h5>
      <Nav vertical>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>
      </Nav>
      <hr />
      <h5>News / Brokerage Links</h5>
      <Nav vertical>
        <NavLink href="https://robinhood.com/">Robinhood</NavLink>
        <NavLink href="https://www.cnn.com/business">CNN Business</NavLink>
        <NavLink href="https://finance.yahoo.com/">Yahoo Finance</NavLink>
        <NavLink href="https://www.wsj.com/">WSJ</NavLink>
        <NavLink href="https://www.forbes.com/">Forbes</NavLink>
      </Nav>
      <hr />
      <Nav vertical>
        <Logout />
      </Nav>
    </div>
  );
};

export default SideNavbar;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ShowChartIcon from "@material-ui/icons/ShowChart";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import HttpIcon from "@material-ui/icons/Http";
// import Logout from "../LogoutButton/index";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     backgroundColor: "black",
//   },
//   appBar: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3),
//   },
// }));

// export default function SideNavbar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="relative" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h3" noWrap>
//             QikTik{" "}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <div className={classes.toolbar} />

//         <Divider />
//         <Typography variant="h6">Ticker</Typography>
//         <List>
//           {["DOW", "S&P"].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <ShowChartIcon /> : <ShowChartIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <Typography variant="h6">Stock Tracker</Typography>
//         <List>
//           {["Stock Name or Symbol?"].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <FavoriteIcon /> : <FavoriteIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <Typography variant="h6">Stock News Links</Typography>
//         <List>
//           {[
//             { name: "Robinhood", url: "https://robinhood.com" },
//             { name: "Alpaca", url: "" },
//             { name: "IEXCloud", url: "" },
//             { name: "WSJ", url: "" },
//           ].map((link, index) => (
//             <ListItem button key={link.name}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <HttpIcon /> : <HttpIcon />}
//               </ListItemIcon>
//               <a href={link.url}>
//                 <ListItemText primary={link.name} />
//               </a>
//             </ListItem>
//           ))}
//         </List>
//         <Logout />
//       </Drawer>
//     </div>
//   );
// }
