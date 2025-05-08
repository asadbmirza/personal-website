/// <reference types="vite-plugin-svgr/client" />

import { Toolbar, Box, Link } from "@mui/material";
import { useTheme } from "@mui/system";
import { useThemeToggle } from "../../App";
import LightDarkThemeIcon from "../../assets/theme-light-dark.svg?react";
import {
  commonTextLinks,
  getCommonIconLinks,
  ICON_STYLE,
  ImageLinkType,
  TextLinkType,
  setIconColor,
  StyledLink,
} from "./links";

const Header = () => {
  const { toggleTheme } = useThemeToggle();
  const theme = useTheme();
  setIconColor(theme);
  const iconLinks = [
    ...getCommonIconLinks(),
    {
      onClick: toggleTheme,
      icon: <LightDarkThemeIcon {...ICON_STYLE} />,
    } as ImageLinkType,
  ];
  const textLinks = commonTextLinks;

  return (
    <Toolbar
      sx={{
        padding: "0 !important",
        position: "sticky",
        width: "97%",
        zIndex: 2,
        top: 0,
      }}
      id="header"
    >
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <StyledLink sx={{ color: theme.palette.text.primary }} smooth to="/">
          asad mirza
        </StyledLink>
      </Box>
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {iconLinks.map((link: ImageLinkType) => (
          <Box key={link.href}>
            {link.href ? (
              <Link
                href={link.href}
                onClick={link?.onClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ) : (
              <Box onClick={link?.onClick} sx={{ cursor: "pointer" }}>
                {link.icon}
              </Box>
            )}
          </Box>
        ))}
        {textLinks.map((link: TextLinkType) => (
          <Box key={link.name}>
            <StyledLink
              smooth
              to={link.to}
              sx={{
                color: link?.important
                  ? theme.palette.text.secondary
                  : theme.palette.text.primary,
                fontWeight: link?.important ? 700 : 400,
              }}
            >
              {link.name}
            </StyledLink>
          </Box>
        ))}
      </Box>
    </Toolbar>
  );
};

export default Header;
