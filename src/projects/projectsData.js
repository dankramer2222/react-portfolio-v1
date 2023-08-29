import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "VisualNovelGameAi",
    image: projectOne,
    description: (
      <>
        <p>
          its my first try and just demo that shows,what i did with chatgpt and i used 
          a platform lexica for creating images
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://visual-novel-ai-demo.netlify.app",
  },
  2: {
    title: "VisualNovel Berserk 'Odyssey of Vengeance: Guts' Pursuit of the Fallen Griffin'",
    image: projectTwo,
    description: (
      <>
       <p>under development,check demo at 09.01.2023</p>
        <p>
        "Embark on a tumultuous odyssey through the pages of 'Vengeful Journey: Chasing the Fallen Griffin.
        ' This fanfiction weaves a tale of unyielding determination as Guts, a warrior of indomitable spirit, 
        sets forth to reclaim his stolen destiny. With every step, the echoes of his heart's thunderous beats resonate 
        in the wake of his pursuit. The ethereal presence of the silver-winged Griffith hangs like a shadow over Guts' path,
         a symbol of both a shared past and a shattered bond.
        </p>
       
      </>
    ),
    github: "",
    demo: "https://netlify.com",
  },
  3: {
    title: "https://github.com/dankramer2222/FlaskAdminPage",
    image: projectThree,
    description: (
      <>
        <p>
        Productivity app,I made it with framework flask,u can check github repository,but im not deploeyd it yet
        this project under development,check demo few days later,thanks.
        </p>
      </>
    ),
    github: "https://github.com/dankramer2222/VisualNovelGameAI",
    demo: "https://netlify.com",
  },
};

export default projects;