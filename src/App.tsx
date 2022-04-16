import React from "react";
import "./App.css";
import { ReactComponent as GithubIcon } from "./github.svg";
import { ReactComponent as LinkedInIcon } from "./linkedin.svg";
import { ReactComponent as EmailIcon } from "./email.svg";
import { ReactComponent as DiscordIcom } from "./discord.svg";

const IconSize = "calc(16px + 1vmin)";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <h1>Welcome to Ian Dircks's portfolio website!</h1>
      <div className="flex bg-slate-cool-800 w-screen justify-between content-start fixed bottom-0 px-10 py-2">
        <p className="text-lg my-auto">© Ian Dircks</p>
        <span className="flex items-center justify-center gap-2">
          <p className="text-xl inline-block align-middle">Links: </p>
          <GithubIcon
            fill="white"
            className="Icon"
            onClick={() => {
              window.open("https://github.com/IanDircks01");
            }}
            width={IconSize}
          />
          <LinkedInIcon
            fill="white"
            className="Icon"
            onClick={() => {
              window.open("https://www.linkedin.com/in/iandircks/");
            }}
            width={IconSize}
          />
          <DiscordIcom
            fill="white"
            className="Icon"
            onClick={() => {
              window.open("https://discord.com/users/99626824165756928");
            }}
            width={IconSize}
          />
          <EmailIcon
            fill="white"
            className="Icon"
            onClick={() => {
              window.open("mailto:ian.dircks@outlook.com");
            }}
            width={IconSize}
          />
        </span>
      </div>
    </div>
  );
}

export default App;
