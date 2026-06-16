import { useState, useEffect, useCallback } from "react";
import { sections } from "../data/sections";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MarkdownContent } from "../components/MarkdownContent";
import { ChecklistsPage } from "../components/ChecklistsPage";
import { AppendicesPage } from "../components/AppendicesPage";
import { SearchModal } from "../components/SearchModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HandbookPage() {
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);
  const [activeSubsectionId, setActiveSubsectionId] = useState(sections[0].subsections[0].id);
  const [highlightQuery, setHighlightQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeSection = sections.find(s => s.id === activeSectionId) ?? sections[0];
  const activeSubsection = activeSection.subsections.find(s => s.id === activeSubsectionId) ?? activeSection.subsections[0];

  const navigate = useCallback((sectionId: string, subsectionId: string, highlight?: string) => {
    setActiveSectionId(sectionId);
    setActiveSubsectionId(subsectionId);
    setHighlightQuery(highlight ?? "");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Clear highlight when navigating without search
  const navigatePlain = useCallback((sectionId: string, subsectionId: string) => {
    navigate(sectionId, subsectionId, "");
  }, [navigate]);

  // Flat list of all subsections for prev/next
  const allSubs = sections.flatMap(s => s.subsections.map(sub => ({ sectionId: s.id, subsectionId: sub.id })));
  const currentIdx = allSubs.findIndex(x => x.sectionId === activeSectionId && x.subsectionId === activeSubsectionId);
  const prevSub = currentIdx > 0 ? allSubs[currentIdx - 1] : null;
  const nextSub = currentIdx < allSubs.length - 1 ? allSubs[currentIdx + 1] : null;

  const prevSection = prevSub ? sections.find(s => s.id === prevSub.sectionId) : null;
  const prevSubsection = prevSub ? prevSection?.subsections.find(s => s.id === prevSub.subsectionId) : null;
  const nextSection = nextSub ? sections.find(s => s.id === nextSub.sectionId) : null;
  const nextSubsection = nextSub ? nextSection?.subsections.find(s => s.id === nextSub.subsectionId) : null;

  // Keyboard shortcut for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const isChecklistsPage = activeSectionId === 's6' && activeSubsectionId === '6-2';
  const isAppendicesPage = activeSectionId === 's6' && activeSubsectionId === '6-3';

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={() => setSearchOpen(true)}
        onMenuToggle={() => setSidebarOpen(v => !v)}
        menuOpen={sidebarOpen}
      />

      {/* Mobile sidebar overlay (small screens: full overlay) */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative w-72 flex-shrink-0 h-full shadow-2xl">
            <Sidebar
              activeSectionId={activeSectionId}
              activeSubsectionId={activeSubsectionId}
              onNavigate={(s, sub) => { navigatePlain(s, sub); setSidebarOpen(false); }}
              mobile
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Layout */}
      <div className="flex h-screen pt-16">
        {/* Desktop sidebar (toggleable) */}
        {sidebarOpen && (
          <aside className="hidden lg:flex w-64 xl:w-72 flex-shrink-0 fixed left-0 top-16 bottom-0 z-30">
            <div className="w-full h-full">
              <Sidebar
                activeSectionId={activeSectionId}
                activeSubsectionId={activeSubsectionId}
                onNavigate={navigatePlain}
              />
            </div>
          </aside>
        )}

        {/* Main content */}
        <main
          data-testid="main-content"
          className={`flex-1 min-w-0 overflow-y-auto transition-all ${sidebarOpen ? 'lg:ml-64 xl:ml-72' : ''}`}
        >
          {/* Breadcrumb */}
          <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-border px-6 py-2.5 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-primary">Section {activeSection.number}</span>
            <ChevronRight size={12} />
            <span className="font-medium text-foreground truncate">{activeSubsection.title}</span>
            {highlightQuery && (
              <span className="ml-auto flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                Highlighting: "{highlightQuery}"
                <button
                  onClick={() => setHighlightQuery("")}
                  className="hover:text-yellow-600 font-bold leading-none"
                >×</button>
              </span>
            )}
          </div>

          {/* Content area */}
          <div className="px-6 py-8 max-w-4xl">
            {isChecklistsPage ? (
              <ChecklistsPage />
            ) : isAppendicesPage ? (
              <AppendicesPage />
            ) : (
              <div>
                {/* Section banner */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl flex-shrink-0">
                    {activeSection.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                      Section {activeSection.number}
                    </p>
                    <p className="text-lg font-bold text-primary" style={{ fontFamily: 'var(--app-font-serif)' }}>
                      {activeSection.title}
                    </p>
                  </div>
                </div>

                {/* Sub-section tabs */}
                <div className="flex gap-1.5 flex-wrap mb-7">
                  {activeSection.subsections.map(sub => (
                    <button
                      key={sub.id}
                      data-testid={`tab-${sub.id}`}
                      onClick={() => navigatePlain(activeSectionId, sub.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        sub.id === activeSubsectionId
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                      }`}
                    >
                      {sub.number} {sub.title}
                    </button>
                  ))}
                </div>

                {/* Markdown body */}
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8">
                  <MarkdownContent content={activeSubsection.content} highlight={highlightQuery} />
                </div>
              </div>
            )}

            {/* Prev / Next navigation */}
            <div className="mt-10 flex items-stretch gap-3">
              {prevSub && prevSubsection && prevSection ? (
                <button
                  data-testid="prev-button"
                  onClick={() => navigatePlain(prevSub.sectionId, prevSub.subsectionId)}
                  className="flex-1 flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 hover:border-primary/40 hover:shadow-sm transition-all text-left group"
                >
                  <ChevronLeft size={18} className="text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Previous</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {prevSubsection.number} {prevSubsection.title}
                    </p>
                  </div>
                </button>
              ) : <div className="flex-1" />}

              {nextSub && nextSubsection && nextSection ? (
                <button
                  data-testid="next-button"
                  onClick={() => navigatePlain(nextSub.sectionId, nextSub.subsectionId)}
                  className="flex-1 flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 hover:border-primary/40 hover:shadow-sm transition-all text-right justify-end group"
                >
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Next</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {nextSubsection.number} {nextSubsection.title}
                    </p>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                </button>
              ) : <div className="flex-1" />}
            </div>
          </div>
        </main>
      </div>

      {/* Search Modal */}
      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
