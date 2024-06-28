import { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import FlexBetween from "@/components/FlexBetween";
import NavbarItem from "./NavbarItem";

const items: { to: string; item: string }[] = [
  { to: "/", item: "Dashboard" },
  { to: "/predictions", item: "Predictions" },
];

const Navbar: React.FC = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE WITH LOGO AND NAME*/}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>
      {/* RIGHT SIDE WITH TWO MENU ITEMS */}
      <FlexBetween gap="2rem">
        {items.map((item) => (
          <NavbarItem
            key={item.item}
            to={item.to}
            item={item.item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
