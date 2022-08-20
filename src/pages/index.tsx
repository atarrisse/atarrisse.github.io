import React from "react";

import Footer from "@/components/Footer/Footer";
import Head from "@/components/Head/Head";
import Header from "@/components/Header/Header";
import Language from "@/components/Section/Language/Language";
import Section from "@/components/Section/Section";

import education from "@/data/education";
import internship from "@/data/internship";
import languages from "@/data/languages";
import projects from "@/data/projects";
import work from "@/data/work";

import { parseJobExperience, parseEducationExperience } from "@/utils";

export default function Home() {
  return (
    <div>
      <Head />

      <main>
        <Header />
        <Section sectionTitle="Work" items={work.map(parseJobExperience)} />
        <Section sectionTitle="Internship" items={internship.map(parseJobExperience)} />
        <Section sectionTitle="Other Projects" items={projects.map(parseJobExperience)} />
        <Section sectionTitle="Education" items={education.map(parseEducationExperience)} />
        <Language sectionTitle="Languages" items={languages} />
      </main>

      <Footer />
    </div>
  );
}
