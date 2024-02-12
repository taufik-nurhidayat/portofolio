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
      title: "Fullstack Developer",
      company: "RetroSuite",
      location: "https://retrosuite.co",
      body: <p>Lorem ipsum dolor sit amet</p>,
      start_date: new Date(""),
      end_date: new Date(""),
      date: "Sept 2023 - Now",
    },
    {
      title: "Fullstack Developer",
      company: "Sontre Academy",
      location: "https://academy.sontre.id",
      body: <div></div>,
      start_date: new Date(""),
      end_date: new Date(""),
      date: "Aug 2023",
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
              {item.title} at{" "}
              <a
                href={item.location}
                className="link"
                target="_blank"
                rel="nofollow noreferer noopener"
              >
                {item.company}
                <svg
                  className="hidden group-hover:inline-flex w-5 h-5 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
              </a>
            </h3>
            <div className="mt-2">{item.body}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
