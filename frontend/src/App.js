import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1><span className="highlight">Your Name</span>'s Personal Webpage</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <section id="about" className="content">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a highly motivated and results-driven undergraduate student pursuing a BSc. (Hons) in Information Systems at Sabaragamuwa University of Sri Lanka. With a solid foundation in stakeholder management and problem-solving, I possess strong prioritization skills, enabling me to effectively manage multiple tasks simultaneously. My expertise includes React.js, Firebase, .NET, MongoDB, JavaScript, C#, and Arduino. With a passion for learning and a proactive approach, I am eager to contribute my skills and knowledge to drive innovation and success in any environment I'm in.
        </p>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="content">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-item">
          <h3>Project Title 1</h3>
          <p>Description of the project. Include technologies used, goals, and outcomes.</p>
        </div>
        <div className="portfolio-item">
          <h3>Project Title 2</h3>
          <p>Description of the project. Include technologies used, goals, and outcomes.</p>
        </div>
        {/* Add more portfolio items as needed */}
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="content">
      <div className="container">
        <h2>Blog</h2>
        <div className="portfolio-item">
          <h3>Blog Post Title 1</h3>
          <p>Summary or excerpt of the blog post. Link to full post if available.</p>
        </div>
        <div className="portfolio-item">
          <h3>Blog Post Title 2</h3>
          <p>Summary or excerpt of the blog post. Link to full post if available.</p>
        </div>
        {/* Add more blog posts as needed */}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="content">
      <div className="container">
        <h2>Contact Information</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Your Name &copy; 2024</p>
    </footer>
  );
};

export default App;
