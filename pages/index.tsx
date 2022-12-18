import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { ContactGeneral, Home, Intro, Services } from "../src/containers/index";
import { ContactForm } from "../src/components/index";

const Homepage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home | Nalette Consulting"
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
        <Home />
        <Services />
        <Intro />
        <ContactGeneral />
      </main>
    </>
  );
};

export default Homepage;
