// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../styles/Header.css";

// import ReactImage from "../assets/Technologies/reactImage.png";
// import NodeImage from "../assets/Technologies/nodejs.png";
// import ExpressImage from "../assets/Technologies/expressjs.png";
// import TypeScriptImage from "../assets/Technologies/typescript.png";
// import WordPressImage from "../assets/Technologies/wordpress.png";
// import ShopifyImage from "../assets/Technologies/shopify.png";
// import MongodbImage from "../assets/Technologies/mongodb.png";
// import MysqlImage from "../assets/Technologies/mysql.png";

// import FigmaImage from "../assets/Technologies/figma.png";
// import AdobeXd from "../assets/Technologies/adobeXd.png";
// import AdobeIllustrator from "../assets/Technologies/adobeillustrator.png";
// import Canva from "../assets/Technologies/canva.png";
// import AdobePhotoShop from "../assets/Technologies/photoshop.png";
// import AdobePremiumPro from "../assets/Technologies/adobepremierepro.png";
// import CorelDraw from "../assets/Technologies/coreldraw.png";
// import AdobeIndesign from "../assets/Technologies/adobeindesign.png";

// type IconType = string;

// const headingTexts: string[] = [
//   "Innovate with Impact",
//   "Ideas to Reality",
//   "Digital Excellence",
// ];

// // Original icons
// const allIcons: IconType[] = [
//   ReactImage,
//   NodeImage,
//   ExpressImage,
//   TypeScriptImage,
//   WordPressImage,
//   ShopifyImage,
//   MysqlImage,
//   MongodbImage,
//   AdobePhotoShop,
//   AdobePremiumPro,
//   Canva,
//   FigmaImage,
//   AdobeXd,
//   AdobeIllustrator,
//   CorelDraw,
//   AdobeIndesign,
// ];

// interface PositionedIcon {
//   src: string;
//   top: number;
//   left: number;
//   size: number;
//   opacity: number;
//   delay: number;
// }

// // Function to check if position is in the central content area
// const isInContentArea = (
//   position: { top: number; left: number },
//   safeZone: { top: number; bottom: number; left: number; right: number }
// ): boolean => {
//   return (
//     position.top > safeZone.top &&
//     position.top < safeZone.bottom &&
//     position.left > safeZone.left &&
//     position.left < safeZone.right
//   );
// };

// // Function to check if two icons overlap
// const doIconsOverlap = (
//   icon1: { top: number; left: number; size: number },
//   icon2: { top: number; left: number; size: number },
//   minDistance: number
// ): boolean => {
//   const distanceX = Math.abs(icon1.left - icon2.left);
//   const distanceY = Math.abs(icon1.top - icon2.top);
//   const minSeparation = minDistance + (icon1.size + icon2.size) / 2;

//   return distanceX < minSeparation && distanceY < minSeparation;
// };

// // Function to generate a better distribution of icon positions
// const generateIconPositions = (
//   iconCount: number,
//   viewportWidth: number,
//   viewportHeight: number
// ): PositionedIcon[] => {
//   // Define the safe zone for the content area (percentage of viewport)
//   const safeZone = {
//     top: 30,     // 30% from top
//     bottom: 70,  // 70% from top (40% height for content)
//     left: 25,    // 25% from left
//     right: 75,   // 75% from left (50% width for content)
//   };

//   const positions: PositionedIcon[] = [];
//   const minDistance = 8; // Reduced minimum distance between icons for better coverage
//   const maxAttempts = 100; // Prevent infinite loops

//   // Add viewport edge margins (percentage)
//   const edgeMargin = 6; // Reduced edge margin for more coverage

//   // Create an expanded grid with more sectors for better coverage
//   const gridSectors = [
//     // Top left (with margins)
//     { x: [edgeMargin, 24], y: [edgeMargin, 29] },
//     // Top center
//     { x: [24, 48], y: [edgeMargin, 29] },
//     // Top center-right
//     { x: [48, 76], y: [edgeMargin, 29] },
//     // Top right (with margins)
//     { x: [76, 100-edgeMargin], y: [edgeMargin, 29] },

//     // Left upper-middle
//     { x: [edgeMargin, 24], y: [29, 40] },
//     // Right upper-middle
//     { x: [76, 100-edgeMargin], y: [29, 40] },

//     // Left middle
//     { x: [edgeMargin, 24], y: [40, 60] },
//     // Right middle
//     { x: [76, 100-edgeMargin], y: [40, 60] },

//     // Left lower-middle
//     { x: [edgeMargin, 24], y: [60, 71] },
//     // Right lower-middle
//     { x: [76, 100-edgeMargin], y: [60, 71] },

//     // Bottom left (with margins)
//     { x: [edgeMargin, 24], y: [71, 100-edgeMargin] },
//     // Bottom center-left
//     { x: [24, 48], y: [71, 100-edgeMargin] },
//     // Bottom center-right
//     { x: [48, 76], y: [71, 100-edgeMargin] },
//     // Bottom right (with margins)
//     { x: [76, 100-edgeMargin], y: [71, 100-edgeMargin] },
//   ];

//   // Calculate how many icons to place in each sector to get even distribution
//   const iconsPerSector = Math.ceil(allIcons.length / gridSectors.length);

//   // Create a distribution plan for icons across sectors
//   let distributionPlan: number[] = [];
//   gridSectors.forEach((_, sectorIndex) => {
//     for (let i = 0; i < iconsPerSector; i++) {
//       distributionPlan.push(sectorIndex);
//     }
//   });

//   // Shuffle the distribution plan for more natural randomness
//   distributionPlan = distributionPlan.sort(() => Math.random() - 0.5).slice(0, allIcons.length);

//   // Distribute icons according to the plan
//   allIcons.forEach((icon, index) => {
//     const sectorIndex = distributionPlan[index];
//     const sector = gridSectors[sectorIndex];

//     let attempts = 0;
//     let position;

//     do {
//       // Generate position within selected sector
//       const left = sector.x[0] + Math.random() * (sector.x[1] - sector.x[0]);
//       const top = sector.y[0] + Math.random() * (sector.y[1] - sector.y[0]);

//       // Vary size slightly for visual interest (2.5-4%)
//       const size = 2.5 + Math.random() * 1.5;

//       // Ensure icons don't get placed too close to edges based on their size
//       const adjustedTop = Math.max(edgeMargin, Math.min(100-edgeMargin-size/2, top));
//       const adjustedLeft = Math.max(edgeMargin, Math.min(100-edgeMargin-size/2, left));

//       // Vary opacity for depth effect (0.7-0.95)
//       const opacity = 0.7 + Math.random() * 0.25;

//       // Add animation delay variation
//       const delay = Math.random() * 3;

//       position = {
//         top: adjustedTop,
//         left: adjustedLeft,
//         size,
//         opacity,
//         delay
//       };

//       attempts++;

//       // Check if this position overlaps with any existing icon
//       const overlaps = positions.some(existingIcon =>
//         doIconsOverlap(
//           position,
//           existingIcon,
//           minDistance
//         )
//       );

//       if (!overlaps || attempts >= maxAttempts) {
//         break;
//       }
//     } while (attempts < maxAttempts);

//     positions.push({
//       src: icon,
//       top: position.top,
//       left: position.left,
//       size: position.size,
//       opacity: position.opacity,
//       delay: position.delay
//     });
//   });

//   // Add additional icons to fill empty spaces
//   const additionalIcons = 12; // Number of extra icons to add

//   for (let i = 0; i < additionalIcons; i++) {
//     const randomIconIndex = Math.floor(Math.random() * allIcons.length);
//     const randomIcon = allIcons[randomIconIndex];
//     const randomSectorIndex = Math.floor(Math.random() * gridSectors.length);
//     const randomSector = gridSectors[randomSectorIndex];

//     let attempts = 0;
//     let position;

//     do {
//       // Generate position anywhere
//       const left = randomSector.x[0] + Math.random() * (randomSector.x[1] - randomSector.x[0]);
//       const top = randomSector.y[0] + Math.random() * (randomSector.y[1] - randomSector.y[0]);

//       // Smaller size for filler icons (1.5-3%)
//       const size = 1.5 + Math.random() * 1.5;

//       // Lower opacity for background effect (0.4-0.6)
//       const opacity = 0.4 + Math.random() * 0.2;

//       const adjustedTop = Math.max(edgeMargin, Math.min(100-edgeMargin-size/2, top));
//       const adjustedLeft = Math.max(edgeMargin, Math.min(100-edgeMargin-size/2, left));

//       // Add animation delay variation
//       const delay = Math.random() * 5;

//       position = {
//         top: adjustedTop,
//         left: adjustedLeft,
//         size,
//         opacity,
//         delay
//       };

//       attempts++;

//       // Check if this position is in the content area
//       const inContentArea = isInContentArea(position, safeZone);

//       // Check if this position overlaps with any existing icon (with reduced minimum distance)
//       const overlaps = positions.some(existingIcon =>
//         doIconsOverlap(
//           position,
//           existingIcon,
//           minDistance * 0.5
//         )
//       );

//       if ((!inContentArea && !overlaps) || attempts >= maxAttempts) {
//         break;
//       }
//     } while (attempts < maxAttempts);

//     // Only add the icon if we found a valid position
//     if (attempts < maxAttempts) {
//       positions.push({
//         src: randomIcon,
//         top: position.top,
//         left: position.left,
//         size: position.size,
//         opacity: position.opacity,
//         delay: position.delay
//       });
//     }
//   }

//   return positions;
// };

// const Header: React.FC = () => {
//   const [mounted, setMounted] = useState(false);
//   const [displayText, setDisplayText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);
//   const [textIndex, setTextIndex] = useState(0);
//   const [iconAnimated, setIconAnimated] = useState(false);
//   const [positionedIcons, setPositionedIcons] = useState<PositionedIcon[]>([]);

//   // Typing animation
//   useEffect(() => {
//     let typingTimeout: NodeJS.Timeout;
//     let erasingTimeout: NodeJS.Timeout;
//     let newTextTimeout: NodeJS.Timeout;

//     if (isTyping) {
//       if (displayText.length < headingTexts[textIndex].length) {
//         typingTimeout = setTimeout(() => {
//           setDisplayText(
//             headingTexts[textIndex].substring(0, displayText.length + 1)
//           );
//         }, 120);
//       } else {
//         newTextTimeout = setTimeout(() => {
//           setIsTyping(false);
//         }, 1500);
//       }
//     } else {
//       if (displayText.length > 0) {
//         erasingTimeout = setTimeout(() => {
//           setDisplayText(displayText.slice(0, -1));
//         }, 60);
//       } else {
//         setTextIndex((prev) => (prev + 1) % headingTexts.length);
//         setIsTyping(true);
//       }
//     }

//     return () => {
//       clearTimeout(typingTimeout);
//       clearTimeout(erasingTimeout);
//       clearTimeout(newTextTimeout);
//     };
//   }, [displayText, isTyping, textIndex]);

//   // On mount: generate optimized icon positions and start animation
//   useEffect(() => {
//     setMounted(true);

//     const handleResize = () => {
//       const viewportWidth = window.innerWidth;
//       const viewportHeight = window.innerHeight;

//       // Generate optimized icon positions
//       const optimizedIcons = generateIconPositions(
//         allIcons.length,
//         viewportWidth,
//         viewportHeight
//       );

//       setPositionedIcons(optimizedIcons);
//     };

//     // Initial positioning
//     handleResize();

//     // Add resize listener to reposition icons when window size changes
//     window.addEventListener('resize', handleResize);

//     // Delay icon animation to allow for loading
//     const timer = setTimeout(() => {
//       setIconAnimated(true);
//     }, 300);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Floating icons */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {positionedIcons.map((icon, idx) => (
//           <div
//             key={idx}
//             className={`absolute rounded-xl bg-white shadow-sm z-10 flex items-center justify-center overflow-visible ${
//               iconAnimated ? "rotate-once" : ""
//             }`}
//             style={{
//               top: `${icon.top}%`,
//               left: `${icon.left}%`,
//               width: `${icon.size}rem`,
//               height: `${icon.size}rem`,
//               opacity: icon.opacity,
//               animationDelay: `${icon.delay}s`,
//               transition: "all 0.9s ease-out",
//               transform: iconAnimated ? `rotate(${Math.random() * 10 - 5}deg)` : "none",
//               border: "1px solid rgba(230, 230, 230, 0.5)",
//             }}
//           >
//             <img
//               src={icon.src}
//               alt=""
//               className="w-[80%] h-[80%] object-contain"
//               style={{
//                 imageRendering: "crisp-edges"
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Main header content */}
//       <header className="relative z-20 h-full flex justify-center items-center text-center px-4 md:px-10">
//         <div
//           className={`w-full max-w-2xl space-y-6 font-poppins relative bg-white/25 p-6 rounded-xl ${
//             mounted ? "opacity-100" : "opacity-0"
//           }`}
//           style={{ transition: "opacity 1s ease-out" }}
//         >
//           <h2 className="text-black font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight group relative min-h-[100px]">
//             <div>Abtik Digital</div>
//             <div className="block text-[#f56015] typing-text">
//               {displayText}|
//             </div>
//             <span className="absolute inset-0 -z-10 text-shadow-3d group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//           </h2>

//           <p className="text-sm sm:text-base text-[#9f9f9f] max-w-md md:max-w-lg mx-auto">
//             At Abtik Digital, we transform ideas into powerful digital
//             experiences. Whether you need a stunning website, a captivating
//             brand identity, or a results-driven marketing strategy, we're here
//             to make your vision a reality.
//           </p>

//           <div className="mt-6">
//             <Link
//               to="/contact-us"
//               className="bg-[#ff5500] px-6 py-3 sm:px-8 sm:py-3.5 text-white rounded-3xl text-sm font-semibold transition-all duration-500 ease-in-out hover:brightness-110 hover:scale-105 hover:shadow-3d hover:-rotate-2"
//             >
//               Get A Quote
//             </Link>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

import "../styles/Header.css";

import { useState, useRef, useEffect } from "react";
import { Play, Square } from "lucide-react";
import MobileImage from "../assets/HeroSection/HeroImage.png";
import IphoneImage from "../assets/HeroSection/iphoneLatest.png";
import SwiperCaraousal from "../pages/SwiperCaraousal";
import IntroVideo from "../assets/HeroSection/intoVideo.mp4"
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Initialize ScrollTrigger animations after component mounts
  useEffect(() => {
    // Main timeline to control sequence
    // const masterTimeline = gsap.timeline();

    // Section One animations - only trigger once and don't reverse
    const sectionOneLines = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-one",
        start: "top 40%", // Animation starts when top of section is 70% from top of viewport
        end: "bottom 20%", // Animation completes when bottom of section is 30% from top
        toggleActions: "play none none none", // play on enter, no reverse on leave
        once: true, // Only play once
        markers: false, // Set to true for debugging
      },
    });

    sectionOneLines
      .fromTo(
        "#section-one-line1",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" }
      )
      .fromTo(
        "#section-one-line2",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#section-one-line3",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" },
        "-=0.5"
      );

    // Section Two animations - only trigger once and don't reverse
    const sectionTwoLines = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-two",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none none",
        once: true,
        markers: false,
      },
    });

    sectionTwoLines
      .fromTo(
        "#line1",
        { strokeDasharray: "0,1000" },
        { strokeDasharray: "1000,0", duration: 0.9, ease: "power2.out" }
      )
      .fromTo(
        "#line2",
        { strokeDasharray: "0,1000" },
        { strokeDasharray: "1000,0", duration: 0.9, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#line3",
        { strokeDasharray: "0,1000" },
        { strokeDasharray: "1000,0", duration: 0.9, ease: "power2.out" },
        "-=0.5"
      );

    // Section Three animations - only trigger once and don't reverse
    const sectionThreeLines = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-three",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none none",
        once: true,
        markers: false,
      },
    });

    sectionThreeLines
      .fromTo(
        "#section-three-line1",
        { strokeDasharray: "0,900" },
        { strokeDasharray: "900,0", duration: 0.9, ease: "power2.out" }
      )
      .fromTo(
        "#section-three-line2",
        { strokeDasharray: "0,900" },
        { strokeDasharray: "900,0", duration: 0.9, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#section-three-line3",
        { strokeDasharray: "0,900" },
        { strokeDasharray: "900,0", duration: 0.9, ease: "power2.out" },
        "-=0.5"
      );

    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const disp = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef: any = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const handleOpenGetQuote = () => {
    disp({ type: "open" });
  };

  // Mouse drag
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - lastPos.current.x;
      const deltaY = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };
      setRotation((prev) => ({
        x: Math.max(Math.min(prev.x - deltaY * 0.05, 90), -90),
        y: prev.y + deltaX * 0.05,
      }));
    };
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Touch drag
  useEffect(() => {
    const handleTouchMove = (e: any) => {
      if (!isDragging.current) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastPos.current.x;
      const deltaY = touch.clientY - lastPos.current.y;
      lastPos.current = { x: touch.clientX, y: touch.clientY };
      setRotation((prev) => ({
        x: Math.max(Math.min(prev.x - deltaY * 0.5, 90), -90),
        y: prev.y + deltaX * 0.5,
      }));
    };
    const handleTouchEnd = () => {
      isDragging.current = false;
    };
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        isOpen && setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  };

  const handleStopClick = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    updateScreenSize(); // initial check
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <>
      <div className="relative z-0">
        {/* Section One */}
        <div
          id="section-one"
          className="min-h-screen flex flex-col md:flex-row items-center text-white px-6 py-10 md:px-16 bg-[radial-gradient(ellipse_at_top_right,_#f56015_1%,_#0F172A_40%)] z-10 relative"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* SVG Line Animation for Section One - Modified for scroll trigger */}


          <div className="hidden lg:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none top-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1050 1050"
              className="w-full h-auto"
            >
              <path
                id="section-one-line1"
                d="M1200,200 L600,200 Q580,200 580,230 L580,1000"
                fill="none"
                stroke="#a33cc4"
                strokeWidth="18"
                strokeDasharray="1400"
                strokeDashoffset="1400"
              />
              <path
                id="section-one-line2"
                d="M1200,240 L540,240 Q520,240 520,270 L520,1000"
                fill="none"
                stroke="#f9a825"
                strokeWidth="18"
                strokeDasharray="1400"
                strokeDashoffset="1400"
              />
              <path
                id="section-one-line3"
                d="M1200,280 L480,280 Q460,280 460,310 L460,1000"
                fill="none"
                stroke="#9c274f"
                strokeWidth="18"
                strokeDasharray="1400"
                strokeDashoffset="1400"
              />
            </svg>
          </div>

          {/* mobile */}








          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 mb-10 md:mb-0 z-10">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Abtik Digital
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
                Crafting Innovative Digital Futures
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white/70">
                Transforming Ideas into Seamless Solutions
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                className="bg-[#f56015] cursor-pointer hover:bg-[#d14e10] text-white rounded-full px-6 py-2 text-sm sm:text-base transition z-10"
                onClick={handleOpenGetQuote}
              >
                Get A Quote
              </button>
              <button
                onClick={handlePlayClick}
                className="bg-white cursor-pointer border-2 border-[#d14e10] text-black rounded-full px-6 py-2 text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-[#f56015] hover:text-white transition z-10"
              >
                <Play className="rounded-full bg-black text-white p-1 w-6 h-6" />
                View Demo
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center md:h-screen z-10">
            <div
              className={`relative bg-gray-900 rounded-[20px] shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing ${isPlaying ? "w-[500px] h-[250.25px]" : "w-[250px] h-[500px]"
                } transition-all duration-300`}
              style={{
                transform: isMobile
                  ? "none"
                  : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: isDragging.current
                  ? "none"
                  : "transform 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out",
                cursor: isMobile ? "default" : "grab",
              }}
              onMouseDown={(e) => {
                if (isMobile) return;
                isDragging.current = true;
                lastPos.current = { x: e.clientX, y: e.clientY };
              }}
              onTouchStart={(e:any) => {
                if (isMobile) return;
                const touch = e.touchesIncrement;
                isDragging.current = true;
                lastPos.current = { x: touch.clientX, y: touch.clientY };
              }}
            >
              <div className="w-[93%] h-[95%] rounded-[15px] overflow-hidden relative">
                {!isPlaying && (
                  <img
                    src={MobileImage}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                )}
                <video
                  ref={videoRef}
                  src={IntroVideo}
                  className={`w-full h-full object-cover absolute top-0 left-0 bg-black ${isPlaying ? "block" : "hidden"
                    }`}
                  loop
                  muted
                />
                {!isPlaying ? (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={handlePlayClick}
                      className="bg-black/90 text-white px-6 py-2 hover:bg-black rounded-xl cursor-pointer transition-all"
                    >
                      ▶
                    </button>
                  </div>
                ) : (
                  <div className="absolute bottom-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={handleStopClick}
                      className="bg-black/70 text-white px-5 py-2 rounded-md cursor-pointer flex items-center gap-2 hover:bg-black/90 transition-all"
                    >
                      <Square className="w-5 h-5" />
                      Stop
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section Two */}
        <div
          id="section-two"
          className="flex justify-center items-center min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#f56015_1%,_#0F172A_30%)] px-4 py-10 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top left, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom right, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* SVG Background Lines - Modified for scroll trigger */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 1050">
              <path
                id="line1"
                d="M580,0 L580,1000"
                fill="none"
                stroke="#a33cc4"
                strokeWidth="18"
                strokeDasharray="0,1000"
              />
              <path
                id="line2"
                d="M520,0 L520,1000"
                fill="none"
                stroke="#f9a825"
                strokeWidth="18"
                strokeDasharray="0,1000"
              />
              <path
                id="line3"
                d="M460,0 L460,1000"
                fill="none"
                stroke="#9c274f"
                strokeWidth="18"
                strokeDasharray="0,1000"
              />
            </svg>
          </div>

          {/* iPhone Mockup */}
          <div
            className="relative bg-black rounded-[3.5rem] border-[12px] border-[#1c1c1e] shadow-2xl
             w-[90%] max-w-[320px] aspect-[9/19]
             md:max-w-[720px] md:aspect-[19/9] transition-all duration-500 overflow-hidden z-10"
          >
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:hidden w-24 h-6 bg-[#1c1c1e] rounded-full z-30 shadow-md" />
            <div className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-24 bg-[#1c1c1e] rounded-full z-30 shadow-md" />

            {/* Screen Content */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden p-1.5">
              <SwiperCaraousal />
            </div>
          </div>
        </div>

        {/* Section Three */}
        <div
          id="section-three"
          className="relative min-h-screen px-6 py-10 md:px-16 flex flex-col md:flex-row items-center justify-between text-white bg-[radial-gradient(ellipse_at_bottom_right,_#f56015_1%,_#0F172A_30%)]"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at top right, #f56015 1%, transparent 50%),
              radial-gradient(ellipse 50% 80% at bottom left, #f56015 1%, transparent 50%),
              #0F172A
            `,
          }}
        >
          {/* SVG Lines in Background - Modified for scroll trigger */}
          <div
            className=" hidden lg:block absolute inset-0 z-0 pointer-events-none"
            style={{ height: "70vh" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 1050">
              <path
                id="section-three-line1"
                d="M580,0 L580,240 Q580,270 530,270 L0,270"
                fill="none"
                stroke="#a33cc4"
                strokeWidth="18"
                strokeDasharray="0,900"
              />
              <path
                id="section-three-line2"
                d="M520,0 L520,300 Q520,330 470,330 L0,330"
                fill="none"
                stroke="#f9a825"
                strokeWidth="18"
                strokeDasharray="0,900"
              />
              <path
                id="section-three-line3"
                d="M460,0 L460,360 Q460,390 410,390 L0,390"
                fill="none"
                stroke="#9c274f"
                strokeWidth="18"
                strokeDasharray="0,900"
              />

            </svg>
          </div>

          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0 z-10">
            <img
              src={IphoneImage}
              alt="iPhone Preview"
              className=" w-full md:max-w-1/2"
              draggable="false"
            />
          </div>

          {/* Right Side - Headings & buttons */}
          <div className="w-full md:w-2/5 lg:max-w-[500px] flex flex-col justify-center items-center md:justify-start md:items-center text-center md:text-left space-y-6 z-10 px-4 md:px-0">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold break-words">
                Your One-Stop Creative & Digital Solution


              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
                Boosting Brands with Personalized Marketing & Design
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold md:text-2xl text-white/70">
                Build Market Grow.
              </h3>
            </div>
            <div className="flex flex-col items-center sm:flex-row justify-center md:justify-start gap-4 w-full">
              <button
                className="bg-[#f56015] max-w-fit cursor-pointer text-white rounded-full px-6 py-2 text-sm sm:text-base hover:bg-[#d14e10] transition"
                onClick={handleOpenGetQuote}
              >
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
