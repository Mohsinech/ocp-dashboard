import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { HeaderDashboard } from "@/components/index";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  if (!session.user.approved) {
    return <p>Your account is not approved yet.</p>;
  }

  return (
    <main>
      <HeaderDashboard />
      <p>Welcome to your dashboard! Please select a tab.</p>
    </main>
  );
}
