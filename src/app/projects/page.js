import RepoProjects from "../__component/RepoProjects";

export default function page() {
  return (
    <main className="p-6">
      <h1 className="text-slate-400 text-2xl font-bold mb-4">My Projects</h1>
      <RepoProjects />
    </main>
  );
}
