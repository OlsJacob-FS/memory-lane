import reactImg from "../images/react.png";
//React Js image cite: https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png
import nextJs from "../images/nextjs.jpeg";
//Next JS image cite: https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg
import devImg from "../images/comp-unsplash.jpg";
//https://unsplash.com/photos/two-black-flat-screen-computer-monitors-LJ9KY8pIH3E
import budgetPro from "../images/budgetPro.png";
const blogData = [
  {
    id: "one",
    title: "Using React JS",
    image: reactImg,
    body: "Time to React",
    artical:
      "React Js was my first step into component based front-end development. After learning the basics such as creating components, exporting, routing, and styling, I quickly became obessed in using React and learning more about it. So far I have completed three projects using React Js, and as I feel more comfortable using it I still feel as more of a beginning. I continue to learn and grow and hope one day to become a React engineer or a React specialist developer.",
  },
  {
    id: "two",
    title: "Next Js for the win??",
    image: nextJs,
    body: "Up NextJs",
    artical:
      "I have always had a special interest in working with and learning Next Js. Using Next Js to deploy my react front end webpages has been simple and easy to use so far. Next Ui has made it easy to build and create different components to use for this blog page. Routing and page design has been just as easy as well. Next Js 13 has made it extremely easy to link pages and routes together. Styling using the built tailwindCss makes it easy to learn and style pages to the layouts I had envisioned in my head. I look forward to learning more about Next JS and its usefulness",
  },
  {
    id: "three",
    title: "Leetcode!",
    image: devImg,
    body: "Needed?",
    artical:
      "Leetcode is a coding question / problem solving website that develpers can use to grow their problem solving skills and practice coding interview questions as well. I have started doing the thirty-day javascript problem solving challenge. Each day there is a new problem to solve using code and your own skills to solve the problem at hand. The challenge starts with easy task to complete and progresses each day. I look forward to continue learning and completing more coding questions and problems.",
  },
  {
    id: "four",
    title: "Budget Pro App",
    image: budgetPro,
    body: "My current side Project",
    artical:
      "My Budget-Pro app was built following a tutorial on youtube to enhance my React JS development skills. While folliwing the tutorial on youtube I learned quite a bit. I learned more about styling, components, using images to style a webpage, and learning more about paths and routes using vite. Using props and different states allows this app to track a budget added by the user. The user defines their name which opens the budgeting app. The user is able to enter in a budget amount, for example their car payment. The user can then add the amount spent toward that payment which is tracked in a card component and displayed on the budget dashboard. ",
  },
];

export default blogData;
