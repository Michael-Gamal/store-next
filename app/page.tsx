import BestSaller from "@/components/BestSaller";
import Hero from "../components/Hero";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <div className=" text-4xl mx-auto">
      <Hero />
      <BestSaller />
      <Collection />
    </div>
  );
}
