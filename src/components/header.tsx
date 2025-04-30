import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { margin, styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  fontFamily: "sans-serif",
});

const MARGIN = "0px 10px";
type LinkType = {
  name: string;
  to: string;
};

const Header = () => {
  const links = [
    { name: "experience", to: "#experience" } as LinkType,
    { name: "projects", to: "#projects" } as LinkType,
    { name: "about", to: "#about" } as LinkType,
  ];
  return (
    <Toolbar sx={{ padding: '0 !important' }}>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <StyledLink color="inherit" to="#home">
          asad mirza
        </StyledLink>
      </Box>
      {links.map((link: LinkType) => (
        <Box key={link.name} sx={{ margin: MARGIN }}>
          <StyledLink color="inherit" to={link.to}>
            {link.name}
          </StyledLink>
        </Box>
      ))}
    </Toolbar>
  );
};

export default Header;
