import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "SoMe Platform",
    image: projectOne,
    description: (
      <>
        <p>
          this project under development,check this page few days later,thanks.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  2: {
    title: "Productivity App",
    image: projectTwo,
    description: (
      <>
        <p>
        Productivity app,I made it with framework flask,u can check github repository,but im not deploeyd it yet
        this project under development,check this page few days later,thanks.
        </p>
      </>
    ),
    github: "https://github.com/dankramer2222/FlaskAdminPage",
    demo: "https://netlify.com",
  },
  3: {
    title: "VisualNovelGameAi",
    image: projectThree,
    description: (
      <>
        <p>
        this project under development,check this page few days later,thanks. realize date 09.01.2023,check this page later,thanks
        </p>
      </>
    ),
    github: "https://github.com/dankramer2222/VisualNovelGameAI",
    demo: "https://netlify.com",
  },
};

export default projects;