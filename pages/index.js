import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";

import Contact from "../components/contact";
import ProgramSection from "../components/programSection";

const Home = () => {
  return (
    <>
      {/* <Head>
      <meta name="description" content="Discover a new world of opportunities with our study abroad programs in Georgia. Explore a rich culture, diverse landscape, and affordable tuition fees. Apply now and expand your horizons!" />
  <title>Study Abroad in Georgia - Your Ticket to a World of Possibilities</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar /> */}
      <Hero />
   <ProgramSection/>
    
      
       <SectionTitle
        id = 'whygeorgia'
        pretitle="Georgia Benefits"
        title=" Why should you study in Georgia (Country)">
Georgia is a captivating country in Europe.With excellent academic institutions and a vibrant culture, it's a top choice for international students.
      </SectionTitle> 
      <Benefits  data={benefitOne} />
      <SectionTitle
      id = 'services'
        pretitle="Our Services"
        title=" Why should you trust us?">
      </SectionTitle> 
     <Benefits   imgPos="right" data={benefitTwo} />  
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how we fulfill your needs">
        This is demo video of how our agency helps you achieve your dreams.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
   These are testimonials of people who have tested and trusted EasyAd Consult
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Here are some answers to your possible questions
      </SectionTitle>
      <Faq />
      <Contact/>
      {/* <Footer /> */}
      
    </>
  );
}

export default Home;