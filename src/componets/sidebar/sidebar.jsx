// import React from "react";
// import {
//   IconButton,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   Input,
//   Drawer,
//   Card,
// } from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";
// import {
//   ChevronRightIcon,
//   ChevronDownIcon,
//   MagnifyingGlassIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// export function SidebarWithBurgerMenu() {
//   const [open, setOpen] = React.useState(0);
//   const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };

//   const openDrawer = () => setIsDrawerOpen(true);
//   const closeDrawer = () => setIsDrawerOpen(false);

//   return (
//     <>
//       {/* Burger Menu Button */}
//       <IconButton variant="text" size="lg" onClick={openDrawer}>
//         {isDrawerOpen ? (
//           <XMarkIcon className="h-8 w-8 stroke-2" />
//         ) : (
//           <Bars3Icon className="h-8 w-8 stroke-2" />
//         )}
//       </IconButton>

//       {/* Sidebar Drawer */}
//       <Drawer open={isDrawerOpen} onClose={closeDrawer}>
//         <Card
//           color="transparent"
//           shadow={false}
//           className="h-screen w-full flex flex-col overflow-hidden"
//         >
//           {/* Sidebar Header */}
//           <div className="flex items-center justify-between p-4 border-b bg-white">
//             <div className="flex items-center gap-4">
//               <img
//                 src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
//                 alt="brand"
//                 className="h-8 w-8"
//               />
//               <Typography variant="h5" color="blue-gray">
//                 Sidebar
//               </Typography>
//             </div>
//             <IconButton variant="text" onClick={closeDrawer}>
//               <XMarkIcon className="h-6 w-6" />
//             </IconButton>
//           </div>

//           {/* Full Scrollable Content */}
//           <div className="flex-1 overflow-y-auto">
//             {/* Search Box */}
//             <div className="p-3 border-b bg-white">
//               <Input
//                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                 label="Search"
//               />
//             </div>

//             {/* Sidebar Menu */}
//             <List>
//               {/* Dashboard Section */}
//               <Accordion
//                 open={open === 1}
//                 icon={
//                   <ChevronDownIcon
//                     strokeWidth={2.5}
//                     className={`h-4 w-4 transition-transform ${
//                       open === 1 ? "rotate-180" : ""
//                     }`}
//                   />
//                 }
//               >
//                 <ListItem className="p-0" selected={open === 1}>
//                   <AccordionHeader
//                     onClick={() => handleOpen(1)}
//                     className="border-b-0 p-3"
//                   >
//                     <ListItemPrefix>
//                       <PresentationChartBarIcon className="h-5 w-5" />
//                     </ListItemPrefix>
//                     <Typography className="mr-auto font-normal">
//                       Dashboard
//                     </Typography>
//                   </AccordionHeader>
//                 </ListItem>
//                 <AccordionBody className="py-1">
//                   <List className="p-0">
//                     <ListItem>
//                       <ListItemPrefix>
//                         <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                       </ListItemPrefix>
//                       Analytics
//                     </ListItem>
//                     <ListItem>
//                       <ListItemPrefix>
//                         <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                       </ListItemPrefix>
//                       Reporting
//                     </ListItem>
//                     <ListItem>
//                       <ListItemPrefix>
//                         <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                       </ListItemPrefix>
//                       Projects
//                     </ListItem>
//                   </List>
//                 </AccordionBody>
//               </Accordion>

//               {/* E-Commerce Section */}
//               <Accordion
//                 open={open === 2}
//                 icon={
//                   <ChevronDownIcon
//                     strokeWidth={2.5}
//                     className={`h-4 w-4 transition-transform ${
//                       open === 2 ? "rotate-180" : ""
//                     }`}
//                   />
//                 }
//               >
//                 <ListItem className="p-0" selected={open === 2}>
//                   <AccordionHeader
//                     onClick={() => handleOpen(2)}
//                     className="border-b-0 p-3"
//                   >
//                     <ListItemPrefix>
//                       <ShoppingBagIcon className="h-5 w-5" />
//                     </ListItemPrefix>
//                     <Typography className="mr-auto font-normal">
//                       E-Commerce
//                     </Typography>
//                   </AccordionHeader>
//                 </ListItem>
//                 <AccordionBody className="py-1">
//                   <List className="p-0">
//                     <ListItem>
//                       <ListItemPrefix>
//                         <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                       </ListItemPrefix>
//                       Orders
//                     </ListItem>
//                     <ListItem>
//                       <ListItemPrefix>
//                         <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                       </ListItemPrefix>
//                       Products
//                     </ListItem>
//                   </List>
//                 </AccordionBody>
//               </Accordion>

//               {/* Other Menu Items */}
//               <hr className="my-2 border-blue-gray-50" />
//               <ListItem>
//                 <ListItemPrefix>
//                   <InboxIcon className="h-5 w-5" />
//                 </ListItemPrefix>
//                 Inbox
//                 <ListItemSuffix>
//                   <Chip
//                     value="14"
//                     size="sm"
//                     variant="ghost"
//                     color="blue-gray"
//                     className="rounded-full"
//                   />
//                 </ListItemSuffix>
//               </ListItem>
//               <ListItem>
//                 <ListItemPrefix>
//                   <UserCircleIcon className="h-5 w-5" />
//                 </ListItemPrefix>
//                 Profile
//               </ListItem>
//               <ListItem>
//                 <ListItemPrefix>
//                   <Cog6ToothIcon className="h-5 w-5" />
//                 </ListItemPrefix>
//                 Settings
//               </ListItem>
//               <ListItem>
//                 <ListItemPrefix>
//                   <PowerIcon className="h-5 w-5" />
//                 </ListItemPrefix>
//                 Log Out
//               </ListItem>
//             </List>

//             {/* Sidebar Footer (Now Scrollable) */}
//             <div className="p-4 border-t bg-white">
//               <Typography variant="small" className="text-center">
//                 © 2025 My App. All rights reserved.
//               </Typography>
//             </div>
//           </div>
//         </Card>
//       </Drawer>
//     </>
//   );
// }

import React, { useState } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Menu items (including nested ones)
  const menuItems = [
    {
      title: "Dashboard",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      id: 1,
      subItems: ["Analytics", "Reporting", "Projects"],
    },
    {
      title: "E-Commerce",
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      id: 2,
      subItems: ["Orders", "Products"],
    },
    {
      title: "Inbox",
      icon: <InboxIcon className="h-5 w-5" />,
      badge: "14",
    },
    {
      title: "Profile",
      icon: <UserCircleIcon className="h-5 w-5" />,
    },
    {
      title: "Settings",
      icon: <Cog6ToothIcon className="h-5 w-5" />,
    },
    {
      title: "Log Out",
      icon: <PowerIcon className="h-5 w-5" />,
    },
  ];

  // Filter function for search
  const filterMenu = (items) => {
    return items
      .map((item) => {
        // Check if title matches or any subItem matches
        const matchTitle = item.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const filteredSubItems = item.subItems
          ? item.subItems.filter((sub) =>
              sub.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : [];

        if (matchTitle || filteredSubItems.length > 0) {
          return { ...item, subItems: filteredSubItems };
        }
        return null;
      })
      .filter(Boolean);
  };

  const filteredMenu = filterMenu(menuItems);

  return (
    <>
      {/* Burger Menu Button */}
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card className="h-screen w-full flex flex-col overflow-hidden">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <div className="flex items-center gap-4">
              <img
                src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                alt="brand"
                className="h-8 w-8"
              />
              <Typography variant="h5" color="blue-gray">
                Sidebar
              </Typography>
            </div>
            <IconButton variant="text" onClick={closeDrawer}>
              <XMarkIcon className="h-6 w-6" />
            </IconButton>
          </div>

          {/* Scrollable Sidebar Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Search Box */}
            <div className="p-3 border-b bg-white">
              <Input
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Sidebar Menu with Filtering */}
            <List>
              {filteredMenu.map((item) =>
                item.subItems ? (
                  <Accordion
                    key={item.id}
                    open={open === item.id}
                    icon={
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-4 w-4 transition-transform ${
                          open === item.id ? "rotate-180" : ""
                        }`}
                      />
                    }
                  >
                    <ListItem className="p-0" selected={open === item.id}>
                      <AccordionHeader
                        onClick={() => handleOpen(item.id)}
                        className="border-b-0 p-3"
                      >
                        <ListItemPrefix>{item.icon}</ListItemPrefix>
                        <Typography className="mr-auto font-normal">
                          {item.title}
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0">
                        {item.subItems.map((subItem) => (
                          <ListItem key={subItem}>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            {subItem}
                          </ListItem>
                        ))}
                      </List>
                    </AccordionBody>
                  </Accordion>
                ) : (
                  <ListItem key={item.title}>
                    <ListItemPrefix>{item.icon}</ListItemPrefix>
                    {item.title}
                    {item.badge && (
                      <ListItemSuffix>
                        <Chip
                          value={item.badge}
                          size="sm"
                          variant="ghost"
                          color="blue-gray"
                          className="rounded-full"
                        />
                      </ListItemSuffix>
                    )}
                  </ListItem>
                )
              )}
            </List>

            {/* Sidebar Footer */}
            <div className="p-4 border-t bg-white">
              <Typography variant="small" className="text-center">
                © 2025 My App. All rights reserved.
              </Typography>
            </div>
          </div>
        </Card>
      </Drawer>
    </>
  );
}
