import React from "react";
import "./App.css";
import { Link } from "react-scroll";
import DocViewer, { PDFRenderer } from "react-doc-viewer";
import { ReactComponent as GithubIcon } from "./github.svg";
import { ReactComponent as LinkedInIcon } from "./linkedin.svg";
import { ReactComponent as EmailIcon } from "./email.svg";
import { ReactComponent as DiscordIcom } from "./discord.svg";

const IconSize = "calc(14px + 1vmin)";

function App() {
  const docs = [{ uri: require("./Ian_Dircks_Resume.pdf") }];

  return (
    <div className="App">
      <span className="flex align-middle justify-between w-screen top-0 py-4 px-5">
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
          <Link
            className="text-2xl Icon underline"
            to="resume"
            smooth={true}
            duration={200}
          >
            Resume
          </Link>
        </span>
      </span>
      <div className="py-15 min-h-screen">
        <h1>Welcome to Ian Dircks's portfolio website!</h1>
        <h1 id="projects">Projects</h1>
        <h1 id="work">Work History</h1>
        <div id="resume" className="py-5">
          <DocViewer
            pluginRenderers={[PDFRenderer]}
            documents={docs}
            theme={{
              primary: "#3d4b59",
              secondary: "#92A0AD",
              tertiary: "#92A0AD",
              text_primary: "#ffffff",
              text_secondary: "#5296d8",
              text_tertiary: "#00000099",
              disableThemeScrollbar: false,
            }}
            style={{ width: 500, height: 500 }}
          />
        </div>
      </div>
      <div className="flex bg-slate-cool-800 w-screen justify-between content-start fixed bottom-0 px-10 py-1">
        <p className="text-lg my-auto">© Ian Dircks</p>
        <p
          className="text-base text-blue-500-slate-cool-400-mix-450 Icon my-auto underline"
          onClick={() =>
            window.open("https://github.com/IanDircks01/portfolio")
          }
        >
          Webpage source code
        </p>
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
      </div>
    </div>
  );
}

export default App;
