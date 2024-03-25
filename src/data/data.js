import placepickerImg from "../assets/images/placepicker.png";
import clothShopImg from "../assets/images/clothing shop.png";
import countdownTimer from "../assets/images/count-down timer.png";
import exerciseTracker from "../assets/images/exercise-tracker.png";
import toDos from "../assets/images/to-dos.png";
import investmentCalculator from "../assets/images/investment-calculator.png";
import tictactoe from "../assets/images/tictactoe.png";
import memeGenerator from "../assets/images/meme-generator.png";
import password_gen from "../assets/images/password_gen.png";
import currency_convertor from "../assets/images/currency-convertor-img.png";
import todos from "../assets/images/todos.png";
import meshop from "../assets/images/meShop.png";
import excelClone from "../assets/images/excelClone.png";
import kanban from "../assets/images/kanban.png";
import minProjs from "../assets/images/mini-projects.png";
import book_store from "../assets/images/book_store.png";

export const myProjects = [
  {
    title: "BookStore MERN Project",
    description:
      "This is an initiative to create a centralised book library where users can add, update and delete books. you just need to provide the pdf url link uploaded in some cloud like googlecloud etc. Once added your book will be available to all the viewers",
    image: book_store,
    websiteUrl: "https://bookstoall.vercel.app/",
    githubLink: "https://github.com/rauchrods/BooksForAll",
    type: "react",
  },
  {
    title: "mini_projects",
    description:
      "website which consists a lot of mini projects. These projects clears the basic react concepts useState, useEffect, customHooks etc.",
    image: minProjs,
    websiteUrl: "https://miniprojects-rauchrodrigues.netlify.app/",
    githubLink: "https://github.com/rauchrods/mini_projects",
    type: "react",
  },
  {
    title: "To-Dos App",
    description:
      "To-Dos application which allows you to add to do in the list and also provides you with editing , finishing and deleting the task.The todos are also saved in the local storage so when the website is reloaded the data is not lost",
    image: todos,
    websiteUrl: "https://todos-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/todos-react",
    type: "react",
  },
  {
    title: "Currency Converter",
    description:
      "currency converter between all the available currency type options in the world",
    image: currency_convertor,
    websiteUrl: "https://currency-converte-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/currency-convertor",
    type: "react",
  },

  {
    title: "Random-Meme-Generator",
    description:
      "A web page which generates random meme images which are trending. It uses a free open source api to fetch those memes.",
    image: memeGenerator,
    websiteUrl: "https://meme-generator-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/Meme-Generator",
    type: "react",
  },

  {
    title: "Password-Generator",
    description: "Random password generator which has basic filters",
    image: password_gen,
    websiteUrl: "https://password-generator-rauch.netlify.app",
    githubLink: "https://github.com/rauchrods/password-generator-react",
    type: "react",
  },
  {
    title: "Place Picker",
    description:
      "This websites displays a wide array of beautiful destination places which you can select and add it to your list. This will be saved next time you visit again the places are also sorted based on your geo location",
    image: placepickerImg,
    websiteUrl: "https://place-picker-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/Place-Picker",
    type: "react",
  },
  {
    title: "Count Down Game",
    description:
      "this website displays different level-wise count down challenges where you have to stop the time as close to the timer if you exceed the time u are disqualified. Final score will be displayed",
    image: countdownTimer,
    websiteUrl: "https://countdown-game-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/count-down-game",
    type: "react",
  },

  {
    title: "Exercise Tracker",
    description:
      "This website is made with MERN stack where we can add users and then we can add exercises for the users present in the database. also u can do basic CRUD operation on these exercises and users",
    image: exerciseTracker,
    websiteUrl: "",
    githubLink: "https://github.com/rauchrods/exercise-tracker",
    type: "react",
  },
  {
    title: "To-Dos",
    description:
      "In this website you can add to do event and then view the details and also add tasks to that particular event and delete the to-do event",
    image: toDos,
    websiteUrl: "https://to-dos-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/to-dos",
    type: "react",
  },
  {
    title: "Investment Calculator",
    description:
      "In this website you get a breakdown of your investment return based on the input form ",
    image: investmentCalculator,
    websiteUrl: "https://investment-calculator-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/investment-calculator",
    type: "react",
  },
  {
    title: "Tic Tac Toe",
    description: "you can play tic tac toe game",
    image: tictactoe,
    websiteUrl: "https://tic-tact-toe-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/tic-tac-toe",
    type: "react",
  },
  {
    title: "Clothing Shop",
    description:
      "This websites displays a wide array of beautiful clothing apparels which you can select and add in cart. you can go to the cart and update the quantities from there as well",
    image: clothShopImg,
    websiteUrl: "https://cloth-shop-rauch.netlify.app/",
    githubLink: "https://github.com/rauchrods/cloth-shop",
    type: "react",
  },

  {
    title: "ME-Shop (shopping website)",
    description: `Shopping website which have features such as sign-up, login, my-profile section, homepage, cart section
       on sign-up it stores the users details and can be logged in later anytime by storing users in browser local storage
       Saved user details can be edited in my-profile section. Products are fetched through an API these products can be
      filtered based on rating and price. It can be added and removed from cart as well.
      Added products are saved in cart and can be checked-out buy razor-pay payment session`,
    image: meshop,
    websiteUrl: "https://rauchrods.github.io/Me-Shop-shopping-Site/",
    githubLink: "https://github.com/rauchrods/Me-Shop-shopping-Site",
    type: "vanila",
  },

  {
    title: "Excel Clone",
    description: `Responsive UI of excel clone Designed and created using HTML CSS (FlexBox) for all device compatibility
       100 rows by 26 column grid/ cells is created which can be used to do major operations like text and styling
       Multiple sheets can be added for the same file each of 100*26 grid cells
       Upload and download feature is also provided
       Also Local storage is implemented i.e cells used will be saved in the browser local storage and when sheets are
      reloaded the data is not lost`,
    image: excelClone,
    websiteUrl: "https://rauchrods.github.io/Excel-Clone/",
    githubLink: "https://github.com/rauchrods/Excel-Clone",
    type: "vanila",
  },

  {
    title: "Kanban Task Management website",
    description: `Responsive UI Designed and created using HTML CSS (FlexBox and Media Query) for all device compatibility
      Tasks can be created and CRUD Operations can be performed on Tasks
      Tasks are segregated based on the priority which makes it intuitive to use
      Search bar is also Implemented to quickly filter out searched tasks
      Also Local storage is implemented i.e Tasks created will be saved in the browser local storage and when page is
      reloaded the data is not lost`,
    image: kanban,
    websiteUrl:
      "https://rauchrods.github.io/My-Jira-kanban-Task-Management-System/",
    githubLink:
      "https://github.com/rauchrods/My-Jira-kanban-Task-Management-System",
    type: "vanila",
  },
];

myProjects.forEach((project, index) => {
  project.id = `${project.type}-${index + 1}`;
});
