import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

// Constants
const TABLE_HEAD = [
  "Transaction",
  "Name",
  "Amount",
  "Date",
  "Status",
  "Account",
  "",
];
const ROWS_PER_PAGE = 5; // Display only 5 rows per page

// Updated TABLE_ROWS with 'name_person' for each transaction
const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    name_person: "John Doe",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    name_person: "Jane Smith",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    name_person: "Alice Johnson",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    name_person: "Michael Brown",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    name_person: "Emily Davis",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    name_person: "Emily Davis",
    amount: "$9,000",
    date: "Fri 6:30pm",
    status: "paid",
    account: "master-card",
    accountNumber: "5678",
    expiry: "04/2025",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    name_person: "Emily Davis",
    amount: "$3,200",
    date: "Sun 8:15am",
    status: "pending",
    account: "visa",
    accountNumber: "4321",
    expiry: "11/2027",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    name_person: "John Doe",
    amount: "$7,800",
    date: "Mon 2:45pm",
    status: "paid",
    account: "master-card",
    accountNumber: "8765",
    expiry: "12/2028",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    name_person: "Jane Smith",
    amount: "$5,600",
    date: "Thu 9:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "9090",
    expiry: "10/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    name_person: "Alice Johnson",
    amount: "$11,000",
    date: "Tue 11:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "9999",
    expiry: "09/2029",
  },
];

export function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate total pages
  const totalPages = Math.ceil(TABLE_ROWS.length / ROWS_PER_PAGE);

  // Filtered rows based on searchTerm
  const filteredRows = TABLE_ROWS.filter((row) =>
    row.name_person.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the rows for the current page
  const currentRows = filteredRows.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  // Handle pagination
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search by Name"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index}>
                <td className="p-4 flex items-center gap-3">
                  <Avatar src={row.img} alt={row.name} size="md" />
                  <Typography variant="small" className="font-bold">
                    {row.name}
                  </Typography>
                </td>
                <td className="p-4">{row.name_person}</td>
                <td className="p-4">{row.amount}</td>
                <td className="p-4">{row.date}</td>
                <td className="p-4">
                  <Chip
                    size="sm"
                    variant="ghost"
                    value={row.status}
                    color={
                      row.status === "paid"
                        ? "green"
                        : row.status === "pending"
                        ? "amber"
                        : "red"
                    }
                  />
                </td>
                <td className="p-4">
                  {row.account} {row.accountNumber}
                </td>
                <td className="p-4">
                  <Tooltip content="Edit Transaction">
                    <IconButton variant="text">
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <IconButton
              key={i}
              variant={currentPage === i + 1 ? "outlined" : "text"}
              size="sm"
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
