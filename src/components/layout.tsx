import { navLinks } from "@/components/nav-links";
import { Image, NavLink, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import NextImage from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import logoClub12 from "../../public/logo-club12.webp";
import LogoutButton from "./logout-button";
import ULink from "./unstyled-link";

interface Breadcrumb {
  name: string;
  href: string;
}

interface Props {
  breadcrumbs?: Breadcrumb[];
  children: ReactNode;
}

export default function Layout({ breadcrumbs, children }: Props) {
  return (
    <>
      <header className="col-span-2 flex items-center justify-between gap-2 border-0 border-b-2 border-solid border-gray-200 p-4">
        <span className="flex items-center gap-2">
          <ULink href="/">
            <div className="flex items-center gap-2">
              <Image
                component={NextImage}
                radius="md"
                h={60}
                w="auto"
                fit="contain"
                src={logoClub12}
                alt="logo club 12"
              />
              <Title order={2} className="text-xl font-bold">
                Club 12
              </Title>
            </div>
          </ULink>
          {breadcrumbs
            ? breadcrumbs.map((breadcrumb) => {
                return (
                  <span
                    key={breadcrumb.name}
                    className="flex items-center gap-1"
                  >
                    <IconChevronRight />
                    <ULink href={breadcrumb.href}>
                      <Title order={4}>{breadcrumb.name}</Title>
                    </ULink>
                  </span>
                );
              })
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
              leftSection={navLink.icon}
              classNames={{
                root: "p-4",
                section: "mr-2",
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
      <main className="col-span-1 mx-3 my-2 flex flex-col items-start justify-start">
        {children}
      </main>
    </>
  );
}
