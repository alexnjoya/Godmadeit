import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle || "Blai - Custom Software Development & Consulting"}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Blai is a worldwide custom software development and consulting company based in Accra, Ghana. We deliver world-class software solutions with the highest ethical standards." />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
