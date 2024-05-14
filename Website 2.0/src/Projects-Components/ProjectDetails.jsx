import SnekSS from '../assets/images/SnekSS.png'
import CSCB20 from '../assets/images/CSCB20SS.png'
import PersonalPortSS from '../assets/images/PersonalPortSS.png'

export default [
    {
        id: 1,
        title: "Snake Recreation",
        content: (`This project is a basic recreation of the classic snake game using only Java and 
            basic libraries. Included in this game is a menu, leaderboard, and different settings the player can mess 
            around with to make their playing experience more varied.`),
        learningObjective: "This project demonstrates proficiency in object oriented programming and competence in programming fundamentals.",
        image: SnekSS,
        date: "Aug 4 2023",
        github: "https://github.com/Justinz8/SNEK"
    },{
        id: 2,
        title: "Course Page Website",
        content: (`This project is a full-stack project from CSCB20 that tasked myself and my group with recreating the course webpage. 
                   The website is made using concepts and tools taught in class which includes plain html and css as the front end with python flask and sqlite acting as
                   the backend. Included in this website is a mix of static pages and backend functionalities for both a student user type and instructor user type,
                   giving the ability to recieve/send grades, ask for/see regrades, send/recieve feedback, and login/register new users.`),
        learningObjective: "This project demonstrates proficiency in plain html and css as well as a good understanding working with python flask and SQL-like DMLs.",
        image: CSCB20,
        date: "Apr 9 2024",
        github: "https://github.com/Justinz8/CSCB20-Website"
    },{
        id: 3,
        title: "Personal Portfolio Website",
        content: (`You are already familiar with this project! This website is made with javascipt, jsx, and css using React, striving to add dynamic elements without 
                    going too over the top. This is actually my second portfolio website, the first iteration used html, css, and vanilla javascript and was frankly not that good
                    so I remade it whilst reinforcing my skills with React in the process.`),
        learningObjective: "This project demonstrates proficiency using React and javascript in general.",
        image: PersonalPortSS,
        date: "May 14 2024",
        github: ""
    }
]