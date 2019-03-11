import React, { Component } from 'react';
 
import './css/App.css';
import './css/grid.css';
import './css/animate.css';
import './css/normalize.css';
import './css/font-awesome-4.6.3/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
 
 
    <header>
        <nav>
            <div className="row">
                <ul className="main-nav">
                    <li><a href="#features">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a className="mobile-nav-icon"><i className="ion-navicon-round"></i></a>
            </div>
        </nav>
        <div className="hero-text-box">
            <h1>Anna Mentiskaya<br/>Front End Developer</h1>
            <a className="btn btn-full" href="#projects">Portfolio</a>
            <a className="btn btn-ghost" href="https://drive.google.com/open?id=1XyYR7dJ2OVtxwQN45_C5_7N-XpyzZm4q"
                target="_blank"  rel="noopener noreferrer">Resume</a>
        </div>
    </header>

    <section className="section-features" id="features">
        <div className="row">
            <h2>About Me</h2>

            <p className="long-copy">
                 Big fan of React, Redux, Sass, Photoshop, UX optimization and cross-country skiing. 
                My favorite things are Javascript, UX/UI design and coding, prototyping and graphics
                    creation. 
                My background is in e-commerce and shopping cart websites building, customization and third-party
                services integration. I started off working with Wordpress, Magento and Shopify systems and their
                combinations and then moved on to single page applications which are a lot more fun. (I do take on
                occassional Wordpress/Woocommerce projects but only if you are my close friend)
            </p>
        </div>
        
        <div className="row">
            <h2 id="projects">Projects </h2>

        </div>
        <div className="row">
            <div className="col span-1-of-4 box">
                <i className="fa fa-sun-o fa-3x"></i>
                <h3><a href="http://fierceblonde.github.io/API-Weather/" target="_blank"  rel="noopener noreferrer">API Weather Widget</a></h3>
                <p>
                    Displays current weather data for your location.
                </p>
            </div>
            <div className="col span-1-of-4 box">
                <i className="fa fa-wikipedia-w fa-3x"></i>
                <h3> <a href="http://fierceblonde.github.io/Wikipedia-Search/" target="_blank"  rel="noopener noreferrer">Wikipedia Search</a></h3>
                <p>
                    Wikipedia API search box with autofill
                </p>
            </div>
            <div className="col span-1-of-4 box">
                <i className="fa fa-calculator fa-3x"></i>
                <h3><a href="http://fierceblonde.github.io/JavaScript-Calculator/" target="_blank"  rel="noopener noreferrer">Javascript
                        Calculator</a></h3>
                <p>
                    A javascript calculator designed with Material Design elements.
                </p>
            </div>
            <div className="col span-1-of-4 box">
                <i className="fa fa-quote-right fa-3x"></i>
                <h3><a href="http://fierceblonde.github.io/Random-Quote-Generator-/" target="_blank"  rel="noopener noreferrer">Random Quote
                        Generator</a></h3>
                <p>
                    Generates a random quote with an option to share it on Twitter
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col span-1-of-4 box">
                <i className="fa fa-sticky-note-o fa-3x" aria-hidden="true"></i>
                <h3><a href="http://fierceblonde.github.io/kanban-productivity/" target="_blank"  rel="noopener noreferrer">Notes App</a></h3>
                <p>
                    Notes app with React and Webpack
                </p>
            </div>
            <div className="col span-1-of-4 box">
                <i className="fa fa-shopping-bag fa-3x" aria-hidden="true"></i>
                <h3><a href="http://www.mijobymichellejonas.com" target="_blank"  rel="noopener noreferrer">E-commerce Website</a></h3>
                <p>
                    Shopify-powered e-commerce website
                </p>
            </div>
            <div className="col span-1-of-4 box">
                <i className="fa fa-picture-o fa-3x" aria-hidden="true"></i>
                <h3><a href="http://fierceblonde.github.io/Photoshop-Portfolio/" target="_blank"  rel="noopener noreferrer">Photoshop Portfolio</a></h3>
                <p>
                    Some of my Photoshop flyers and banners
                </p>
            </div>
        </div>
    </section>

    <section className="section-form">
        <div className="row">
            <h2 id="contact">I am happy to hear from you</h2>
        </div>
        <div className="row">
            <form method="post" action="https://formspree.io/menitskaya@gmail.com" className="contact-form">
                <div className="row">
                    <div className="col span-1-of-3">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="text" name="name" id="name" placeholder="Your name" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="email" name="_replyto" id="email" placeholder="Your email" required/>
                    </div>
                </div>


                <div className="row">
                    <div className="col span-1-of-3">
                        <label>Say something</label>
                    </div>
                    <div className="col span-2-of-3">
                        <textarea name="message" placeholder="Your message"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>&nbsp;</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="submit" value="Send"/>
                    </div>
                </div>

            </form>

        </div>
    </section>

    <footer>
        <div className="row">
            <div className="col span-1-of-2">

            </div>
            <div className="col span-1-of-2">
                <ul className="social-links">

                    <li><a href="https://www.linkedin.com/in/anna-menitskaya-14265449"> <i className="fa fa-linkedin-square"
                                aria-hidden="true"></i> </a></li>
                    <li><a href="https://www.instagram.com/lostinthewoods777/" target="_blank"  rel="noopener noreferrer"><i className="fa fa-instagram"
                                aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/fierceblonde" target="_blank"  rel="noopener noreferrer"> <i className="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="mailto:menitskaya@gmail.com" target="_blank"  rel="noopener noreferrer"><i className="fa fa-envelope-o" aria-hidden="true"></i>
                        </a></li>


                </ul>
            </div>
        </div>

    </footer>
 
      </div>
    );
  }
}

export default App;
