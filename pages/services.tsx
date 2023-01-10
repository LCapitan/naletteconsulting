import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { ServicesContent } from "../src/containers/index";

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Services | Nalette Consulting"
        description="Professional CPA from Virginia, US."
        defaultTitle="Welcome to Austin's Portfolio"
        canonical="https://www.naletteconsulting.com/"
        openGraph={{
          url: "https://www.naletteconsulting.com/",
          title: "Nalette Consulting",
          description: "Professional CPA from Virginia, US.",
          images: [
            {
              url: "https://res.cloudinary.com/austinmel/image/upload/v1668845074/naletteconsulting/og-image.png",
            },
          ],
          site_name: "Nalette Consulting",
        }}
      />

      <main className="container">
        <ServicesContent />
      </main>
    </>
  );
};

export default AboutPage;
