
import type React from "react"

import { useState, useEffect } from "react"
import "./App.css"

export default function VelPortfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showTechStack, setShowTechStack] = useState(false)
  const [videoErrors, setVideoErrors] = useState<{ [key: number]: boolean }>({})
  const [videosLoaded, setVideosLoaded] = useState<{ [key: number]: boolean }>({})
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    document.body.className = isDarkMode ? "" : "light-mode"
  }, [isDarkMode])

  useEffect(() => {
    setShowTechStack(true)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const techStack = [
    { name: "Firebase", image: "/images/firebase.png" },
    { name: "React", image: "/images/React.png" },
    { name: "Javascript", image: "/images/javascript.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "HTML", image: "/images/html.png" },
    { name: "Figma", image: "/images/figma.png" },
  ]

  const projects = [
    {
      title: "E-Commerce-Product-Page",
      description:
        "A modern, responsive, and stylish E-Commerce Product Page built using React, TypeScript, and pure CSS with promotional banners, product cards, a category grid, and trending items.",
      video: "https://res.cloudinary.com/duweg8kpv/video/upload/v1752445107/E-Commerces_k0ktxw.mp4", 
      liveLink: "https://e-commerce-product-page-kappa-lilac.vercel.app/",
      githubLink: "https://github.com/God-Did-Vel/E-Commerce-Product-Page",
    },
    {
      title: "VelNet-Landing-Page",
      description:
        "VelNet Landing Page a clean, fully responsive and modern landing page built with React.js and pure CSS. It adapts beautifully across screen sizes including desktop, tablet, and mobile.",
      video: "https://res.cloudinary.com/duweg8kpv/video/upload/v1752445200/Velnet_hxb0he.mp4",
      liveLink: "https://velnet-landing-page.vercel.app/",
      githubLink: "https://github.com/God-Did-Vel/Velnet-Landing-page-",
    },
    {
      title: "3D-Snake-Game",
      description:
        "A modern, immersive 3D Snake game built with React, Three.js, and TypeScript. Experience the classic Snake game like never before with realistic 3D graphics, smooth animations, and intuitive controls.",
      video: "https://res.cloudinary.com/duweg8kpv/video/upload/v1752445261/3D-GAME_xd6vlz.mp4",
      liveLink: "https://3d-snake-game-omega.vercel.app/", 
      githubLink: "https://github.com/God-Did-Vel/3d-Snake-Game",
    },
    {
      title: "Solana-Meme-Gallery",
      description:
        "A public, on-chain meme wall where users upload memes, vote on them, and see rankings. Great for community engagement and viral sharing.",
      video: "https://res.cloudinary.com/duweg8kpv/video/upload/v1752445332/Solana-Meme_ivjwch.mp4",
      liveLink: "https://solana-meme-gallery-app.vercel.app",
      githubLink: "https://github.com/God-Did-Vel/Solana-Meme-Gallery",
    },
    {
      title: "CountDown-Timer-Pro",
      description:
        "CountDown Timer Pro is a polished countdown and timer app designed for macOS, turning your desktop into a sleek time-management hub.",
      video: "https://res.cloudinary.com/duweg8kpv/video/upload/v1752445413/countdown-timer_nlarug.mp4",
      liveLink: "https://count-down-pro.vercel.app/",
      githubLink: "https://github.com/God-Did-Vel/CountDown-Pro",
    },
    {
      title: "Solana-On-Chain-Diary",
      description:
        "This decentralized diary lets you securely store your private thoughts directly on-chain. No data leaks. No centralized control. Just your words preserved by blockchain.",
      video: "https://res.cloudinary.com/duweg8kpv/video/upload/v1752445476/ON-CHAIN_ewjovu.mp4",
      liveLink: "https://solana-on-chain-diary-project.vercel.app/",
      githubLink: "https://github.com/God-Did-Vel/Solana-On-Chain-Diary",
    },
  ]

  // Video handling functions
  const handleVideoError = (index: number) => {
    setVideoErrors((prev) => ({ ...prev, [index]: true }))
  }

  const handleVideoLoad = (index: number) => {
    setVideosLoaded((prev) => ({ ...prev, [index]: true }))
  }

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>, index: number) => {
    e.preventDefault()
    const video = e.currentTarget

    if (!videoErrors[index] && videosLoaded[index]) {
      if (playingVideos[index]) {
        video.pause()
        setPlayingVideos((prev) => ({ ...prev, [index]: false }))
      } else {
        video.play().catch(() => {
          handleVideoError(index)
        })
        setPlayingVideos((prev) => ({ ...prev, [index]: true }))
      }
    }
  }

  const handleVideoEnded = (index: number) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: false }))
  }

  const handleVideoPause = (index: number) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: false }))
  }

  const handleVideoPlay = (index: number) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <>
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container">
          {/* Nav */}
          <nav className="navbar">
            <div className="navbar__logo">
              <a href="#home" className="navbar__brand">
                <img
                  src={isDarkMode ? "/images/logo_dark.png" : "/images/logo_white.png"}
                  alt="Vel Mfoniso Logo"
                  className="navbar__logo-img"
                />
              </a>
            </div>
            <div className="navbar__menu">
              <ul>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>
            {/* Theme Toggle */}
            <div className="theme-toggle">
              <input
                type="checkbox"
                id="theme-toggle__switch"
                className="theme-toggle__input"
                checked={!isDarkMode}
                onChange={toggleTheme}
              />
              <label htmlFor="theme-toggle__switch" className="theme-toggle__label">
                <span className="theme-toggle__icon">{isDarkMode ? "🌙" : "☀️"}</span>
              </label>
            </div>
            {/* Hamburger Button */}
            <button className="navbar__hamburger-button enhanced-hamburger" onClick={toggleMobileMenu}>
              <div className="navbar__hamburger-line"></div>
              <div className="navbar__hamburger-line"></div>
              <div className="navbar__hamburger-line"></div>
            </button>
            {/* Mobile Menu */}
            <div className={`navbar__mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
              <ul>
                <li>
                  <a href="#service" onClick={closeMobileMenu}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#project" onClick={closeMobileMenu}>
                    Project
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={closeMobileMenu}>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* Hero */}
          <div className="hero" id="home">
            <div className="hero__content">
              <div className="hero__image enhanced-image">
                <img src="/images/user.png" alt="Vel Mfoniso Profile" />
              </div>
              <h1 className="hero__title">
                <span>Hello. I'm Vel Mfoniso,</span> a front-end developer crafting clean, responsive, and user-friendly
                experiences for the world.
              </h1>
              <p>"I turn coffee into code and problems into solutions, one line at a time".👾</p>
              <a href="#contact" className="btn btn-dark enhanced-btn">
                Get In Touch
              </a>
              <a href="#project" className="btn btn-white enhanced-btn">
                Recent Project
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Tech Stack with Load Animation */}
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`tech-item enhanced-tech-item ${showTechStack ? "animate-slide-in" : "animate-hidden"}`}
            style={{
              animationDelay: showTechStack ? `${index * 150}ms` : "0ms",
              transitionDelay: showTechStack ? `${index * 150}ms` : "0ms",
            }}
          >
            <img src={tech.image || "/placeholder.svg"} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>

      {/* Service */}
      <section className="service container" id="service">
        <h1 className="service__title">
          <span className="service__title-line service__title-line--1">Designing solutions</span>
          <span className="service__title-line service__title-line--2">
            ____to real problems, one product at a time..
          </span>
        </h1>
        <div className="service__content">
          <div className="service__item enhanced-service-card">
            <div className="service__List">
              <h2 className="service__item-title">Web Development</h2>
              <p className="service__item-text">Creating secure, responsive websites with the latest technologies.</p>
            </div>
          </div>
          <div className="service__item service__item-web-design enhanced-service-card">
            <div className="service__List">
              <h2 className="service__item-title">Front-End Engineer</h2>
              <p className="service__item-text">Creating fast, accessible interfaces with React and modern web tech.</p>
            </div>
          </div>
          <div className="service__item enhanced-service-card">
            <div className="service__List">
              <h2 className="service__item-title">UI/UX Design</h2>
              <p className="service__item-text">Designing intuitive, engaging interfaces for web and mobile apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Videos */}
      <div className="project-section" id="project">
        <h1 className="project-title">
          <span className="project-title-main">Recent Projects____</span>
          <span className="project-title-sub">that I've worked on</span>
        </h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Video Container */}
              <div className="video-container">
                {!videoErrors[index] ? (
                  <video
                    className="project-video"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onLoadedData={() => handleVideoLoad(index)}
                    onError={() => handleVideoError(index)}
                    onClick={(e) => handleVideoClick(e, index)}
                    onEnded={() => handleVideoEnded(index)}
                    onPause={() => handleVideoPause(index)}
                    onPlay={() => handleVideoPlay(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="video-fallback">
                    <div className="fallback-content">
                      <div className="fallback-icon">🎬</div>
                      <p>Video Preview</p>
                      <p className="fallback-text">{project.title}</p>
                    </div>
                  </div>
                )}

                {/* Play overlay - only show when video is not playing */}
                {!playingVideos[index] && !videoErrors[index] && (
                  <div
                    className="play-overlay"
                    onClick={(e) => {
                      e.preventDefault()
                      const video = e.currentTarget.parentElement?.querySelector("video") as HTMLVideoElement
                      if (video && videosLoaded[index]) {
                        const mockEvent: React.MouseEvent<HTMLVideoElement> = {
                          currentTarget: video,
                          preventDefault: () => {},
                        } as React.MouseEvent<HTMLVideoElement>
                        handleVideoClick(mockEvent, index)
                      }
                    }}
                  >
                    <div className="play-button">
                      <div className="play-icon"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h2 className="project-card-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="about container" id="about">
        <h1 className="about__title">
          <span className="about__title-line about__title-line--1">About Me</span>
          <span className="about__title-line about__title-line--2">_____Who am I?</span>
        </h1>
        <div className="about__content">
          <div className="about__text">
            <h3 className="about__text-title">
              Hi. I'm Mfoniso Vel a front-end developer crafting impactful, user-centered experiences for the modern web
              worldwide.
            </h3>
            <p className="about__text-content">
              I build responsive, high-performance web interfaces using React, Firebase, modern JavaScript blending
              clean code with thoughtful design through CSS and Figma.
            </p>
          </div>
        </div>
        {/* Education & Experience */}
        <div className="about_me">
          {/* Education */}
          <div className="about__education">
            <div className="about__education-content">
              <div className="about__education-item">
                <h3 className="about__education-title">Education</h3>
                <div className="about__education-list">
                  <div className="about__education-card enhanced-about-card">
                    <div className="d-flex">
                      <h4 className="about__education-item-title">Bachelor of Engineering in Petroleum Engineering</h4>
                      <span className="about__text-year">2016-2020</span>
                    </div>
                    <p className="about__education-item-text">
                      Graduated in Petroleum Engineering from the University of Uyo. With a strong focus on analytical
                      problem solving and engineering principles.
                    </p>
                  </div>
                  <div className="about__education-card enhanced-about-card">
                    <div className="d-flex">
                      <h4 className="about__education-item-title">Alx Software Engineering Program</h4>
                      <span className="about__text-year">2023-2024</span>
                    </div>
                    <p className="about__education-item-text">
                      Completed a 12-month ALX Software Engineering program with a short specialization in back-end
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className="about__experience">
            <div className="about__experience-content">
              <div className="about__experience-item">
                <h3 className="about__experience-title">Experience</h3>
                <div className="about__experience-list">
                  <div className="about__experience-card enhanced-about-card">
                    <div className="d-flex">
                      <h4 className="about__experience-item-title">Front-end Dev at Blockstye Company</h4>
                      <span className="about__text-year">2024-2025</span>
                    </div>
                    <p className="about__experience-item-text">
                      Built and maintained front-end web apps with JavaScript, React, and CSS in an agile team, on UI
                      improvements and code collaboration.
                    </p>
                  </div>
                  <div className="about__experience-card enhanced-about-card">
                    <div className="d-flex">
                      <h4 className="about__experience-item-title">Front-End Developer at Tri-Cities Local</h4>
                      <span className="about__text-year">2025-Till Date</span>
                    </div>
                    <p className="about__experience-item-text">
                      I build responsive, accessible UIs in React and JavaScript, turning Figma designs into clean,
                      mobile-first experiences that connect local businesses with their communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer__content">
            <div className="footer__logo">
              <a href="#home" className="footer__brand">
                <img
                  src={isDarkMode ? "/images/logo_dark.png" : "/images/logo_white.png"}
                  alt="Vel Mfoniso Logo"
                  className="footer__logo-img"
                />
              </a>
            </div>
            <div className="footer__menu">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__social">
            <a
              href="https://mail.google.com/mail/?view=cm&to=mfonisocletus124@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="enhanced-social-link"
            >
              <img src="/images/gmail_logo.png" alt="Gmail" />
            </a>
            <a href="https://github.com/God-Did-Vel" target="_blank" className="enhanced-social-link" rel="noreferrer">
              <img src="/images/github_icon.png" alt="GitHub" />
            </a>
            <a href="https://x.com/God_Did_Vel" target="_blank" className="enhanced-social-link" rel="noreferrer">
              <img src="/images/twitter_logo.png" alt="Twitter" />
            </a>
            <a href="https://t.me/GodDidVel" target="_blank" className="enhanced-social-link" rel="noreferrer">
              <img src="/images/telegram_icon.png" alt="Telegram" />
            </a>
            <a href="https://medium.com/@mfonisovel" target="_blank" className="enhanced-social-link" rel="noreferrer">
              <img src="/images/medium logo.png" alt="Medium" />
            </a>
            <a
              href="https://www.linkedin.com/in/vel-mfoniso"
              target="_blank"
              className="enhanced-social-link"
              rel="noreferrer"
            >
              <img src="/images/linkedin_icon.png" alt="LinkedIn" />
            </a>
          </div>
          <div className="footer__copywrite">
            <p>&copy; 2024 Vel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
