import Link from "next/link";
import { Ticket } from "../types/Ticket";

async function getTickets(): Promise<Ticket[]> {
  // Imitate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map(({ id, title, body, priority }: Ticket) => (
        <div key={id} className="card highlight my-5">
          <Link href={`/tickets/${id}`}>
            <h3>{title}</h3>
            <p>{body.slice(0, 200)}...</p>
            <div className={`pill ${priority}`}>{priority} priority</div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
}
