import type { ReactNode } from "preact/compat";

export default function ExperienceList() {
  interface ExperienceInterface {
    title: string;
    company: string;
    location: string;
    body: ReactNode;
    start_date: Date;
    end_date: Date;
    date: string;
  }
  const exList: ExperienceInterface[] = [
    {
      title: "Freelance Fullstack Developer",
      company: "",
      location: "",
      body: <p></p>,
      start_date: new Date(""),
      end_date: new Date(""),
      date: "Since 2023",
    },
    {
      title: "Freelance SEO Writer",
      company: "Play.id",
      location: "https://www.play.id",
      body: <div></div>,
      start_date: new Date(""),
      end_date: new Date(""),
      date: "2022 - 2023",
    },
    {
      title: "Freelance SEO Writer",
      company: "Dewabiz",
      location: "https://academy.sontre.id",
      body: <div></div>,
      start_date: new Date(""),
      end_date: new Date(""),
      date: "2022",
    },
  ];
  return (
    <ul class="space-y-6 border-l-4">
      {exList.map((item) => (
        <li className="group flex">
          <div className="">
            <span className="-ml-2 inline-flex w-3 h-3 rounded-full bg-accent"></span>
          </div>
          <div className="px-4">
            <time class="italic text-sm text-slate-700">{item.date}</time>
            <h3 className="text-xl font-semibold">
              {item.title} {item.company && `at ${item.company}`}
            </h3>
            <div className="mt-2">{item.body}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
