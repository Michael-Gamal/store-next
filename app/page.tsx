import BestSaller from "@/components/BestSaller";
import Hero from "../components/Hero";
import Collection from "@/components/Collection";
import Modiweek from "@/components/Modiweek";
import Sustainability from "@/components/Sustainability";
import FollowUs from "@/components/FollowUs";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <BestSaller />
      <Collection />
      <Modiweek />
      <Sustainability />
      <FollowUs />
    </main>
  );
}
