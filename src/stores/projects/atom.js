import { atom } from "recoil";

export const projectsState = atom({
  key: "projectsState",
  default: [
    {
      id: 1,
      title: "Catmans Kennel",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, accusamus culpa! Tempore impedit, odit quia voluptate amet minus doloremque earum vero cum. Consectetur ipsa impedit vel. Eius error animi ab ad, quae consectetur cumque tempora obcaecati tenetur ipsa veritatis necessitatibus. Iusto beatae error sit cumque aperiam voluptatibus officiis quae suscipit.",
      image: "https://placekitten.com/450/450",
    },
    {
      id: 2,
      title: "Nuggetdonalds",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, accusamus culpa! Tempore impedit, odit quia voluptate amet minus doloremque earum vero cum. Consectetur ipsa impedit vel. Eius error animi ab ad, quae consectetur cumque tempora obcaecati tenetur ipsa veritatis necessitatibus. Iusto beatae error sit cumque aperiam voluptatibus officiis quae suscipit.",
      image: "https://placekitten.com/450/450",
    },
    {
      id: 3,
      title: "Joakims Korvmoj",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, accusamus culpa! Tempore impedit, odit quia voluptate amet minus doloremque earum vero cum. Consectetur ipsa impedit vel. Eius error animi ab ad, quae consectetur cumque tempora obcaecati tenetur ipsa veritatis necessitatibus. Iusto beatae error sit cumque aperiam voluptatibus officiis quae suscipit.",
      image: "https://placekitten.com/450/450",
    },
    {
      id: 4,
      title: "Byggfirman",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, accusamus culpa! Tempore impedit, odit quia voluptate amet minus doloremque earum vero cum. Consectetur ipsa impedit vel. Eius error animi ab ad, quae consectetur cumque tempora obcaecati tenetur ipsa veritatis necessitatibus. Iusto beatae error sit cumque aperiam voluptatibus officiis quae suscipit.",
      image: "https://placekitten.com/450/450",
    },
  ],
});
