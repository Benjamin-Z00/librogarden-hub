export default function Page() {
  return (
    <main className="container py-16">
      <section className="py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">3 分钟发现你的梦想职业</h1>
        <p className="text-[#93A0C5] max-w-2xl mb-8">
          基于 <b>RIASEC</b> + <b>大五人格（Mini‑IPIP）</b> + <b>O*NET 岗位图谱</b>，给出可执行的职业方向与技能差距建议。
        </p>
        <a className="a-cta" href="https://careerpulse.librogarden.com/assess?utm_source=hub&utm_medium=hero&utm_campaign=homepage">
          立即开始测评
        </a>
      </section>
      <section className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="font-semibold mb-2">RIASEC 兴趣</h3>
          <p className="text-[#93A0C5]">匹配 Holland 六型兴趣与岗位环境。</p>
        </div>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10"></div>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="font-semibold mb-2">O*NET 岗位匹配</h3>
          <p className="text-[#93A0C5]">展示 10–20 个职位 + 核心任务/技能建议。</p>
        </div>
      </section>
    </main>
  );
}
