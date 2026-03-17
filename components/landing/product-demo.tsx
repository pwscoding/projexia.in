"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, Pause, LayoutDashboard, Globe, FolderOpen } from "lucide-react";

const previewTabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "client", label: "Client View", icon: Globe },
  { id: "files", label: "File System", icon: FolderOpen },
];

function DashboardPreview() {
  return (
    <div className="rounded-xl border border-border bg-white shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-amber-400" />
          <div className="size-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3">
          <div className="h-5 rounded bg-white border border-border flex items-center px-2">
            <span className="text-[9px] text-muted-foreground">app.projexia.in/dashboard</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[140px] border-r border-border p-3 space-y-1 bg-muted/20 hidden sm:block">
          {["Dashboard", "Projects", "Clients", "Team", "Time", "Invoices"].map((item, i) => (
            <div key={item} className={`flex items-center gap-2 px-2 py-1.5 rounded text-[9px] ${i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"}`}>
              <div className={`size-3 rounded ${i === 0 ? "bg-primary/20" : "bg-muted"}`} />
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Projects", val: "12", color: "bg-blue-500" },
              { label: "Tasks", val: "48", color: "bg-green-500" },
              { label: "Team", val: "8", color: "bg-purple-500" },
              { label: "Revenue", val: "2.4L", color: "bg-amber-500" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-border p-2">
                <div className="text-[8px] text-muted-foreground">{s.label}</div>
                <div className="text-sm font-bold text-foreground mt-0.5">{s.val}</div>
                <div className="h-1 w-full rounded-full bg-muted mt-1.5">
                  <div className={`h-1 rounded-full ${s.color}`} style={{ width: "65%" }} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Website Redesign", "Mobile App", "Brand Strategy", "SEO Campaign"].map((p, i) => (
              <div key={p} className="rounded-lg border border-border p-2.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-medium text-foreground">{p}</span>
                  <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium ${i === 0 ? "bg-green-100 text-green-700" : i === 1 ? "bg-blue-100 text-blue-700" : i === 2 ? "bg-amber-100 text-amber-700" : "bg-purple-100 text-purple-700"}`}>
                    {i === 0 ? "Active" : i === 1 ? "In Progress" : i === 2 ? "On Hold" : "Active"}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted">
                  <div className="h-1.5 rounded-full bg-primary/60" style={{ width: `${30 + i * 18}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientViewPreview() {
  return (
    <div className="rounded-xl border border-border bg-white shadow-lg overflow-hidden">
      <div className="h-10 bg-indigo-600 flex items-center px-4 gap-2">
        <div className="size-5 rounded bg-white/20 flex items-center justify-center">
          <span className="text-[6px] font-bold text-white">YA</span>
        </div>
        <span className="text-[10px] font-medium text-white">Your Agency</span>
        <div className="ml-auto flex gap-3">
          {["Dashboard", "Projects", "Approvals", "Invoices", "Files"].map((t, i) => (
            <span key={t} className={`text-[8px] whitespace-nowrap hidden sm:inline ${i === 0 ? "text-white font-medium" : "text-white/60"}`}>{t}</span>
          ))}
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active Projects", val: "3" },
            { label: "Pending Approvals", val: "5" },
            { label: "Due Invoices", val: "1" },
          ].map((c) => (
            <div key={c.label} className="rounded-lg border border-border p-2 text-center">
              <div className="text-sm font-bold text-foreground">{c.val}</div>
              <div className="text-[7px] text-muted-foreground">{c.label}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border p-3">
          <div className="text-[9px] font-medium text-foreground mb-2">Recent Updates</div>
          {["Website wireframes approved", "New milestone: Phase 2", "Invoice #023 paid"].map((u, i) => (
            <div key={u} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
              <div className={`size-1.5 rounded-full ${i === 0 ? "bg-green-500" : i === 1 ? "bg-blue-500" : "bg-emerald-500"}`} />
              <span className="text-[8px] text-muted-foreground flex-1">{u}</span>
              <span className="text-[7px] text-muted-foreground">{i === 0 ? "2h ago" : i === 1 ? "1d ago" : "3d ago"}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] font-medium text-foreground">Homepage Design v3</div>
              <div className="text-[7px] text-muted-foreground">Awaiting your approval</div>
            </div>
            <div className="flex gap-1.5">
              <div className="h-5 px-2 rounded bg-green-600 flex items-center">
                <span className="text-[7px] text-white font-medium">Approve</span>
              </div>
              <div className="h-5 px-2 rounded bg-white border border-border flex items-center">
                <span className="text-[7px] text-muted-foreground font-medium">Reject</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileSystemPreview() {
  return (
    <div className="rounded-xl border border-border bg-white shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-amber-400" />
          <div className="size-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3">
          <div className="h-5 rounded bg-white border border-border flex items-center px-2">
            <span className="text-[9px] text-muted-foreground">app.projexia.in/files</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-semibold text-foreground">Project Files</div>
          <div className="flex gap-2">
            <div className="h-6 px-2 rounded bg-muted flex items-center">
              <span className="text-[8px] text-muted-foreground">All Projects</span>
            </div>
            <div className="h-6 px-3 rounded-md bg-primary flex items-center">
              <span className="text-[8px] text-white font-medium">Upload</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: "Homepage-v3.fig", type: "Figma", size: "2.4 MB", color: "bg-purple-100 text-purple-600" },
            { name: "Brand-Guide.pdf", type: "PDF", size: "8.1 MB", color: "bg-red-100 text-red-600" },
            { name: "Proposal.docx", type: "Word", size: "1.2 MB", color: "bg-blue-100 text-blue-600" },
            { name: "Invoice-042.pdf", type: "PDF", size: "340 KB", color: "bg-red-100 text-red-600" },
            { name: "Logo-Final.png", type: "Image", size: "4.7 MB", color: "bg-green-100 text-green-600" },
            { name: "Wireframes.fig", type: "Figma", size: "5.3 MB", color: "bg-purple-100 text-purple-600" },
          ].map((file) => (
            <div key={file.name} className="rounded-lg border border-border p-2.5">
              <div className={`size-8 rounded-lg ${file.color} flex items-center justify-center mb-2`}>
                <span className="text-[7px] font-bold">{file.type}</span>
              </div>
              <div className="text-[9px] font-medium text-foreground truncate">{file.name}</div>
              <div className="text-[7px] text-muted-foreground mt-0.5">{file.size}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const previewComponents: Record<string, () => React.JSX.Element> = {
  dashboard: DashboardPreview,
  client: ClientViewPreview,
  files: FileSystemPreview,
};

export function ProductDemo() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, []);

  const PreviewComponent = previewComponents[activeTab];

  return (
    <section id="demo" ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            See it in action
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Watch how Projexia works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            A quick look at the platform — from your dashboard to what your clients see.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <div className="rounded-xl border border-border shadow-lg overflow-hidden bg-white">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="size-2.5 sm:size-3 rounded-full bg-red-400" />
                <div className="size-2.5 sm:size-3 rounded-full bg-amber-400" />
                <div className="size-2.5 sm:size-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-2 sm:mx-4">
                <div className="h-5 sm:h-6 rounded-md bg-white border border-slate-200 flex items-center px-2 sm:px-3">
                  <span className="text-[8px] sm:text-[10px] text-slate-400">app.projexia.in</span>
                </div>
              </div>
            </div>
            <div className="relative group/video">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/intro.mp4" type="video/mp4" />
              </video>
              <button
                onClick={togglePlay}
                className="absolute bottom-3 right-3 size-9 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity hover:bg-black/80"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="size-4" /> : <Play className="size-4 ml-0.5" />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* UI Preview Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Explore the interface
          </h3>
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-xl border border-border p-1.5 shadow-sm">
              {previewTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <tab.icon className="size-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <PreviewComponent />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
