import { navLinks } from "@/components/nav-links";
import { NavLink, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";
import LogoutButton from "./logout-button";
import ULink from "./unstyled-link";

type Props = {
  breadcrumbs?: string[];
  children: ReactNode;
};

export default function Layout({ breadcrumbs, children }: Props) {
  return (
    <div className="grid h-screen grid-cols-[min-content_auto] grid-rows-[min-content_auto]">
      <header className="col-span-2 flex items-center justify-between gap-2 border-0 border-b-2 border-solid border-gray-200 p-4">
        <span className="flex items-center gap-2">
          <ULink href="/">
            <Title order={2}>Club 12</Title>
          </ULink>
          {breadcrumbs
            ? breadcrumbs.map((breadcrumb) => (
                <span key={breadcrumb} className="flex items-center gap-1">
                  <IconChevronRight />
                  <ULink href={`/${breadcrumb.toLowerCase()}`}>
                    <Title order={4}>{breadcrumb}</Title>
                  </ULink>
                </span>
              ))
            : null}
        </span>
        <LogoutButton />
      </header>
      <aside className="col-span-1 flex flex-col items-center justify-between border-0 border-r-2 border-solid border-gray-200">
        <nav className="w-full">
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.label}
              label={navLink.label}
              icon={navLink.icon}
              classNames={{
                root: "p-4",
                icon: "mr-2",
              }}
            >
              {navLink.actions.map((action) => (
                <NavLink
                  key={action.label}
                  component={Link}
                  href={action.path}
                  label={action.label}
                />
              ))}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="col-span-1 mx-3 my-2 grid items-start justify-items-center">
        {children}
      </main>
    </div>
  );
}
