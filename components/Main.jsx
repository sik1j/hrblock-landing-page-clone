import Blog from "./main/Blog";
import Calculator from "./main/Calculator";
import CTADivider from "./main/CTADivider";
import Features from "./main/Features";
import Hero from "./main/Hero";
import MailingList from "./main/MailingList";
import Footer from "./main/Footer";

export default function Main() {
  return (
    <>
      <Hero />
      <Features />
      <CTADivider />
      <Calculator />
      <Blog />
      <MailingList />
      <Footer />
    </>
  );
}
