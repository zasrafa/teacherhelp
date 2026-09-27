
const worksheets = [
  { title: "The Future of Gaming", student: "John Smith", level: "B1", type: "Reading", date: "Today", icon: "📖" },
  { title: "Past Perfect Challenge", student: "Maria Silva", level: "B2", type: "Grammar", date: "Yesterday", icon: "✏️" },
  { title: "Travel Vocabulary", student: "Pedro Santos", level: "A2", type: "Vocabulary", date: "2 days ago", icon: "📚" },
  { title: "Technology and Society", student: "John Smith", level: "B1", type: "Reading", date: "3 days ago", icon: "🌐" },
  { title: "Food and Culture", student: "Ana Costa", level: "B1", type: "Mixed", date: "4 days ago", icon: "🍎" },
];

const classes = [
  { day: "MON", date: "12", month: "MAY", name: "John Smith", time: "10:00 AM – 11:00 AM", detail: "Grammar · B1" },
  { day: "TUE", date: "13", month: "MAY", name: "Maria Silva", time: "2:00 PM – 3:00 PM", detail: "Vocabulary · B2" },
  { day: "THU", date: "15", month: "MAY", name: "Pedro Santos", time: "11:00 AM – 12:00 PM", detail: "Speaking · A2" },
  { day: "FRI", date: "16", month: "MAY", name: "Ana Costa", time: "4:00 PM – 5:00 PM", detail: "Reading · B1" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white p-5 md:flex md:flex-col">
          <div className="mb-12 flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
              🎓
            </div>
            <span className="text-xl font-bold tracking-tight">Teacher Help</span>
          </div>

          <nav className="flex flex-col gap-2">
            {[
              ["⌂", "Dashboard"],
              ["▤", "Worksheets"],
              ["♙", "Students"],
              ["▱", "Library"],
            ].map(([icon, label], i) => (
              <a
                key={label}
                href="#"
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                  i === 0
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                <span className="text-xl">{icon}</span>
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-2">
            <a href="#" className="block rounded-xl px-4 py-3 text-sm text-slate-500 hover:bg-slate-50">
              ⚙️　Settings
            </a>
            <a href="#" className="block rounded-xl px-4 py-3 text-sm text-slate-500 hover:bg-slate-50">
              ↪　Log Out
            </a>
            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <div className="mb-2 text-xl">💡</div>
              <p className="text-sm font-semibold">Need inspiration?</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Try creating a worksheet based on your students' interests.
              </p>
              <a href="#" className="mt-4 block rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-semibold text-white">
                Create Worksheet →
              </a>
            </div>
          </div>
        </aside>

        {/* Main area */}
        <div className="min-w-0 flex-1">
          {/* Top bar */}
          <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
            <div className="font-bold text-blue-700 md:hidden">🎓 Teacher Help</div>
            <div className="hidden text-sm text-slate-400 md:block">
              Your teaching workspace
            </div>
            <div className="flex items-center gap-4">
              <button aria-label="Notifications" className="text-lg text-slate-500">♧</button>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                  JD
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold">John Doe</p>
                  <p className="text-xs text-slate-500">Teacher</p>
                </div>
                <span className="text-slate-400">⌄</span>
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-[1600px] p-5 md:p-8">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_350px]">
              {/* Main column */}
              <div className="min-w-0">
                <section className="mb-7">
                  <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Hello, John 👋
                  </h1>
                  <p className="mt-2 text-sm text-slate-500 md:text-base">
                    Ready to create something great today? Your students are counting on you.
                  </p>
                </section>

                {/* Quick actions */}
                <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
                  {[
                    { icon: "📄", title: "Create Worksheet", text: "Generate a new worksheet with AI.", color: "bg-blue-100" },
                    { icon: "♙", title: "Add Student", text: "Create a student profile and track their progress.", color: "bg-emerald-100" },
                    { icon: "📁", title: "View Worksheets", text: "Access your saved teaching materials.", color: "bg-violet-100" },
                    { icon: "📖", title: "View Students", text: "Manage your student profiles.", color: "bg-orange-100" },
                  ].map((item) => (
                    <a
                      key={item.title}
                      href="#"
                      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    >
                      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.color} text-xl`}>
                        {item.icon}
                      </div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="mt-2 min-h-10 text-sm leading-5 text-slate-500">{item.text}</p>
                      <div className="mt-4 text-right text-blue-600 transition group-hover:translate-x-1">→</div>
                    </a>
                  ))}
                </section>

                {/* Statistics */}
                <section className="mb-6 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-4">
                  {[
                    ["📄", "12", "Total Worksheets", "↑ 3 this week"],
                    ["♙", "5", "Total Students", "↑ 1 this week"],
                    ["◷", "8", "Classes This Week", "↑ 2 more than last week"],
                    ["☆", "100%", "On Track", "Student engagement"],
                  ].map(([icon, value, label, note], i) => (
                    <div key={label} className={`p-2 ${i > 1 ? "border-t border-slate-100 lg:border-t-0" : ""} ${i % 2 === 1 ? "border-l border-slate-100 pl-5" : ""} ${i === 2 ? "lg:border-l lg:pl-5" : ""}`}>
                      <div className="mb-4 text-xl">{icon}</div>
                      <p className="text-2xl font-bold">{value}</p>
                      <p className="mt-1 text-sm text-slate-500">{label}</p>
                      <p className="mt-2 text-xs text-emerald-600">{note}</p>
                    </div>
                  ))}
                </section>

                {/* Recent worksheets */}
                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
                    <h2 className="font-bold">▤　Recent Worksheets</h2>
                    <a href="#" className="text-sm font-medium text-blue-600">View all →</a>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] text-left text-sm">
                      <thead className="bg-slate-50 text-xs text-slate-500">
                        <tr>
                          <th className="px-5 py-3 font-medium">Title</th>
                          <th className="px-3 py-3 font-medium">Level</th>
                          <th className="px-3 py-3 font-medium">Activity Type</th>
                          <th className="px-3 py-3 font-medium">Created</th>
                          <th className="px-5 py-3 text-right font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {worksheets.map((w) => (
                          <tr key={w.title} className="border-t border-slate-100 hover:bg-slate-50">
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">{w.icon}</span>
                                <div>
                                  <p className="font-medium">{w.title}</p>
                                  <p className="mt-1 text-xs text-slate-400">For: {w.student}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-3 py-4">
                              <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{w.level}</span>
                            </td>
                            <td className="px-3 py-4 text-slate-600">{w.type}</td>
                            <td className="px-3 py-4 text-slate-500">{w.date}</td>
                            <td className="px-5 py-4 text-right">
                              <button className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100">Open</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              {/* Right column */}
              <aside className="space-y-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="font-bold">▣　Upcoming Classes</h2>
                    <a href="#" className="text-xs font-medium text-blue-600">View calendar →</a>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {classes.map((c) => (
                      <div key={c.name} className="flex items-center gap-3 py-4">
                        <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-blue-50">
                          <span className="text-[10px] text-slate-500">{c.day}</span>
                          <span className="text-lg font-bold">{c.date}</span>
                          <span className="text-[9px] text-slate-500">{c.month}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold">{c.name}</p>
                          <p className="mt-1 text-xs text-slate-500">{c.time}</p>
                          <p className="mt-1 text-xs text-slate-500">{c.detail}</p>
                        </div>
                        <span className="text-xl text-slate-400">›</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-bold">♧　Quick Tips</h2>
                    <a href="#" className="text-xs text-blue-600">View more →</a>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-sm leading-6 text-slate-600">
                      ✨ Try using your students' interests in the worksheet generator. It makes activities more engaging and effective!
                    </p>
                  </div>
                </section>

                <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                  <div className="text-3xl">🌱</div>
                  <h2 className="mt-5 text-xl font-bold leading-snug">
                    Great teachers<br />change lives.
                  </h2>
                  <p className="mt-3 text-sm text-slate-500">
                    Keep going — you're making a difference!
                  </p>
                  <div className="mt-6 text-right text-4xl">📚✏️</div>
                </section>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}