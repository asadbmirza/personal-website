import {
  Box,
  Collapse,
  Grow,
  Link,
  Slide,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import DescriptionBox from "../../components/description-box";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK } from "../../links";
import { HashLink } from "react-router-hash-link";

const StyledHashLink = styled(HashLink)({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Info = ({ onLoad }: { onLoad: () => void }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<number>(0);
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const theme = useTheme();

  const TRANSITION_TIME = 1000;

  const loadPage = () => {
    setShowInfo(true);
    Cookies.set("loaded", "true", { expires: 24 });
    onLoad();
  };

  useEffect(() => {
    if (showInfo) {
      setTimeout(() => {
        setShowDescription(true);
      }, 200);
    }
  }, [showInfo]);

  useEffect(() => {
    const loadedCookie = Cookies.get("loaded");
    if (loadedCookie) {
      setShowInfo(true);
      return;
    }

    const interval = setInterval(() => {
      setLoaded((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          loadPage();
        }
        return next;
      });
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
        <Collapse in={showInfo} timeout={TRANSITION_TIME}>
          <Typography
            variant="h1"
            align="left"
            sx={{
              fontWeight: "600",
              color: (theme) => theme.palette.text.primary,
            }}
            id="home"
          >
            Asad Mirza
          </Typography>
        </Collapse>
        <Slide in={showInfo} direction="left" timeout={TRANSITION_TIME}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <Typography
              variant="h4"
              align="right"
              sx={{ color: (theme) => theme.palette.text.primary }}
            >
              software engineer intern
            </Typography>
            <Typography
              variant="h4"
              align="right"
              sx={{ color: (theme) => theme.palette.text.primary }}
            >
              computer science & teaching assistant @ university of toronto
            </Typography>
          </Box>
        </Slide>
        <Collapse in={showInfo} timeout={TRANSITION_TIME}>
          <Typography variant="h5" align="center">
            <Link
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontWeight: "600",
                color: (theme) => theme.palette.link?.main,
              }}
            >
              resume
            </Link>{" "}
            |{" "}
            <Link
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: (theme) => theme.palette.link?.main }}
            >
              linkedin
            </Link>{" "}
            |{" "}
            <Link
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: (theme) => theme.palette.link?.main }}
            >
              github
            </Link>
          </Typography>
        </Collapse>
      </Box>
      <Box
        sx={{
          width: showDescription ? "100%" : "600px",
          transition: "width 1s ease",
          marginTop: 1,
          alignSelf: "center",
        }}
      >
        <Grow in timeout={TRANSITION_TIME}>
          <DescriptionBox
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80%",
              margin: "0 auto",
              gap: "5vh",
              backgroundColor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.text.primary,
            }}
            position="relative"
          >
            <Typography variant="h2" align="center">
              Hello!
            </Typography>
            {!showInfo && (
              <Typography variant="h4" position="absolute" top="50%">
                loading: {loaded}
              </Typography>
            )}
            <Typography
              variant="h5"
              align="center"
              sx={{
                opacity: showInfo ? 1 : 0,
                transition: "opacity 2s ease",
              }}
            >
              I’m Asad! I’m a second-year Computer Science student at the
              University of Toronto with a passion for programming, teaching,
              and exploring the latest technologies. I have previously worked
              for{" "}
              <Link
                href="http://stackadapt.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: (theme) => theme.palette.link?.main }}
              >
                StackAdapt
              </Link>{" "}
              as a Software Engineering intern as well as various other
              programming internships. I also work as a Computer Science
              Teaching Assistant for UofT where I help students master computer
              science concepts, reflecting my leadership and communication
              skills in the process.
              <br></br>
              <br></br>
              I’m always excited to connect, share ideas, and collaborate, feel
              free to reach out anytime!
              <br></br>
              Please check out my{" "}
              <StyledHashLink
                to="/projects"
                sx={{ color: theme.palette.text.secondary }}
              >
                projects
              </StyledHashLink>{" "}
              and{" "}
              <StyledHashLink
                to="/experience"
                sx={{ color: theme.palette.text.secondary }}
              >
                experiences
              </StyledHashLink>
            </Typography>
          </DescriptionBox>
        </Grow>
      </Box>
    </Box>
  );
};

export default Info;
