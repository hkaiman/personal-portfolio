import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Mixer from "@/components/sections/Mixer";
import { Container, Row, Col } from "react-bootstrap";


export default function Home() {
  return (
    <>
      <About />
      <Mixer />
      <Skills />
      <Projects />
    </>
  );
}
