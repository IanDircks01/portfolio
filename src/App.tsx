import React from "react";
import "./App.css";
import { Link } from "react-scroll";
import { saveAs } from "file-saver";
import { ReactComponent as GithubIcon } from "./github.svg";
import { ReactComponent as LinkedInIcon } from "./linkedin.svg";
import { ReactComponent as EmailIcon } from "./email.svg";
import { ReactComponent as DiscordIcom } from "./discord.svg";
import { ReactComponent as DownloadIcom } from "./download.svg";

const IconSize = "calc(14px + 1vmin)";

function App() {
  return (
    <div className="App">
      <span className="flex align-middle justify-between w-full top-0 py-4 px-7">
        <p className="text-2xl">Ian Dircks</p>
        <span className="flex gap-5">
          <Link
            className="text-2xl Icon underline"
            to="projects"
            smooth={true}
            duration={200}
          >
            Projects
          </Link>
          <Link
            className="text-2xl Icon underline"
            to="work"
            smooth={true}
            duration={200}
          >
            Work history
          </Link>
        </span>
      </span>
      <div className="py-10 min-h-screen">
        <div className="py-20">
          <h1 className="text-4xl">
            Welcome to Ian Dircks's portfolio website!
          </h1>
        </div>
        <h1 className="SectionTitle" id="projects">
          Projects
        </h1>
        <h1 className="SectionTitle" id="work">
          Work History
        </h1>
        <div className="py-5"></div>
      </div>
      <div className="flex bg-slate-cool-800 w-full justify-between content-start fixed bottom-0 px-7 py-1">
        <p className="text-lg my-auto">© Ian Dircks</p>
        <p
          className="text-base text-blue-500-slate-cool-400-mix-450 Icon my-auto underline"
          onClick={() =>
            window.open("https://github.com/IanDircks01/portfolio")
          }
        >
          Webpage source code
        </p>
        <span className="flex items-center justify-center gap-5">
          <span className="flex items-center justify-center gap-2">
            <p className="text-xl inline-block align-middle">Resume: </p>
            <DownloadIcom
              fill="white"
              className="Icon"
              onClick={() =>
                saveAs(
                  process.env.PUBLIC_URL + "/resource/Ian_Dircks_Resume.pdf",
                  "Resume(Ian Dircks).pdf"
                )
              }
              width={IconSize}
            />
          </span>
          <span className="flex items-center justify-center gap-2">
            <p className="text-xl inline-block align-middle">Links: </p>
            <GithubIcon
              fill="white"
              className="Icon"
              onClick={() => window.open("https://github.com/IanDircks01")}
              width={IconSize}
            />
            <LinkedInIcon
              fill="white"
              className="Icon"
              onClick={() =>
                window.open("https://www.linkedin.com/in/iandircks/")
              }
              width={IconSize}
            />
            <DiscordIcom
              fill="white"
              className="Icon"
              onClick={() =>
                window.open("https://discord.com/users/99626824165756928")
              }
              width={IconSize}
            />
            <EmailIcon
              fill="white"
              className="Icon"
              onClick={() => window.open("mailto:ian.dircks@outlook.com")}
              width={IconSize}
            />
          </span>
        </span>
      </div>
    </div>
  );
}

export default App;
