import { Component } from '@angular/core';

window.onload = () => {
  let tagURLs: { [key:string]: string }  = {
    html: "images/html5.png",
    css: "images/css3.png",
    javascript: "images/javscript.png",
    typescript: "images/typescript.png",
    react: "images/react.png",
    webpack: "images/webpack.png",
    git: "images/git.png",
    npm: "images/npm.png",
    firebase: "images/firebase.png",
    "chrome-extensions": "images/chrome-extensions.png"
  };

  let myProjects = [
    {
      description: "HopperChat is a live chat application, which offers many features such as real-time chat, customizable profiles, shared media. This is my first project using TypeScript, React, and Webpack.",
      imageUrl: "images/hopperchat-thumbnail.png",
      tags: ["html", "css", "typescript", "react", "webpack", "git", "npm", "firebase"],
      liveUrl: "https://www.hopperchat.com",
      codeUrl: "https://github.com/eliasmurcray/hopperchat"
    },
    {
      description: "Khan Academy Notifications is a Chrome Extension which allows you to recieve notifications in real time from Khan Academy! It uses special classes such as the AsyncGenerator to make development easier. This extension also fixes many bugs on the Khan Academy site.",
      imageUrl: "images/ka-notifications-thumbnail.png",
      tags: ["html", "css", "typescript", "webpack", "git", "npm", "chrome-extensions"],
      liveUrl: "https://chrome.google.com/webstore/detail/khan-academy-notification/gdlfnahbohjggjhpcmabnfikiigncjbd?hl=en&authuser=0",
      codeUrl: "https://github.com/eliasmurcray/ka-notifications"
    }
  ];

  const projectsContainer = document.getElementById("projects") as HTMLDivElement;
  console.log(projectsContainer);
  projectsContainer.innerHTML += myProjects.map(({ description, imageUrl, tags, liveUrl, codeUrl }) => `<div class="project">
    <div><a href="${liveUrl}" target="_blank"><img class="project-thumbnail" src="${imageUrl}" width="500"></a></div>
    <div class="project-details">
      ${description}
      <div class="project-tags">
        ${tags.map((tag) => `<img class="tag" src="${tagURLs[tag]}">`).join("")}
      </div>
      <div class="project-buttons">
        <a href="${liveUrl}" target="_blank">View Live</a>
        <a href="${codeUrl}" target="_blank">Source Code</a>
      </div>
    </div>
  </div>`).join("<br><br>");
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}