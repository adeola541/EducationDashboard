import { useState } from "react";
import {  Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import "react-pro-sidebar/dist/"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Book,  GradeRounded,  Login,  PermDataSettingOutlined, Settings} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.blueAccent[900],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[900]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar
        // style={{
        //   height:' h-screen / 2',
        //   width: 'w-128,'
         
        // }}
      collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "5px 0 10px 30",
              color: colors.primary[900],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>


          <Box paddingLeft={isCollapsed ? undefined : "10%"} 
          style={{
            background: `${colors.blueAccent} !important`,
            }}
            >
          <Link to="/"  style={{
          textDecoration: 'none',
          
        }}>
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              
              setSelected={setSelected}
            />
           </Link>
           <Link to="/course" style={{
          textDecoration: 'none',
          
        }}>

            <Item
              title="Courses"
              icon={<Book />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Link to="/User"style={{
          textDecoration: 'none',
          
        }}>
              <Item
                title="Students"
                icon={<GradeRounded/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to=""style={{
          textDecoration: 'none',
          
        }}>
            <Item
              title="Exam"
              icon={<PermDataSettingOutlined/>}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>

            <Link to=""style={{
          textDecoration: 'none',
          
        }}>
            <Item
              title="Result"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Link to="/signin" style={{
          textDecoration: 'none',
          
        }} >
              <Item
              title="SignIn"
              icon={<Login />}
              selected={selected}
              setSelected={setSelected}
            />
           </Link>
           <Link to="/setting" style={{
          textDecoration: 'none',
          
        }}>
            <Item
              title="Setting"
              icon={<Settings />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebar1;