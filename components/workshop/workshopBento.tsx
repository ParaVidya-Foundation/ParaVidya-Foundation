import { Metadata } from "next"
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Skeleton } from "../../components/ui/skeleton";

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton className="h-28 w-full rounded-xl" />,
    icon: <IconClipboardCopy className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton className="h-28 w-full rounded-xl" />,
    icon: <IconFileBroken className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton className="h-28 w-full rounded-xl" />,
    icon: <IconSignature className="h-5 w-5 text-pink-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton className="h-28 w-full rounded-xl" />,
    icon: <IconTableColumn className="h-5 w-5 text-green-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton className="h-28 w-full rounded-xl" />,
    icon: <IconArrowWaveRightUp className="h-5 w-5 text-orange-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton className="h-28 w-full rounded-xl" />,
    icon: <IconBoxAlignTopLeft className="h-5 w-5 text-teal-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton className="h-28 w-full rounded-xl" />,
    icon: <IconBoxAlignRightFilled className="h-5 w-5 text-red-500" />,
  },
];

export default function WorkshopBento() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 font-[Inter]">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Workshops & Events
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
          Comprehensive workshops and events for <span className="font-semibold text-blue-600">spiritual growth</span> and wellness.
        </p>
      </div>

      <BentoGrid className="max-w-5xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
