import prisma from "@/prisma/client";
import IssueSummary from "./Home/IssueSummary";
import LatestIssues from "./Home/LatestIssues";
import IssueChart from "./Home/IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <div className="space-y-3">
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      <div className="max-w-xl space-y-3">
        <LatestIssues />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </div>
    </div>
  );
}
