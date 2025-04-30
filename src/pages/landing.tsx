import {
  Box,
  CircularProgress,
  Collapse,
  Grow,
  Link,
  Slide,
  Typography,
} from "@mui/material";
import DescriptionBox from "../components/descriptionBox";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

const Landing = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<number>(0);

  const loadPage = () => {
    setShowInfo(true);
    Cookies.set("loaded", "true", { expires: 1 });
  };

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
    <>
      <Box>
        <Collapse in={showInfo} timeout={800}>
          <Typography
            variant="h1"
            align="left"
            sx={{ marginTop: "10vh", fontWeight: "600" }}
          >
            Asad Mirza
          </Typography>
        </Collapse>
        <Slide in={showInfo} direction="left" timeout={800}>
          <Box
            sx={{
              marginTop: "10vh",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <Typography variant="h4" align="right">
              software engineer intern
            </Typography>
            <Typography variant="h4" align="right">
              computer science & teaching assistant @ university of toronto
            </Typography>
          </Box>
        </Slide>
        <Collapse in={showInfo} timeout={800}>
          <Typography variant="h5" align="left" sx={{ marginTop: "10vh" }}>
            <Link href="">Resume</Link> | <Link href="">LinkedIn</Link> |{" "}
            <Link href="">GitHub</Link>
          </Typography>
        </Collapse>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: showInfo ? "100%" : "600px",
            transition: "width 1s ease",
          }}
        >
          <Grow in timeout={300}>
            <DescriptionBox
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5vh",
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
                >
                  StackAdapt
                </Link>{" "}
                as a Software Engineering intern as well as various other
                programming internships. I also work as a Computer Science
                Teaching Assistant for UofT where I help students master
                computer science concepts, reflecting my leadership and
                communication skills in the process.
                <br></br>
                <br></br>
                I’m always excited to connect, share ideas, and collaborate,
                feel free to reach out anytime!
              </Typography>
            </DescriptionBox>
          </Grow>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
