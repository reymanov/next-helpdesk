import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div className="w-full flex align-center justify-between">
          <div>
            <h2>Tickets</h2>

            <small>Currently open tickets</small>
          </div>

          <Link href="/tickets/create">
            <button className="btn-primary h-10">New Ticket</button>
          </Link>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
