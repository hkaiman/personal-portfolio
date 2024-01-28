"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle, description } from "@/components/primitives";
import { GithubIcon, EmailIcon, DocumentIcon } from "@/components/icons";
import { TypingCodeSnippet } from "@/components/typing-snippet";
import { Avatar } from "@nextui-org/avatar";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3">
      <div className="flex gap-3 items-center">
        <Avatar
          src="/img/avatar.png"
          // src="https://drive.google.com/thumbnail?id=1g5BGJKUtnBPnJuHvtOMgU4BPHQW2gvjW"
          className="w-40 h-40 text-large"
        />
      </div>
      <div className="flex items-center inline-block max-w-lg text-center justify-center mt-4">
        <h1 className="text-2xl lg:text-7xl font-bold font-sans">Haikal Aiman</h1>
      </div>

      <div className="flex items-center justify-center gap-3 py-5">
      {/* <Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link> */}
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.email}
        >
          <EmailIcon size={20} />
          Email
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.resume}
        >
          <DocumentIcon size={20} />
          Resume
        </Link>
      </div>

      <div className="inline-block text-center justify-center">
        <h2 className={description()}>Hi</h2>
        <h2 className={description()}>&#x1F44B;, </h2>
        <h2 className={description()}>
          I am a 23 years old student based in Penang, Malaysia.
        </h2>
        <h2 className={description()}>
          &nbsp;Currently studying Software Engineering at Universiti Malaysia
          Terengganu.
        </h2>
      </div>

      <div className="mt-4 mb-10 inline-block text-center justify-center">
        {/* <Snippet hideSymbol hideCopyButton variant="flat"> */}
        <span className="text-center">
          I love exploring{" "}
          <Code color="primary">
            <TypingCodeSnippet text="web development" />
          </Code>{" "}
          and{" "}
          <Code color="primary">
            <TypingCodeSnippet text="mobile development" />
          </Code>
        </span>
        {/* </Snippet> */}
      </div>
    </section>
  );
};

export default About;
