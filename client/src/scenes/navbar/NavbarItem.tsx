import { Link } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

interface NavbarItemProps {
  to: string;
  item: string;
  selected: string;
  setSelected: (k: string) => void;
}
const NavbarItem: React.FC<NavbarItemProps> = ({
  to,
  item,
  selected,
  setSelected,
}) => {
  const { palette } = useTheme();
  return (
    <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
      <Link
        to={to}
        onClick={() => setSelected(item)}
        style={{
          color: selected === item ? "inherit" : palette.grey[700],
          textDecoration: "inherit",
        }}
      >
        {item}
      </Link>
    </Box>
  );
};

export default NavbarItem;
