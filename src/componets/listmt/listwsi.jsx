import React from "react";
import { List, ListItem, Card } from "@material-tailwind/react";

export function ListWithSelectedItem() {
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);

  // List items
  const items = [
    { id: 1, label: "Inbox" },
    { id: 2, label: "Trash" },
    { id: 3, label: "Settings" },
  ];

  return (
    <Card className="w-72">
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            selected={selected === item.id}
            onClick={() => setSelectedItem(item.id)}
            className="cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
