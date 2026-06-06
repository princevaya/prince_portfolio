"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Terminal } from "@/components/ui/Terminal";
import Image from "next/image";
import { fadeUp, stagger } from "@/animations/motion";

const TITLES = [
  "Cloud Engineer",
  "DevOps Engineer",
  "AWS Enthusiast",
  "Infrastructure Builder",
  "Automation Learner",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((value) => (value + 1) % TITLES.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen flex-col justify-center gap-10 px-4 pb-16 pt-28 sm:gap-16 sm:px-6 sm:pb-20 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-24 h-2 w-2 animate-float rounded-full bg-cyan-300/70" />
        <div className="absolute right-24 top-40 h-3 w-3 animate-float rounded-full bg-sky-300/60" />
        <div className="absolute left-1/3 top-2/3 h-2 w-2 animate-float rounded-full bg-fuchsia-400/50" />
        <div className="absolute inset-x-0 top-10 h-40 bg-gradient-to-b from-cyan-400/10 to-transparent" />
      </div>
      <motion.div
        className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col gap-6 sm:gap-8" variants={fadeUp}>
          
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Prince Vaya
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-200/90 sm:text-lg md:text-2xl">
            <span className="text-white/60">Role</span>
            <span className="h-px w-8 bg-cyan-400/50" />
            <span className="text-cyan-200">{TITLES[titleIndex]}</span>
          </div>
          <p className="max-w-xl text-sm text-white/70 sm:text-base md:text-lg">
            Passionate about Cloud, DevOps, Automation and building scalable
            systems.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button href="#projects" className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
              Contact Me
            </Button>
            <Button href="https://drive.google.com/file/d/1cXvph7m2UjwaB8xJfkNcnm5HJm4J_Cq2/view?usp=drive_link" variant="outline" className="w-full sm:w-auto">
              Download Resume
            </Button>
          </div>
        </motion.div>

        <motion.div className="flex flex-col gap-6" variants={fadeUp}>
          <div className="relative flex justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-cyan-400/30 bg-white/5 shadow-[0_25px_80px_rgba(12,24,44,0.45)] backdrop-blur-2xl sm:h-72 sm:w-72 md:h-96 md:w-96">
              <Image
                src="/profile.jpeg"
                alt="Profile portrait"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="pointer-events-none absolute -right-8 top-6 h-28 w-28 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-lg" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Terminal />
      </motion.div>
    </section>
  );
}
