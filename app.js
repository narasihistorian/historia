gsap.registerPlugin(ScrollTrigger);

// navbar burger toggle tab & mobile version -----------------------------------------------------

const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu-navbar");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("navbar-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("navbar-open");
    burger.classList.toggle("toggle");
  });
});

// matchmedia responsive --------------------------------------------------

const matchMediaResponsive = gsap.matchMedia();

matchMediaResponsive.add(
  {
    isDesktopTab: "(min-width: 721px)",
    isMobile: "(max-width: 720px)",
  },
  (context) => {
    console.log(context.conditions);
    const { isMobile, isDesktopTab } = context.conditions;

    const tl = gsap.timeline({
      default: { duration: 0.75, ease: "Power3.easeOut" },
    });

    // navbar -----------------------------------------------------

    const showAnim = gsap
      .from("nav", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    // home sections

    tl.fromTo(
      ".cta-home1",
      { y: "-50%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    )
      .fromTo(
        ".cta-home2",
        { y: "50%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "<35%"
      )
      .fromTo(
        ".cta-home3",
        { x: "50%", opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5 },
        "<35%"
      )
      .fromTo(
        ".cta-button",
        { x: "50%", opacity: 0 },
        { x: 0, opacity: 1, duration: 2.5 },
        "<35%"
      )
      .fromTo(
        ".logo",
        { x: "-50%", opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5 }
      )
      .fromTo(
        ".infographi-text",
        { y: "50%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "<"
      )
      .fromTo(
        ".Kategori",
        { y: "-50%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "<"
      )
      .fromTo(
        ".youtube-icon",
        { y: "-50%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "<"
      )
      .fromTo(
        ".instagram-icon",
        { y: "-50%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "<"
      )
      .fromTo(
        ".burger",
        { y: "-50%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "<"
      );

    // quotes sections

    const tlQuotesSections = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "-25% center",
        end: "0% top",
        duration: 0.75,
        scrub: 4,
      },
    });

    tlQuotesSections
      .fromTo(
        ".quotes2",
        { y: isMobile ? 0 : "50%", opacity: isMobile ? 1 : 0 },
        { y: 0, opacity: 1 }
      )
      .fromTo(
        ".quotes3",
        { x: isMobile ? 0 : "50%", opacity: isMobile ? 1 : 0 },
        { x: 0, opacity: 1 },
        "<35%"
      )
      .fromTo(
        ".quotes1",
        { x: isMobile ? 0 : "-50%", opacity: isMobile ? 1 : 0 },
        { x: 0, opacity: 1 },
        "<35%"
      )
      .fromTo(
        ".about-container img",
        { opacity: isMobile ? 1 : 0 },
        { opacity: 1 },
        "<35%"
      );

    // kategori sections -----------------------------------------------------

    const tlKategoriSections = gsap.timeline({
      scrollTrigger: {
        trigger: "#kategori",
        start: "-25% center",
        end: "0% top",
        duration: 0.75,
        scrub: 4,
      },
    });

    tlKategoriSections
      .fromTo(".cta1-title1", { y: "-50%", opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".cta2-title2",
        { y: "50%", opacity: 0 },
        { y: 0, opacity: 1 },
        "<35%"
      )
      .fromTo(
        ".sub-title1",
        { y: "50%", opacity: 0 },
        { y: 0, opacity: 1 },
        "<35%"
      )
      .fromTo(
        ".kategori",
        { opacity: isMobile ? 1 : 0 },
        { opacity: 1, duration: 4 },
        "<35%"
      );

    // penutup sections ---------------------------------------------------------------

    const tlPenutupSections = gsap.timeline({
      scrollTrigger: {
        trigger: "#penutup",
        start: "-25% center",
        end: "0% top",
        duration: 0.75,
        scrub: 4,
      },
    });

    tlPenutupSections
      .fromTo(
        ".title-penutup",
        { x: isMobile ? "0" : "-50%", opacity: isMobile ? 1 : 0 },
        { x: "0", opacity: 1, duration: 4 }
      )
      .fromTo(
        ".sub-penutup",
        { y: isMobile ? "0" : "50%", opacity: isMobile ? 1 : 0 },
        { y: "0", opacity: 1, duration: 4 },
        "<35%"
      );

    // footer closed animation ---------------------------------------------------------

    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "80% center",
        end: "80% center",
        duration: 0.75,
        scrub: 4,
      },
    });

    tlFooter.fromTo(".footer", { y: "100%" }, { y: 0 });
  }
);
