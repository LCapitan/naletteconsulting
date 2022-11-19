import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { Home } from "../src/containers/index";

const Homepage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home | Austin Melendez"
        description="Austin is a developer and designer from Virginia, US."
        defaultTitle="Welcome to Austin's Portfolio"
        canonical="https://www.amelen.dev/"
        openGraph={{
          url: "https://www.amelen.dev/",
          title: "Austin's Portfolio",
          description: "Austin is a developer and designer from Virginia, US.",
          images: [
            {
              url: "https://res.cloudinary.com/austinmel/image/upload/v1656678415/astro_iie61u.jpg",
            },
          ],
          site_name: "Austin Melendez",
        }}
      />

      <main className="container">
        <Home />
      </main>
    </>
  );
};

export default Homepage;
