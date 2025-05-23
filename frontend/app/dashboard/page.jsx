import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import submissions from "./submissions/page";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  if (!session.user.approved) {
    return <p>Your account is not approved yet.</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Show Submissions only to admin */}
      {session.user.role === "admin" && (
        <nav>
          <Link href="/dashboard/submissions">
            <button>View Submissions</button>
          </Link>
        </nav>
      )}

      {/* Other dashboard content visible to everyone approved */}
      <p>Welcome, {session.user.fullName}</p>
    </div>
  );
}
