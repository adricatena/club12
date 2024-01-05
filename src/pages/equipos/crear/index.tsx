/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import Link from "next/link";
import logoBasketFem from "../../../../public/logo-basket-fem.webp";
import logoBasket from "../../../../public/logo-basket.webp";
import logoF11 from "../../../../public/logo-f11.webp";
import logoF7 from "../../../../public/logo-f7.webp";

const SPORTS_LINKS: { href: string; imgSrc: string; alt: string }[] = [
  {
    href: "/equipos/crear/basket",
    imgSrc: logoBasket.src,
    alt: "Logo basket",
  },
  {
    href: "/equipos/crear/basket femenino",
    imgSrc: logoBasketFem.src,
    alt: "Logo basket femenino",
  },
  {
    href: "/equipos/crear/futbol 7",
    imgSrc: logoF7.src,
    alt: "Logo futbol 7",
  },
  {
    href: "/equipos/crear/futbol 11",
    imgSrc: logoF11.src,
    alt: "Logo futbol 11",
  },
];

function TeamSports() {
  return (
    <Layout breadcrumbs={[{ name: "Equipos", href: "/equipos/crear" }]}>
      <div className="flex h-full w-full  items-center justify-between">
        {SPORTS_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="grid place-items-center"
          >
            <img
              alt={link.alt}
              src={link.imgSrc}
              className="w-48 rounded-full"
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default TeamSports;
