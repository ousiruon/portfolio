import { createSlice } from "@reduxjs/toolkit";
export interface ProjectsStateProps {
  id: string;
  img: string;
  link: string;
  repository: string;
  title: string;
  keywords?: string[];
  desc: {
    en: {
      introduction?: string;
      title?: string;
      description?: string[];
    }[];
    fr: {
      introduction?: string;
      title?: string;
      description?: string[];
    }[];
  };
}
const initialState: ProjectsStateProps[] = [
  {
    id: "006b6bb0-980f-4c3c-a29a-c3ff8df4de56",
    img: "/projects/gameroun.png",
    link: "https://gameroun.netlify.app/",
    repository: "https://github.com/ousiruon/Gameroun",
    title: "Gameroun",
    keywords: ["React", "TypeScript", "Zustand", "RAWG API"],
    desc: {
      en: [
        {
          introduction:
            "A modern web app that allows users to explore video games by platform, genre, rating, etc..., it also includes an option to generate three random games based on the selected console(s) and the user's mood.",
        },
        {
          title: "How did I build it?",
        },
        {
          description: [
            "This is my very first React project, I created it after only two weeks of React learning.",
            "I used React, TypeScript, Zustand, TailWind CSS, React Router and Framer Motion to build this project.",
            "I also used the RAWG API to fetch games data.",
          ],
        },
        {
          title: "Why did I build it?",
        },
        {
          description: [
            "I mainly built this project to pratice the new skills I learned in React.",
            "It was also a good way to understand how to work with APIs in React, and how to manage state with Zustand.",
          ],
        },
        {
          title: "What were some of the design challenges?",
        },
        {
          description: [
            "Since this was my first React Project, I spent a lot of time learning how to structure this project in a proper way to make the UI appealing, user-friendly and responsive.",
            "Of course, I looked at many other projects to get inspired and learn from them.",
            "After hours of research and practice, I was ready to build my first React project.",
          ],
        },
        {
          title: "What did I learn?",
        },
        {
          description: [
            "I learned how to build a React project from scratch, how to use TypeScript with React, how to manage state with Zustand, and how to work with APIs in React.",
            "I also learned that TailWind CSS is a great tool to build responsive and modern UIs efficiently and quickly.",
            "Same goes for React, it makes building UIs so much easier and faster.",
          ],
        },
        {
          title: "What will I do differently next time?",
        },
        {
          description: [
            "If I were to build this project over again, I would probably use a more advanced state management library like Redux since I faced a few issues with Zustand.",
            "I would also take a different approach to the project structure, and try to make it more modular and reusable.",
            "The infinite scroll feature was a bit tricky to implement, so I would also try to find a better way to handle it.",
          ],
        },
      ],
      fr: [
        {
          introduction:
            "Une application web moderne qui permet aux utilisateurs de découvrir des jeux vidéo selon la plateforme, le genre, la note, etc. Elle propose aussi une option amusante pour générer trois jeux au hasard en fonction de la ou des consoles choisies et de l'humeur du joueur.",
        },
        {
          title: "Comment j’ai construit ce projet",
        },
        {
          description: [
            "C’est mon tout premier projet React, que j’ai réalisé après seulement deux semaines d’apprentissage.",
            "Pour le développer, j’ai utilisé React, TypeScript, Zustand, Tailwind CSS, React Router et Framer Motion.",
            "J’ai également intégré l’API RAWG pour récupérer des données sur les jeux vidéo.",
          ],
        },
        {
          title: "Pourquoi je l’ai construit",
        },
        {
          description: [
            "Je voulais mettre en pratique ce que j’apprenais avec React, et ce projet m’a donné l’occasion idéale de le faire.",
            "Il m’a aussi permis de comprendre comment interagir avec une API et gérer l’état de l’application avec Zustand.",
          ],
        },
        {
          title: "Quels ont été les défis de conception ?",
        },
        {
          description: [
            "Comme c’était ma première expérience avec React, j’ai dû apprendre à structurer un projet correctement, tout en soignant le design pour qu’il soit agréable, clair et responsive.",
            "Je me suis beaucoup inspiré d’autres projets pour comprendre les bonnes pratiques et trouver des idées.",
            "Après pas mal de recherches et d’essais, j’étais enfin prêt à passer à l’action.",
          ],
        },
        {
          title: "Ce que j’ai appris",
        },
        {
          description: [
            "J’ai appris à monter un projet React de A à Z, à utiliser TypeScript de manière efficace, à gérer l’état avec Zustand et à intégrer des données depuis une API.",
            "J’ai aussi découvert la puissance de Tailwind CSS pour créer des interfaces modernes et adaptables rapidement.",
            "Et bien sûr, j’ai compris à quel point React facilite la création d’interfaces dynamiques.",
          ],
        },
        {
          title: "Ce que je ferais autrement la prochaine fois",
        },
        {
          description: [
            "Si je devais refaire ce projet, j’opterais peut-être pour Redux, une solution de gestion d’état plus robuste, car j’ai rencontré quelques limites avec Zustand.",
            "Je retravaillerais aussi l’architecture du projet pour la rendre plus modulaire et facile à maintenir.",
            "Enfin, j’essaierais de trouver une meilleure solution pour la mise en place du scroll infini, qui a été assez complexe à gérer.",
          ],
        },
      ],
    },
  },
  {
    id: "bcc5376a-488d-4b70-81db-664087c9a638",
    img: "/projects/prokick.png",
    link: "https://prokick.netlify.app/",
    repository: "https://github.com/ousiruon/prokick",
    title: "ProKick",
    keywords: ["React", "TypeScript", "Framer Motion", "SVG Animations"],
    desc: {
      en: [
        {
          introduction:
            "A single-page React web application built for a global team of football (soccer) recruiters. The team's mission is to discover young talent around the world and connect them with top-tier clubs and academies.",
        },
        {
          title: "How did I build it?",
        },
        {
          description: [
            "This is my second React project, I would say it was like a playground for me to practice more advanced React Motion animations.",
            "As the usual, I used React, TypeScript, TailWind CSS, and Framer Motion to build this project.",
          ],
        },
        {
          title: "Why did I build it?",
        },
        {
          description: [
            "As said before, I mainly built this project to pratice the new skills I learned in React Motion, especially the advanced animations combined with SVGs.",
          ],
        },
        {
          title: "What were some of the design challenges?",
        },
        {
          description: [
            "This project was a bit more challenging than the first one, since I had to learn how to work with SVGs and how to animate them with Framer Motion.",
            "Making this project responsive was also a bit tricky, since I had to make sure that the SVGs were scaling properly and that the animations were still smooth on all devices.",
          ],
        },
        {
          title: "What did I learn?",
        },
        {
          description: [
            "I learned how to work with SVGs in React, how to animate them with Framer Motion, and how to make them responsive.",
            "I also learned how to use advanced animations in Framer Motion, and how to combine them with SVGs to create more complex animations.",
            "This project was a great way to practice my React skills and learn more about Framer Motion.",
          ],
        },
        {
          title: "What will I do differently next time?",
        },
        {
          description: [
            "If I were to build this project over again, I would probably make the animations more complex and add more interactivity to the project.",
            "I would also try to make the project more modular and reusable, so that I can use the same components in other projects.",
            "Finally, I would try to find a better way to handle the SVGs, since I had some issues with the scaling and the responsiveness of the SVGs.",
          ],
        },
      ],
      fr: [
        {
          introduction:
            "Une application web monopage développée avec React, conçue pour une équipe internationale de recruteurs de football. Leur mission : repérer de jeunes talents prometteurs aux quatre coins du monde et les mettre en relation avec des clubs et académies de haut niveau.",
        },
        {
          title: "Comment j’ai construit ce projet",
        },
        {
          description: [
            "C’est mon deuxième projet React. Je l’ai un peu considéré comme un terrain de jeu pour pratiquer des animations plus avancées avec Framer Motion.",
            "Comme d’habitude, j’ai utilisé React, TypeScript, TailWind CSS et Framer Motion pour le développer.",
          ],
        },
        {
          title: "Pourquoi je l’ai construit",
        },
        {
          description: [
            "Comme mentionné plus tôt, j’ai surtout créé ce projet pour mettre en pratique mes nouvelles compétences avec React Motion, notamment les animations avancées combinées avec des SVG.",
          ],
        },
        {
          title: "Quels ont été les défis de conception ?",
        },
        {
          description: [
            "Ce projet était un peu plus complexe que le premier, car j’ai dû apprendre à manipuler les SVG et à les animer avec Framer Motion.",
            "Le rendre responsive a aussi été un défi, car il fallait s’assurer que les SVG s’adaptent bien à toutes les tailles d’écran, tout en gardant les animations fluides.",
          ],
        },
        {
          title: "Ce que j’ai appris",
        },
        {
          description: [
            "J’ai appris à manipuler des SVG dans React, à les animer avec Framer Motion et à les rendre adaptables à différents formats d’écran.",
            "J’ai également approfondi l’utilisation des animations avancées dans Framer Motion, et comment les combiner avec des SVG pour créer des effets plus complexes.",
            "Ce projet m’a vraiment permis de progresser en React et d’explorer les possibilités offertes par Framer Motion.",
          ],
        },
        {
          title: "Ce que je ferais différemment la prochaine fois",
        },
        {
          description: [
            "Si je devais refaire ce projet, je rendrais probablement les animations plus complexes et j’ajouterais plus d’interactivité.",
            "Je chercherais aussi à rendre le projet plus modulaire et réutilisable, afin de pouvoir reprendre certains composants dans d’autres projets.",
            "Et enfin, j’essaierais de mieux gérer les SVG, car j’ai rencontré quelques soucis liés à leur mise à l’échelle et leur responsivité.",
          ],
        },
      ],
    },
  },
  {
    id: "c642227b-f309-4e88-8940-5835eebdd2e2",
    img: "/projects/towngo.png",
    link: "https://towngo.netlify.app/",
    repository: "https://github.com/ousiruon/towngo",
    title: "TowN'Go",
    keywords: ["React", "TypeScript", "Framer Motion", "React Router"],
    desc: {
      en: [
        {
          introduction:
            "A mobile-first single-page React application built for a company specializing in camping trailer rentals.",
        },
        {
          title: "How did I build it?",
        },
        {
          description: [
            "A modern, mobile-first React application built for a company specializing in camping trailer rentals. These portable trailer camps are designed to be hauled by almost any vehicle, offering flexibility and adventure to travelers across the region.",
          ],
        },
        {
          title: "Why did I build it?",
        },
        {
          description: [
            "After learning more about mobile-first design concepts and responsive web development, I wanted to apply these concepts in a real project.",
            "This project was a great way to practice my skills and learn more about responsive web development.",
          ],
        },
        {
          title: "What were some of the design challenges?",
        },
        {
          description: [
            "The main challenge was to make the project suitable for mobile devices while keeping the design clean and user-friendly.",
            "I had to ensure that the layout was flexible and that the components were responsive to different screen sizes.",
          ],
        },
        {
          title: "What did I learn?",
        },
        {
          description: [
            "This project taught me a lot about mobile-first design and responsive web development.",
          ],
        },
        {
          title: "What will I do differently next time?",
        },
        {
          description: [
            "If I were to build this project over again, I would focus more on performance optimization and accessibility.",
            "This project can be improved in terms of loading speed and accessibility for users with disabilities.",
          ],
        },
      ],
      fr: [
        {
          introduction:
            "Une application React monopage pensée en priorité pour les mobiles, développée pour une entreprise spécialisée dans la location de caravanes et remorques de camping.",
        },
        {
          title: "Comment j’ai construit ce projet",
        },
        {
          description: [
            "Dans ce projet, j’ai voulu me concentrer davantage sur le design mobile-first et le développement web responsive.",
            "J’ai utilisé React, TypeScript, Zustand, TailWind CSS et Framer Motion pour le réaliser.",
          ],
        },
        {
          title: "Pourquoi je l’ai construit",
        },
        {
          description: [
            "Après avoir appris les principes du design mobile-first et du développement responsive, j’avais envie de les appliquer dans un vrai projet.",
            "Ce projet a été une excellente occasion de mettre en pratique mes compétences et d’en apprendre davantage sur le responsive.",
          ],
        },
        {
          title: "Quels ont été les défis de conception ?",
        },
        {
          description: [
            "Le principal défi a été d’adapter le projet aux appareils mobiles tout en gardant un design propre et facile à utiliser.",
            "Je devais m’assurer que la mise en page soit flexible et que les composants s’adaptent bien à toutes les tailles d’écran.",
          ],
        },
        {
          title: "Ce que j’ai appris",
        },
        {
          description: [
            "Ce projet m’a beaucoup appris sur le design mobile-first et le développement web responsive.",
          ],
        },
        {
          title: "Ce que je ferais différemment la prochaine fois",
        },
        {
          description: [
            "Si je devais recommencer ce projet, je mettrais davantage l’accent sur l’optimisation des performances et l’accessibilité.",
            "Il y a encore des améliorations possibles concernant la vitesse de chargement et l’accessibilité pour les utilisateurs en situation de handicap.",
          ],
        },
      ],
    },
  },
  {
    id: "20918c54-6181-4ce8-b3f4-f5deeb5fc12e",
    img: "/projects/dailygrind.png",
    link: "https://daily-grind1.netlify.app/",
    repository: "https://github.com/ousiruon/daily-grind",
    title: "Daily Grind",
    keywords: ["React", "TypeScript", "Redux", "Framer Motion"],
    desc: {
      en: [
        {
          introduction:
            "A React application that allows users to track their daily habits and routines, helping them stay organized and productive.",
        },
        {
          title: "How did I build it?",
        },
        {
          description: [
            "This project was an introduction for me to advanced state management, it helped me learn how to use Redux in a real project.",
            "I used React, TypeScript, Redux, TailWind CSS, and Framer Motion to build this project.",
          ],
        },
        {
          title: "Why did I build it?",
        },
        {
          description: [
            "After learning the basics of Redux in FrontEnd Masters, I wanted to apply it in a real project to understand how it works in practice, and how it can help manage complex state in a React application.",
          ],
        },
        {
          title: "What were some of the challenges?",
        },
        {
          description: [
            "The main challenge was to understand how to structure the Redux store and how to connect it to the React components.",
          ],
        },
        {
          title: "What did I learn?",
        },
        {
          description: [
            "Eventhough I had learned the basics of Redux, this project helped me understand how to use it in a real project, how to structure the store, and how to connect it to the React components.",
          ],
        },
        {
          title: "What will I do differently next time?",
        },
        {
          description: [
            "If I were to build this project over again, I would probably use Redux Toolkit to simplify the store setup and reduce boilerplate code.",
            "I would also try to make the project more modular and reusable, so that I can use the same components in other projects.",
            "Finally, I would try to find a better way to handle the state management, since I had some issues with the Redux store structure.",
          ],
        },
      ],
      fr: [
        {
          introduction:
            "Une application React qui aide les utilisateurs à suivre leurs habitudes et routines quotidiennes, pour rester organisés et gagner en productivité.",
        },
        {
          title: "Comment j’ai construit ce projet",
        },
        {
          description: [
            "Ce projet a été pour moi une introduction à la gestion d’état avancée. Il m’a permis d’apprendre à utiliser Redux dans un vrai cas concret.",
            "J’ai utilisé React, TypeScript, Redux, TailWind CSS et Framer Motion pour le construire.",
          ],
        },
        {
          title: "Pourquoi je l’ai construit",
        },
        {
          description: [
            "Après avoir appris les bases de Redux via FrontEnd Masters, je voulais l’appliquer dans un vrai projet afin de mieux comprendre son fonctionnement en pratique, et voir comment il peut aider à gérer des états complexes dans une application React.",
          ],
        },
        {
          title: "Quels ont été les défis ?",
        },
        {
          description: [
            "Le principal défi a été de comprendre comment structurer le store Redux et comment le connecter aux composants React.",
          ],
        },
        {
          title: "Ce que j’ai appris",
        },
        {
          description: [
            "Même si j’avais appris les bases de Redux, ce projet m’a vraiment aidé à comprendre comment l’utiliser concrètement, comment organiser le store et comment l’intégrer proprement aux composants React.",
          ],
        },
        {
          title: "Ce que je ferais différemment la prochaine fois",
        },
        {
          description: [
            "Si je devais refaire ce projet, j’utiliserais probablement Redux Toolkit pour simplifier la configuration du store et réduire le code répétitif.",
            "Je chercherais aussi à rendre le projet plus modulaire et réutilisable, afin de pouvoir réemployer les mêmes composants dans d’autres projets.",
            "Et enfin, je chercherais une meilleure façon de gérer l’état global, car j’ai rencontré quelques difficultés avec la structure actuelle du store Redux.",
          ],
        },
      ],
    },
  },
  {
    id: "90fb877d-ac63-433c-858e-5e5e3bd517a4",
    img: "/projects/tokentide.png",
    link: "https://tokentide.netlify.app/",
    repository: "https://github.com/ousiruon/tokentide/",
    title: "TokenTide",
    keywords: ["React", "TypeScript", "Redux Toolkit", "Chart.js"],
    desc: {
      en: [
        {
          introduction:
            "A cryptocurrency dashboard that allows users to track the prices of their favorite cryptocurrencies, view historical data, and visualize trends using interactive charts.",
        },
        {
          title: "How did I build it?",
        },
        {
          description: [
            "In this project, I wanted to learn something new and different, so I decided to build a cryptocurrency dashboard.",
            "I used React, TypeScript, Redux Toolkit, Chart.js, TailWind CSS, and Framer Motion to build this project.",
          ],
        },
        {
          title: "Why did I build it?",
        },
        {
          description: [
            "Redux is a powerful state management library, it makes it easier to manage complex state in a React application, however, it can be a bit verbose and boilerplate-heavy.",
            "So I wanted to learn how to use Redux Toolkit, which is a set of tools that makes it easier to work with Redux.",
            "In addition, I wanted to learn how to use Chart.js to create simple and interactive charts in React.",
          ],
        },
        {
          title: "What were some of the challenges?",
        },
        {
          description: [
            "Finding a good API to use for this project was quite challeging, especially when working only on the frontend side.",
            "I finally decided to create a mock data file to simulate the API responses, which allowed me to focus on the frontend development without worrying about the backend.",
            "Another challenge was to learn how to use Chart.js with React, since it is not a React-specific library.",
          ],
        },
        {
          title: "What did I learn?",
        },
        {
          description: [
            "I learned how to use Redux toolkit to simplify the store setup and reduce boilerplate code.",
            "I also learned how to use Chart.js to create simple and interactive charts in React.",
            "This project was a great way to practice my React skills and learn more about Redux Toolkit and Chart.js.",
          ],
        },
        {
          title: "What will I do differently next time?",
        },
        {
          description: [
            "If I were to build this project over again, I would probably use a more advanced charting library like Recharts or Victory, which are more React-friendly.",
            "I would also try to find a better way to handle the API requests, since I had some issues with the mock data file.",
          ],
        },
      ],
      fr: [
        {
          introduction:
            "Un tableau de bord dédié aux cryptomonnaies qui permet aux utilisateurs de suivre les prix de leurs cryptos préférées, consulter les données historiques et visualiser les tendances grâce à des graphiques interactifs.",
        },
        {
          title: "Comment j’ai construit ce projet",
        },
        {
          description: [
            "Dans ce projet, je voulais apprendre quelque chose de nouveau et différent, alors j’ai décidé de créer un tableau de bord sur les cryptomonnaies.",
            "J’ai utilisé React, TypeScript, Redux Toolkit, Chart.js, TailWind CSS et Framer Motion pour le développer.",
          ],
        },
        {
          title: "Pourquoi je l’ai construit",
        },
        {
          description: [
            "Redux est une bibliothèque de gestion d’état puissante, idéale pour gérer des états complexes dans une application React. Mais elle peut parfois être un peu verbeuse et générer beaucoup de code répétitif.",
            "C’est pourquoi j’ai voulu apprendre à utiliser Redux Toolkit, un ensemble d’outils qui simplifie grandement l’utilisation de Redux.",
            "En plus de ça, je voulais apprendre à utiliser Chart.js pour créer des graphiques simples et interactifs dans une application React.",
          ],
        },
        {
          title: "Quels ont été les défis ?",
        },
        {
          description: [
            "L’un des plus gros défis a été de trouver une bonne API à utiliser, surtout en travaillant uniquement sur la partie frontend.",
            "Finalement, j’ai décidé de créer un fichier de données simulées pour reproduire les réponses d’une API. Ça m’a permis de me concentrer uniquement sur le développement frontend sans me soucier du backend.",
            "Un autre défi a été d’apprendre à utiliser Chart.js avec React, car ce n’est pas une bibliothèque conçue spécifiquement pour React.",
          ],
        },
        {
          title: "Ce que j’ai appris",
        },
        {
          description: [
            "J’ai appris à utiliser Redux Toolkit pour simplifier la configuration du store et réduire le code répétitif.",
            "J’ai aussi appris à utiliser Chart.js pour créer des graphiques simples et interactifs dans React.",
            "Ce projet a été une excellente occasion de pratiquer mes compétences en React tout en découvrant Redux Toolkit et Chart.js.",
          ],
        },
        {
          title: "Ce que je ferais différemment la prochaine fois",
        },
        {
          description: [
            "Si je devais refaire ce projet, je choisirais probablement une bibliothèque de graphiques plus avancée comme Recharts ou Victory, qui sont mieux adaptées à React.",
            "Je chercherais aussi une meilleure façon de gérer les requêtes API, car j’ai rencontré quelques limitations avec les données simulées.",
          ],
        },
      ],
    },
  },
  {
    id: "738f8a3c-2fcb-43dd-b703-46555f6c50b9",
    img: "/projects/matchops.png",
    link: "https://matchops.netlify.app/",
    repository: "https://github.com/ousiruon/matchops",
    title: "MatchOps",
    keywords: ["Next.js", "React", "TypeScript", "Redux Toolkit"],
    desc: {
      en: [
        {
          introduction:
            "A team management application for Barcelona team, allowing users to create and manage a team of players, view player statistics, and more.",
        },
        {
          title: "How did I build it?",
        },
        {
          description: [
            "I wanted to build a project that would help me parctice more advanced React concepts, so I decided to build a project that would allow me to create and manage a team of players.",
            "This project is a team management application for Barcelona team.",
            "I used Next.js, React, TypeScript, Redux Toolkit, TailWind CSS, and Framer Motion to build this project.",
          ],
        },
        {
          title: "Why did I build it?",
        },
        {
          description: [
            "After learning more about advanced React concepts in previous projects, I wanted to apply these concepts in a real project.",
            "I also wanted to learn how to use Next.js, which is a React framework that allows you to understand and build server-rendered applications.",
            "This project was a great way to practice my skills and learn more about advanced React concepts.",
          ],
        },
        {
          title: "What were some of the challenges?",
        },
        {
          description: [
            "The main challenge was to learn how to understand the difference between client-side and server-side rendering, and how to use Next.js to build a server-rendered application.",
          ],
        },
        {
          title: "What did I learn?",
        },
        {
          description: [
            "This project taught me a lot about advanced React concepts, such as SSR (Server-Side Rendering), and SSG (Static Site Generation).",
            "I also learned how to use Next.js route handling.",
          ],
        },
        {
          title: "What will I do differently next time?",
        },
        {
          description: [
            "If I were to build this project over again, I would focus more on performance optimization and accessibility.",
            "This project can be improved in terms of loading speed and accessibility for users with disabilities.",
          ],
        },
      ],
      fr: [
        {
          introduction:
            "Une application de gestion d’équipe pour le FC Barcelone, qui permet aux utilisateurs de créer et gérer une équipe de joueurs, consulter les statistiques des joueurs, et bien plus encore.",
        },
        {
          title: "Comment j’ai construit ce projet",
        },
        {
          description: [
            "Je voulais créer un projet qui me permettrait de pratiquer des concepts plus avancés de React. J’ai donc décidé de développer une application de gestion d’équipe.",
            "Cette application permet de gérer l’effectif de l’équipe du FC Barcelone.",
            "J’ai utilisé Next.js, React, TypeScript, Redux Toolkit, TailWind CSS et Framer Motion pour la concevoir.",
          ],
        },
        {
          title: "Pourquoi je l’ai construit",
        },
        {
          description: [
            "Après avoir exploré des concepts React plus avancés dans mes projets précédents, je voulais les appliquer dans un vrai projet.",
            "Je souhaitais également apprendre à utiliser Next.js, un framework basé sur React qui permet de comprendre et de construire des applications avec rendu côté serveur.",
            "Ce projet a été une excellente opportunité pour renforcer mes compétences et approfondir mes connaissances sur React avancé.",
          ],
        },
        {
          title: "Quels ont été les défis ?",
        },
        {
          description: [
            "Le principal défi a été de comprendre la différence entre le rendu côté client et le rendu côté serveur, et comment utiliser Next.js pour développer une application rendue côté serveur.",
          ],
        },
        {
          title: "Ce que j’ai appris",
        },
        {
          description: [
            "Ce projet m’a beaucoup appris sur les concepts avancés de React, comme le SSR (Server-Side Rendering) et le SSG (Static Site Generation).",
            "J’ai également appris à gérer les routes avec Next.js.",
          ],
        },
        {
          title: "Ce que je ferais différemment la prochaine fois",
        },
        {
          description: [
            "Si je devais refaire ce projet, je me concentrerais davantage sur l’optimisation des performances et sur l’accessibilité.",
            "Il y a clairement des améliorations possibles concernant la vitesse de chargement et l’accessibilité pour les utilisateurs en situation de handicap.",
          ],
        },
      ],
    },
  },
];
export const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {},
});
