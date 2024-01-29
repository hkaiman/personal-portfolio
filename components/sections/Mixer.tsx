"use client";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Divider} from "@nextui-org/divider";
import { title, subtitle, description } from "@/components/primitives";

const Mixer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <Card className="max-w-[1000px] w-full">
        <CardHeader className="pb-0 pt-6 px-6 flex-col lg:flex-row md:flex-row sm:flex-col items-start gap-6">
          <div className="flex-col items-start w-auto lg:w-1/2 md:w-1/2 sm:w-auto">
            <div>
              <h4 className={title({ size: "md" })}>I build,</h4>
            </div>
            <div className="mb-5 mt-2">
              <h1 className={title({ size: "md" })}>a lot</h1>
            </div>
            <div>
              <small className="text-default-500 text-large">
                Web apps, mobile apps, and a lot of experiments
              </small>
            </div>
            <div className="mt-10">
              <Button color="primary" variant="ghost">
                <Link
                  href="/projects"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  See my work
                </Link>
              </Button>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className="mt-5 flex-col items-start w-auto lg:w-1/2 md:w-1/2 sm:w-auto lg:mt-0 md:mt-0">
            <div>
              <h4 className={title({ size: "md" })}>I write,</h4>
            </div>
            <div className="mb-5 mt-2">
              <h1 className={title({ size: "md" })}>a bit</h1>
            </div>
            <div>
              <small className="text-default-500 text-large">
                A bit of everything, from binary to infinity
              </small>
            </div>
            <div className="mt-10">
              <Button color="primary" variant="ghost">
                <Link
                  href="/blog"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Read my stuffs
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-visible py-4"></CardBody>
      </Card>
    </section>
  );
};

export default Mixer;
