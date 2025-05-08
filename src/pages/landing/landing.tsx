import Cookies from "js-cookie";
import Info from "./info";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

const Landing = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const onLoad = () => {
    if (Cookies.get("loaded")) {
      setLoaded(true);
    }
  };
  useEffect(() => {
    onLoad();
  }, [loaded]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20vh" }}>
      <Info onLoad={onLoad} />
    </Box>
  );
};

export default Landing;
