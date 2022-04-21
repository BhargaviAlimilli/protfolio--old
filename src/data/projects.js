import project1 from "../assets/notes.png";
import project3 from "../assets/hotel.png";


const PROJECTS = [
  
    

   
    {
        id: 3,
        title: "Book My Stay(MERN)",
       
        functionalArea: "Hotel Booking",
        technologyUsed: "Nodejs, ExpressJS, ES6 javascript,React,Mongo Atlas, Bootstrap",
        description: "Book My Stay is a multi user platform with a proper authentication system where sellers can host their property and users can book those properties.Users can search the properties with specific dates and occupancy capacity.Users can view the property images and book the property with online payment and the seller can view the amount he earned through hosting the properties.Stripe Payment Integration has been done for payments, Ant Designs has been used as React UI library.",
        image: project3,
        link: "https://62432898bdf1d60084733292--benevolent-dragon-a8bf5a.netlify.app/"
    },
   
    {
        id: 5,
        title: "Simplify-Notes",
        functionalArea: "CMS",
        technologyUsed: "React JS, Redux, NodeJS, ExpressJS, Mongo Atlas, React Bootstrap",
        description: "Simplify notes is a full stack web app made with MERN Stack.Basic CRUD Was implemented using NodeJs,ReactJs and Redux, Client Side Search Functionality added.Proper authentication implemented, React Bootestrap and Bootswatch themes has been used for UI designing and styling.",
        image: project1,
        link: "https://625d70c472983056337578de--hilarious-starship-52f2b6.netlify.app/"
    }   
];

export default PROJECTS;
