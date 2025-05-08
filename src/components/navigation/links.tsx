import { GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK } from "../../links";
import LinkedInIcon from "../../assets/linkedin.svg?react";
import GithubIcon from "../../assets/github.svg?react";
import { styled } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { Theme } from "@mui/material";

export type TextLinkType = {
  name: string;
  to: string;
  important?: boolean;
};

export type ImageLinkType = {
  onClick?: () => void;
  href?: string;
  icon: string | React.ReactNode;
};

export const commonTextLinks = [
  { name: "resume", to: RESUME_LINK, important: true } as TextLinkType,
  { name: "experience", to: "/experience" } as TextLinkType,
  { name: "projects", to: "/#projects" } as TextLinkType,
  { name: "about", to: "/about" } as TextLinkType,
];

export const ICON_STYLE = {
  width: 25,
  height: 25,
  color: "black",
};

export const setIconColor = (theme: Theme) => {
    ICON_STYLE.color = theme.palette.text.primary;
};

export const getCommonIconLinks = () => {
  return [
    {
      href: LINKEDIN_LINK,
      icon: <LinkedInIcon {...ICON_STYLE} />,
    } as ImageLinkType,
    {
      href: GITHUB_LINK,
      icon: <GithubIcon {...ICON_STYLE} />,
    } as ImageLinkType,
  ]; 
}

export const StyledLink = styled(HashLink)({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  fontFamily: "sans-serif",
});


