import Lessons from "@/components/lesson/Lessons";

export default function Home() {
  /* @ts-expect-error Server Component */
  return <Lessons />;
}
