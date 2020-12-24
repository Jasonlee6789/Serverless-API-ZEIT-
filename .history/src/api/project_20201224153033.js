// const fetch = require("node-fetch");

// const githubRepoUrl = "https://api.github.com/users/Jasonlee6789/repos";
//Serverless API像下面这种写法是Everything is just a function, which is run by the platform when it's needed.
// module.exports = (req, res) => {
//   fetch(githubRepoUrl)
//     .then((res) => res.json())
//     .then((projects) => {
//       const gitHubProjects = projects.map((project) => {
//         return {
//           name: project.name,
//           html_url: project.html_url,
//           description: project.description,
//         };
//       });

//       res.json(gitHubProjects);
//     });
// };
const githubRepoUrl = "https://api.github.com/users/Jasonlee6789/repos";

function useProject() {
  return () => fetch(githubRepoUrl);
}

export default useProject;
