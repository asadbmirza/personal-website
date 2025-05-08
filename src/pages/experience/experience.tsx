import { Box, Grow, Slide, Typography } from "@mui/material";
import { useState } from "react";
import DescriptionBox from "../../components/description-box";
import { experienceItems } from "./experience_items";

type Image = {
  src: string;
  width: number | string;
  height: number | string;
};

type ExperienceBarProps = {
  experienceItems: Array<{
    name: string;
    description: string;
    image?: Image;
    dateRange: string;
  }>;
};

const TIMEOUT_DURATION = 800;
const SHOW_ANIMATION = true;

const ExperienceBar = ({ experienceItems }: ExperienceBarProps) => {
  const [barHeight, setBarHeight] = useState<number>(100);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsLength = experienceItems.length - 1;

  const ITEM_GAP = 10;

  const onBarItemClick = (index: number) => {
    setBarHeight(((itemsLength - index) / itemsLength) * 100);
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Slide in={SHOW_ANIMATION} timeout={TIMEOUT_DURATION} direction="right">
        <Box
          sx={{
            display: "flex",
            width: 220,
            flexDirection: "column",
            gap: ITEM_GAP,
          }}
        >
          {experienceItems.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
              onClick={() => onBarItemClick(index)}
            >
              <Box sx={{ width: 24 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: (theme) => theme.palette.text.secondary,
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    color: "text.primary",
                  }}
                >
                  {item.dateRange}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    cursor: "pointer",
                    color:
                      currentIndex === index
                        ? "text.secondary"
                        : "text.primary",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Slide>
      <Slide in={SHOW_ANIMATION} timeout={TIMEOUT_DURATION} direction="right">
        <Box
          sx={{
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            padding: "3px",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              width: 5,
              height: `${barHeight}%`,
              backgroundImage: (theme) =>
                `linear-gradient(to top, white, ${theme.palette.text.secondary})`,
              alignSelf: "flex-end",
              transition: "height 0.3s ease-in-out",
            }}
          />
        </Box>
      </Slide>
      <Slide in={SHOW_ANIMATION} timeout={TIMEOUT_DURATION} direction="left">
        <DescriptionBox
          sx={{
            flexBasis: 300,
            flexGrow: 1,
            opacity: 0.9,
            backgroundColor: (theme) => theme.palette.secondary.main,
            height: "fit-content",
            position: "sticky",
            top: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {experienceItems[currentIndex].description}
          </Typography>
          {experienceItems[currentIndex].image && (
            <Box
              component="img"
              src={experienceItems[currentIndex].image.src}
              width={experienceItems[currentIndex].image.width}
              height={experienceItems[currentIndex].image.height}
            />
          )}
        </DescriptionBox>
      </Slide>
    </Box>
  );
};

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 200px",
        gap: 6,
      }}
    >
      <Grow in={SHOW_ANIMATION} timeout={TIMEOUT_DURATION}>
        <Typography
          sx={{ color: (theme) => theme.palette.text.primary, fontWeight: 600 }}
          variant="h2"
        >
          Experience Timeline
        </Typography>
      </Grow>
      <Box sx={{ display: "flex", alignSelf: "flex-start" }}>
        <ExperienceBar experienceItems={experienceItems} />
      </Box>
    </Box>
  );
};

export default Experience;
