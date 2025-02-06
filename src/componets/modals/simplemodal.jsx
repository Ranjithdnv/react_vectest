import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="!px-6 !py-3 !rounded-lg  !shadow-2xl"
      >
        Open Modal
      </Button>

      <Dialog
        open={open}
        handler={handleOpen} //Yes, but then you must handle closing manually using open={open} only:
        //However, you'll lose built-in close functionality (like clicking outside to close).
        className="p-4 md:p-6 rounded-xl shadow-2xl"
      >
        <DialogHeader className="text-lg font-semibold p-4 md:p-6">
          It's a Simple Modal
        </DialogHeader>

        <DialogBody className="p-4 md:p-6 text-gray-700 leading-relaxed">
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty-five years to get these plants, twenty-five years of
          blood, sweat, and tears, and I'm never giving up, I'm just getting
          started. I'm up to something. Fan luv.
        </DialogBody>

        <DialogFooter className="flex justify-end gap-3 p-4 md:p-6">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="px-4 py-2 rounded-md"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleOpen}
            className="px-5 py-2 rounded-md shadow-md"
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
