// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-posts",
          title: "posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "engagement in sideline activities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-collaboration",
          title: "collaboration",
          description: "collaboration and research team members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/collaboration/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-home-for-my-webpage",
          title: 'New home for my webpage',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/new-webpage/";
            },},{id: "news-colloquium-on-the-history-of-mechanics",
          title: 'Colloquium on the history of mechanics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/lund-colloquium-2023/";
            },},{id: "news-new-post-on-what-is-shape-analysis",
          title: 'New post on What is shape analysis?',
          description: "",
          section: "News",},{id: "news-ice-clouds-over-mont-blanc",
          title: 'Ice clouds over Mont Blanc',
          description: "",
          section: "News",},{id: "news-our-start-up-navari-is-on-the-iva-100-list-2023",
          title: 'Our start-up Navari is on the IVA 100-list 2023',
          description: "",
          section: "News",},{id: "news-new-post-on-reversibility-in-zeitlin-s-model",
          title: 'New post on reversibility in Zeitlin’s model',
          description: "",
          section: "News",},{id: "news-göran-gustafsson-awards-2025",
          title: 'Göran Gustafsson Awards 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/gustafsson_award/";
            },},{id: "projects-navari-surgical",
          title: 'navari surgical',
          description: "co-founder of medtech company for augmented reality",
          section: "Projects",handler: () => {
              window.location.href = "/projects/navari/";
            },},{id: "projects-quflow",
          title: 'quflow',
          description: "principal programmer for hydrodynamics software",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quflow/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
