import Layout from "@/components/layout";
import ULink from "@/components/unstyled-link";
import Image from "next/image";

function TeamSports() {
  return (
    <Layout breadcrumbs={[{ name: "Equipos", href: "/equipos/crear" }]}>
      <div className="flex flex-wrap justify-between">
        <ULink href="/equipos/crear/basket">
          <div className="mr-8">
            <Image
              src="/logo-basket.webp"
              alt="Basket"
              width={300}
              height={300}
              priority={true}
              loader={({ src, width, quality }) => {
                return `${src}?w=${width}&q=${quality || 75}`;
              }}
            />
          </div>
        </ULink>
        <ULink href="/equipos/crear/futbol 7">
          <div className="mr-8">
            <Image
              src="/logo-f7.webp"
              alt="Futbol 7"
              width={300}
              height={300}
              priority={true}
              loader={({ src, width, quality }) => {
                return `${src}?w=${width}&q=${quality || 75}`;
              }}
            />
          </div>
        </ULink>
        <ULink href="/equipos/crear/futbol 11">
          <div className="mr-8">
            <Image
              src="/logo-f11.webp"
              alt="Futbol 11"
              width={300}
              height={300}
              priority={true}
              loader={({ src, width, quality }) => {
                return `${src}?w=${width}&q=${quality || 75}`;
              }}
            />
          </div>
        </ULink>
      </div>
    </Layout>
  );
}

export default TeamSports;
