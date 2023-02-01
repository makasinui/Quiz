import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const navItems = [
  { name: "Главная", link: "/" },
  { name: "Создать опросник", link: "/createquiz" },
];
export const Header: React.FunctionComponent = () => (
  <AppBar component="nav">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        asd
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        Опросники
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <Button href={item.link} key={item.name} sx={{ color: "#fff" }}>
            {item.name}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);
