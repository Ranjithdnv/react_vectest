import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

const menuItems = [
  { name: "Dashboard", icon: "home" },
  { name: "Analytics", icon: "chart-bar", chip: "5" },
  { name: "Sales", icon: "shopping-cart", chip: "3" },
  { name: "Profile", icon: "user" },
  { name: "Tables", icon: "table" },
];

const documentationItems = [
  { name: "Docs", icon: "book-open" },
  { name: "API Reference", icon: "code" },
];

export function DrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Button className="p-2 rounded" onClick={openDrawer}>
        Open Drawer
      </Button>
      <Drawer
        placement="left"
        className="h-screen"
        open={open}
        onClose={closeDrawer}
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemPrefix>
                <svg className="h-5 w-5" fill="currentColor">
                  <use href={`#${item.icon}`} />
                </svg>
              </ListItemPrefix>
              {item.name}
              {item.chip && (
                <ListItemSuffix>
                  <Chip
                    value={item.chip}
                    size="sm"
                    color="green"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              )}
            </ListItem>
          ))}
        </List>
        <List>
          {documentationItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemPrefix>
                <svg className="h-5 w-5" fill="currentColor">
                  <use href={`#${item.icon}`} />
                </svg>
              </ListItemPrefix>
              {item.name}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
