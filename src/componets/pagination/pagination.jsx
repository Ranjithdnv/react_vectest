import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function CircularPagination({ totalPages = 10 }) {
  const [active, setActive] = React.useState(1);

  // Function to determine visible page numbers dynamically
  const getPageNumbers = () => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (active <= 3) return [1, 2, 3, 4, 5];
    if (active >= totalPages - 2)
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];

    return [active - 2, active - 1, active, active + 1, active + 2];
  };

  const next = () => {
    setActive((prev) => (prev === totalPages ? 1 : prev + 1)); // Circular
  };

  const prev = () => {
    setActive((prev) => (prev === 1 ? totalPages : prev - 1)); // Circular
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>

      <div className="flex items-center gap-2">
        {getPageNumbers().map((num) => (
          <IconButton
            key={num}
            variant={active === num ? "filled" : "text"}
            color="gray"
            onClick={() => setActive(num)}
            className="rounded-full"
          >
            {num}
          </IconButton>
        ))}
      </div>

      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
