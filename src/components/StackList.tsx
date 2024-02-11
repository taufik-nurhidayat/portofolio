import {
  IconBrandAlpineJs,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandRust,
  IconBrandSvelte,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
} from "@tabler/icons-preact";
import IconBrandHtmx from "../icons/htmx";
export default function StackList() {
  interface IconListInterface {
    title: string;
    icon: any;
  }
  const iconList: IconListInterface[] = [
    {
      title: "React",
      icon: IconBrandReact,
    },
    {
      title: "Svelte",
      icon: IconBrandSvelte,
    },
    {
      title: "AlpineJS",
      icon: IconBrandAlpineJs,
    },
    {
      title: "HTMX",
      icon: IconBrandHtmx,
    },
    {
      title: "VueJS",
      icon: IconBrandVue,
    },
    {
      title: "NextJS",
      icon: IconBrandNextjs,
    },
    {
      title: "TailwindCSS",
      icon: IconBrandTailwind,
    },
    {
      title: "TypeScript",
      icon: IconBrandTypescript,
    },
    {
      title: "Rust",
      icon: IconBrandRust,
    },
  ];
  return (
    <div class="flex flex-wrap gap-1">
      {iconList.map((item) => (
        <button class="btn btn-secondary no-animation">
          <item.icon />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  );
}
