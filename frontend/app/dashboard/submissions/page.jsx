import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { fetchSubmissionsFromDB } from "@/lib/submissions";
import SubmissionsList from "@/components/SubmissionLIst/SubmissionList";

export default async function submissions() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  // Redirect non-admins
  if (!user || user.role !== "admin") {
    redirect("/dashboard");
  }

  const submissions = await fetchSubmissionsFromDB();

  return (
    <div>
      <h1>Pending Submissions</h1>
      <SubmissionsList submissions={submissions} />
    </div>
  );
}
