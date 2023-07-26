import { ReactNode } from "react";
import Link from "next/link";
import { createStyles } from "@mantine/core";

type Props = {
  href: string;
  children: ReactNode;
};

export default function ULink({ href, children }: Props) {
  const { classes } = useClasses();
  return (
    <Link href={href} className={classes.link}>
      {children}
    </Link>
  );
}

const useClasses = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
