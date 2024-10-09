// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { Avatar, Button, Stack } from "@mui/material";
// import Box from "@mui/material/Box";
// import React from "react";
// import { useHistory } from "react-router-dom";
// import "./Header.css";

// const Header = ({ children, hasHiddenAuthButtons }) => {
//   const history=useHistory();
//   const username=localStorage.getItem("username");

//   const clear=()=>{
//     localStorage.clear()
//     window.location.reload()
//   }
//     return (
//       <Box className="header">
//         <Box className="header-title">
//             <img src="logo_dark.svg" alt="QKart-icon"></img>
//         </Box>
//         {children}
//         {hasHiddenAuthButtons?(
//         <Button
//         className="explore-button"
//         startIcon={<ArrowBackIcon />}
//         variant="text"
//         onClick={(e)=>{history.push('/')}}
//         >
//         Back to explore
//        </Button>
//         ):(username?(
//           <Stack direction='row' spacing={2} alignItems="center">
//             <Avatar alt={username} src="/public/avatar.png"/>
//             <p>{username}</p>
//             <Button variant="contained" onClick={clear}>LOGOUT</Button>
//           </Stack>

//         ):(
//           <Stack direction='row' spacing={2} alignItems="center">          
//             <Button variant="contained" onClick={(e)=>{history.push('/login')}}>LOGIN</Button>
//             <Button variant="contained" onClick={(e)=>{history.push('/register')}}>REGISTER</Button>
//           </Stack>

//         ))}
       
       
//       </Box>
//     );
// };

// export default Header;


import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack, Typography, Box  } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";


const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleExploreButton = () => {
    history.push("/");
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear localStorage
    window.location.reload(); // Force reload to reflect changes
    history.push("/login");
  };

  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon" />
      </Box>
      {children}
      {hasHiddenAuthButtons ? (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={handleExploreButton}
        >
          Back to explore
        </Button>
      ) : (
        <Box className="header-actions">
          {!token ? (
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="contained" onClick={() => history.push("/login")}>LOGIN</Button>
              <Button variant="contained" onClick={() => history.push("/register")}>REGISTER</Button>
            </Stack>
          ) : (
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt={username} src="avatar.png" />
              <Typography variant="h6" className="username">{username}</Typography>
              <Button variant="contained" onClick={handleLogout}>LOGOUT</Button>
            </Stack>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Header;
