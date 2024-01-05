import Image from "next/image";
import { Container } from "@/components";
import { connect } from "@/utils/me";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="py-12">
      <div className="flex items-start justify-between">
        <div className="w-8/12 text-gray-700">
          <div className="intro">
            <h2 className="text-xl font-medium md:text-3xl mb-4">
              Hi, I&apos;m Odetola Azeez.
            </h2>
          </div>
          <div className="text-sm leading-loose space-y-3">
            <p>
              Your goto artist - a javaScript engineer. I channel my days (and
              often, moonlit nights) into painting the canvas of the internet.
              With each (project) and intricately woven line of code, From &lt;
              and /&gt; into vivid, immersive experiences that dance across the
              digital canvas.
            </p>
            <p>
              When not immersed in coding, I&apos;m probably reading some
              bookmarked tech articles, leveling up my backend skills, and
              sometimes watching hoop highlight reels. I love exploring the
              theoretical realm of CS almost as much as I love bringing ideas to
              life in code. Each feeds the other in an endless quest to satisfy
              my curiosity.
            </p>
          </div>
        </div>
        <div className="w-3/12 hidden md:block">
          <Image
            src="/images/sety.png"
            alt="OOdetola gravatar"
            width={140}
            height={158}
          />
        </div>
      </div>

      <div className="my-4">
        <Link href="/about" className="mdmmsmmsmss">
          See more about me
        </Link>
      </div>
      <div className="flex items-center space-x-4 my-4">
        {connect.map((el, index) => {
          const Icon = el.icon;
          return (
            <Link
              key={`connect-${index}`}
              href={el.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={36} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
