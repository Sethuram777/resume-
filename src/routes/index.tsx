import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Contact,
  Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sethuram AL — Aspiring Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sethuram AL — Computer Science Engineering student, Java developer, and problem solver building real-world software.",
      },
      { property: "og:title", content: "Sethuram AL — Aspiring Software Developer" },
      {
        property: "og:description",
        content:
          "CSE student passionate about Java, Data Structures & Algorithms, and Full Stack Development.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
