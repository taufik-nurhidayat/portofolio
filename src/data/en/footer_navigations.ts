import { type NavigationInterface } from "../../types/navigation";
interface FooterNavigationInterface {
  title: string;
  navigations: NavigationInterface[];
}

export const footerNavigations: FooterNavigationInterface[] = [
  {
    title: "Navigation",
    navigations: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "/#about",
      },
      {
        title: "Blog",
        link: "https://www.nurhidayat.dev",
      },
      {
        title: "Projects",
        link: "/projects",
      },
    ],
  },
  {
    title: "Tools",
    navigations: [
      {
        title: "Pomodoro",
        link: "https://pomodoro.nurhidayat.dev",
      },
    ],
  },
];
