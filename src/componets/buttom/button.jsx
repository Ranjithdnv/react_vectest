// import { ButtonGroup, Button } from "@material-tailwind/react";

// export function ButtonGroupCustomStyles() {
//   return (
//     <div className=" grid grid-cols-1 place-items-center">
//       <ButtonGroup className="gap-1  w-fit  flex flex-row flex-nowrap bg-blue-500/25 p-1">
//         <Button className="rounded-none !w-18">One</Button>
//         <Button className="rounded-none !w-18">Two</Button>
//         <Button className="rounded-none !w-18">Three</Button>
//       </ButtonGroup>
//     </div>
//   );
// }
import { Button } from "@material-tailwind/react";
import { Chip, Checkbox } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export function ButtonGroupCustomStyles() {
  return (
    <>
      {" "}
      <div className="flex justify-center  justify-items-center h-fit m-4">
        <div className="flex gap-2 bg-blue-500/25 p-2 rounded-lg">
          <Button className="rounded-none w-20 bg-green-500 text-white">
            One
          </Button>
          <Button className="rounded-none w-20 bg-orange-500 text-white">
            Two
          </Button>
          <Button className="rounded-none w-20 bg-blue-500 text-white">
            Three
          </Button>
        </div>
      </div>
      <div className="flex gap-4 ">
        <Chip
          className="px-4 py-1  gap-2 !w-32"
          color="green"
          value="Verified"
          icon={<CheckCircleIcon className="h-5 pr-2 w-5 text-white" />}
        />
        <Chip
          className="px-4 py-1  gap-2 !w-32"
          color="blue"
          value="Approved"
          icon={<CheckCircleIcon className="h-5 w-5   pr-2 text-white" />}
        />
        <Chip
          className="px-4 py-1  gap-2 !w-32"
          color="orange"
          value="Pending"
          icon={<CheckCircleIcon className="h-5 w-5 pr-2 text-white" />}
        />
      </div>
    </>
  );
}
