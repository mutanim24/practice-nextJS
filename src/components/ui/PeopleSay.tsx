import { cn } from "@/lib/utils";
import Marquee from "./marquee";
// import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://images.pexels.com/photos/26150470/pexels-photo-26150470/free-photo-of-brunette-man-posing-wearing-black-suit-jacket-and-white-shirt-with-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://images.pexels.com/photos/26150470/pexels-photo-26150470/free-photo-of-brunette-man-posing-wearing-black-suit-jacket-and-white-shirt-with-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://images.pexels.com/photos/15023413/pexels-photo-15023413/free-photo-of-businessman-in-striped-shirt-and-suit-jacket.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://images.pexels.com/photos/26150470/pexels-photo-26150470/free-photo-of-brunette-man-posing-wearing-black-suit-jacket-and-white-shirt-with-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://images.pexels.com/photos/15023413/pexels-photo-15023413/free-photo-of-businessman-in-striped-shirt-and-suit-jacket.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden p-4",
        // light styles
        " bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        " dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        ""
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
        <h1 className="text-4xl font-bold mb-5">What People Say</h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-dark dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-dark dark:from-background"></div>
    </div>
  );
}
