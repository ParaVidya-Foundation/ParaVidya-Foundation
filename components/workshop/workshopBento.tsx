
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconBrain,
  IconFlower,
} from "@tabler/icons-react";
import { Skeleton } from "../../components/ui/skeleton";

const items = [
  {
    title: "Spiritual Workshops",
    description: "Learn Vedic rituals, practices, and spiritual wisdom for inner growth.",
    link: "/workshop/spiritual-workshops",
    header: <Skeleton className="h-28 w-full rounded-xl bg-orange-100" />,
    icon: <IconFlower className="h-6 w-6 text-orange-600" />,
  },
  {
    title: "Sanskrit Workshops",
    description: "Master the divine language of the Vedas through guided learning.",
    link: "/workshop/Sanskrit-workshops",
    header: <Skeleton className="h-28 w-full rounded-xl bg-orange-100" />,
    icon: <IconBrain className="h-6 w-6 text-orange-600" />,
  },
  {
    title: "Meditation Sessions",
    description: "Guided meditation for peace, focus, and spiritual awakening.",
    link: "/workshop/meditation-sessions",
    header: <Skeleton className="h-28 w-full rounded-xl bg-orange-100" />,
    icon: <IconBrain className="h-6 w-6 text-orange-600" />,
  },
  {
    title: "Yoga Workshops",
    description: "Balance body, mind, and soul with authentic yoga practices.",
    link: "/workshop/yoga-workshops",
    header: <Skeleton className="h-28 w-full rounded-xl bg-orange-100" />,
    icon: <IconBrain className="h-6 w-6 text-orange-600" />,
  },
  {
    title: "Ayurveda Workshops",
    description: "Discover holistic health through Ayurvedic knowledge and remedies.",
    link: "/workshop/ayurveda-workshops",
    header: <Skeleton className="h-28 w-full rounded-xl bg-orange-100" />,
    icon: <IconBrain className="h-6 w-6 text-orange-600" />,
  },
  {
    title: "Mantra Workshops",
    description: "Experience the power of sacred chants for healing and energy.",
    link: "/workshop/mantra-workshops",
    header: <Skeleton className="h-28 w-full rounded-xl bg-orange-100" />,
    icon: <IconBrain className="h-6 w-6 text-orange-600" />,
  },
  {
    title: "Sadhna Programs",
    description: "Deepen your practice through guided sadhna and self-discipline.",
    link: "/workshop/sadhna",
    header: <Skeleton className="h-28 w-full rounded-xl bg-orange-100" />,
    icon: <IconBrain className="h-6 w-6 text-orange-600" />,
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
          Comprehensive workshops and events for{" "}
          <span className="font-semibold text-orange-600">
            spiritual growth
          </span>{" "}
          and wellness.
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
