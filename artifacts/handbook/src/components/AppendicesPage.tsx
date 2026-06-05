import { useState, useEffect } from "react";
import { appendices, appendixCategories } from "../data/appendices";
import { FileText, ExternalLink, Clock, Filter, CheckCircle2 } from "lucide-react";

function useFileAvailable(path: string): boolean | null {
  const [available, setAvailable] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch(path, { method: "HEAD" })
      .then(res => { if (!cancelled) setAvailable(res.ok); })
      .catch(() => { if (!cancelled) setAvailable(false); });
    return () => { cancelled = true; };
  }, [path]);
  return available;
}

interface AppendixCardProps {
  appendix: typeof appendices[0];
}

function AppendixCard({ appendix }: AppendixCardProps) {
  const pdfPath = `/appendices/${appendix.filename}`;
  const available = useFileAvailable(pdfPath);

  return (
    <div
      data-testid={`appendix-card-${appendix.id}`}
      className={`bg-white rounded-xl border shadow-sm hover:shadow-md transition-all group overflow-hidden ${
        available ? 'border-primary/20 hover:border-primary/40' : 'border-border hover:border-border'
      }`}
    >
      {/* Category ribbon */}
      <div className="px-4 pt-3 pb-2">
        <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/20">
          {appendix.category}
        </span>
      </div>

      {/* Document icon + number */}
      <div className="flex items-start gap-3 px-4 pb-3">
        <div className={`w-10 h-12 flex-shrink-0 rounded-lg flex flex-col items-center justify-center border transition-colors ${
          available
            ? 'bg-primary/10 border-primary/20 group-hover:bg-primary/15'
            : 'bg-muted/50 border-border'
        }`}>
          <FileText size={16} className={available ? 'text-primary' : 'text-muted-foreground'} />
          <span className={`text-xs font-bold mt-0.5 ${available ? 'text-primary' : 'text-muted-foreground'}`}>
            {appendix.number}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-sm font-semibold leading-snug transition-colors line-clamp-3 ${
            available ? 'text-foreground group-hover:text-primary' : 'text-foreground/80'
          }`}>
            {appendix.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pb-3">
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {appendix.description}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-border px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs">
          {available === null ? (
            <span className="text-muted-foreground">Checking...</span>
          ) : available ? (
            <>
              <CheckCircle2 size={11} className="text-green-600" />
              <span className="text-green-700 font-medium">Available</span>
            </>
          ) : (
            <>
              <Clock size={11} className="text-muted-foreground" />
              <span className="text-muted-foreground">Pending upload</span>
            </>
          )}
        </div>

        {available ? (
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`appendix-link-${appendix.id}`}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary/70 font-medium transition-colors"
          >
            <ExternalLink size={11} />
            Open PDF
          </a>
        ) : (
          <span
            data-testid={`appendix-link-${appendix.id}`}
            className="flex items-center gap-1 text-xs text-muted-foreground/50 cursor-not-allowed"
          >
            <ExternalLink size={11} />
            Open
          </span>
        )}
      </div>
    </div>
  );
}

export function AppendicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = appendices.filter(a => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch = !searchTerm || a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--app-font-serif)' }}>
          Appendices
        </h1>
        <p className="text-muted-foreground text-sm">
          {appendices.length} reference documents — uploaded PDFs can be opened directly; pending documents show an upload notice.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filter appendices..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeCategory === "All" ? 'bg-primary text-primary-foreground' : 'bg-white border border-border text-foreground hover:bg-muted'}`}
          >
            All ({appendices.length})
          </button>
          {appendixCategories.map(cat => {
            const count = appendices.filter(a => a.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-white border border-border text-foreground hover:bg-muted'}`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Appendix cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(appendix => (
          <AppendixCard key={appendix.id} appendix={appendix} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <FileText size={48} className="mx-auto text-muted-foreground/40 mb-4" />
          <p className="text-muted-foreground">No appendices match your search.</p>
        </div>
      )}

      <div className="mt-8 p-4 bg-muted/50 rounded-xl border border-border">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">To upload documents:</strong> Drop PDF files into the{' '}
          <code className="bg-white px-1 py-0.5 rounded text-xs font-mono border border-border">
            public/appendices/
          </code>{' '}
          folder using the exact filenames shown on each card. Uploaded documents will be automatically detected and available to open.
        </p>
      </div>
    </div>
  );
}
