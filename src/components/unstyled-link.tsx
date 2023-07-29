import { ReactNode } from "react";
import Link from "next/link";
import { createStyles } from "@mantine/core";

type Props = {
  href: string;
  children: ReactNode;
  withUnderline?: boolean;
};

export default function ULink({ href, withUnderline = true, children }: Props) {
  const { classes } = useClasses();
  return (
    <Link
      href={href}
      className={`${classes.link} ${
        withUnderline ? classes.withUnderline : ""
      }`}
    >
      {children}
    </Link>
  );
}

const useClasses = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  withUnderline: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
