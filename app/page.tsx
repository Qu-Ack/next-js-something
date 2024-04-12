import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from 'next/link'


export const metadata: Metadata = {
  title: "To Do Something"
}


export default function Home() {
  return (
    <div className="flex flex-col ">
      <header className="flex items-start justify-end mr-[256px] mt-11 mb-11">
        <Link href="/create">
          <Button variant="default" size="sm">Add A Task</Button>
        </Link>
      </header>
      <main className="mt-[16px] ml-[256px]">
        Task display
      </main>
    </div>
  );
}
