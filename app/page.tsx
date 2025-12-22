"use client";

import { useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useComicEffects } from "@/hooks/useComicEffects";

import CharacterFile from "@/components/comic/CharacterFile";
import StoryArcs from "@/components/comic/StoryArcs";
import SkillArsenal from "@/components/comic/SkillArsenal";
import TransmitSignal from "@/components/comic/TransmitSignal";
import { PanelDivider } from "@/components/comic/PanelDivider";


export default function Home() {
  useComicEffects();

  return (
    <main id="content-scroll">
      <CharacterFile />
      <PanelDivider text="NEXT PANEL..." />
      <StoryArcs />
      <PanelDivider text="POWERING UP..." dark />
      <SkillArsenal />
      <TransmitSignal />
    </main>
  );
}
