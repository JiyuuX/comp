import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";

import Testimonials from "../components/ui/Testimonials";
import Industries from "../components/ui/Industries";
import About from "../components/ui/About";

import FooterCTA from "../components/ui/FooterCTA";
export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <About />
        <CTA />
      </GradientWrapper>
      <Industries />
      <GradientWrapper>
      <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
