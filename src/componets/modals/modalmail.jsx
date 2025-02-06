import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";

export function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] p-4">
          {/* p-4          is main in this type of       card */}
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to sign in.
            </Typography>

            {/* Email Field */}
            <div className="flex flex-col">
              <Typography className="mb-1 ml-2" variant="h6">
                Your Email
              </Typography>
              <input
                className="w-full p-2 border-2 border-blue-400 rounded outline-orange-500"
                placeholder="Enter your email"
                type="email"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <Typography className="mb-1 ml-2" variant="h6">
                Your Password
              </Typography>
              <input
                className="w-full p-2 border-2 border-blue-400 rounded outline-orange-500"
                placeholder="Enter your password"
                type="password"
              />
            </div>

            <div className="flex items-center ml-2">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
