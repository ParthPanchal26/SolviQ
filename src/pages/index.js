export { default as Home } from './Home.jsx'
export { default as Navbar } from './Navbar.jsx'
export { default as About } from './About.jsx'
export { default as Courses } from './Courses.jsx'
export { default as MyLearning } from './MyLearning.jsx'
export { default as SignIn } from './SignIn.jsx'
export { default as SignUp } from './SignUp.jsx'
export { default as ForgotPassword } from './ForgotPassword.jsx'
export { default as ResetPassword } from './ResetPassword.jsx'
export { default as PrivateRoute } from './PrivateRoute.jsx'

export const courses = [
  {
    id: 1,
    cover: "./images/course-2-1.jpg",
    title: "UI/UX",
    image: 'https://img.freepik.com/free-photo/team-young-businesspeople-using-laptop-office-desk-discussing-project_114579-4675.jpg',
    price: "Rs 1000"
  },
  {
    id: 2,
    cover: "./images/course-4-1.jpg",
    title: "DATA SCIENCE",
    image: 'https://img.freepik.com/free-photo/team-young-businesspeople-using-laptop-office-desk-discussing-project_114579-4675.jpg',
    price: "Rs 1200"
  },
  {
    id: 3,
    cover: "./images/course-5-1.jpg",
    title: "REACTJS",
    image: 'https://img.freepik.com/free-photo/team-young-businesspeople-using-laptop-office-desk-discussing-project_114579-4675.jpg',
    price: "Rs 1500"
  },
  {
    id: 4,
    cover: "../images/course-6-1.jpg",  // Make sure this path is correct
    title: "BUSINESS ANALYTIC",
    image: 'https://img.freepik.com/free-photo/team-young-businesspeople-using-laptop-office-desk-discussing-project_114579-4675.jpg',
    price: "Rs 1100"
  },
];