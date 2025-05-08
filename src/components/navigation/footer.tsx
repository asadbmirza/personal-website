import { Box, Link, Typography } from "@mui/material";
import {
  getCommonIconLinks,
  commonTextLinks,
  setIconColor,
  ImageLinkType,
  TextLinkType,
  StyledLink,
} from "./links";
import { useTheme } from "@emotion/react";

const Footer = () => {
  const theme = useTheme();
  setIconColor(theme);

  const iconLinks = getCommonIconLinks();
  const textLinks = commonTextLinks;

  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        backgroundColor: (theme) => theme.palette.secondary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Typography sx={{ color: (theme) => theme.palette.text.primary }}>
        Asad Mirza 2025
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
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
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        {textLinks.map((link: TextLinkType) => (
          <Box key={link.name}>
            <StyledLink
              smooth
              to={link.to}
              sx={{ color: theme.palette.text.primary }}
            >
              {link.name}
            </StyledLink>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
