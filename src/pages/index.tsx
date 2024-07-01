import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import DataUtilsCard from "./utils/NameDesk";
import AvailableUtils from "./utils/AvailableUtils";

import HeroAsset from "./asset/Capture.png";
import LaptopScreen from "./asset/laptopscreen.svg";
import MobileScreen from "./asset/PhoneDesign.svg";
import IdeaIcons from "./asset/Idea.svg";
import DesignIcons from "./asset/Design.svg";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "blue", size: "md" })}>
            beautiful&nbsp;
          </h1>
          <br />
          <h1 className={title()}>your website with our Platform.</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Beautiful and simple only at Whatever.
          </h2>
        </div>

        <section>
          <main className="mt-5">
            <img
              src={HeroAsset}
              alt=""
              className=" rounded-3xl lg:rounded-[45px]"
            />
          </main>
        </section>

        <div className="flex mt-10 gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}>
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
            })}
            href={siteConfig.links.github}>
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>

      <section>
        <main>
          <div className="flex mt-10 justify-center text-center mx-auto">
            <h1 className={title({ size: "sm" })}>
              <span>
                Modern features and Standardization <br /> will be
                maintained.
              </span>
            </h1>
          </div>
          <DataUtilsCard />
        </main>
      </section>

      <section>
        <main className="mt-24">
          <h1 className="text-center text-xl font-semibold">
            Available Components kit
          </h1>
          <div className="flex items-center gap-10 justify-around mt-12">
            <div title="forLeftFeature">
              <ul className="flex items-center">
                <img
                  src={LaptopScreen}
                  className="-rotate-6"
                  alt="laptop Screen"
                  width={440}
                />
                <img
                  className="-ml-14 mt-2"
                  src={MobileScreen}
                  alt="Mobile Screen"
                  width={120}
                />
              </ul>
              <li className="list-none"></li>
            </div>
            <AvailableUtils />
          </div>
        </main>
      </section>

      <section>
        <main>
          <header className="mt-60" title="heading">
            <div className="flex justify-center">
              <img src={IdeaIcons} alt="" width={150} />
            </div>
            <div className="text-6xl p-5 dark:-mt-14 text-center font-bold">
              Modern
            </div>
            <p className="dark:mt-3 text-center">
              The modern design that we provide.
            </p>
          </header>
          <a className="flex justify-center mt-7" href="">
            <Button radius="full">
              <img src={DesignIcons} alt="" />
              Modern Design
            </Button>
          </a>
        </main>
      </section>
    </DefaultLayout>
  );
}
