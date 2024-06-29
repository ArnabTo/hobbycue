import AddOwn from "@/components/Add/AddOwn";
import Community from "@/components/Community/Community";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Hero/Landing";
import NavBar from "@/components/Nav/NavBar";
import Service from "@/components/Services/Service";
import Testimoni from "@/components/Testimonial/Testimoni";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Landing/>
      <Service/>
      <AddOwn/>
      <Testimoni/>
      <Community/>
      <Footer/>
    </main>
  );
}
