import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  withUnderline?: boolean;
}

export default function ULink({ href, withUnderline = true, children }: Props) {
  return (
    <Link
      href={href}
      className={`text-inherit no-underline ${
        withUnderline ? "hover:underline" : ""
      }`}
    >
      {children}
    </Link>
  );
}
