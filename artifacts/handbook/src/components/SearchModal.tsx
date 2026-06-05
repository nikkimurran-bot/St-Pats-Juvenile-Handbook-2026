import { useState, useEffect, useRef, useCallback } from "react";
import { searchContent } from "../data/sections";
import { Search, X, ArrowRight, BookOpen } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string, subsectionId: string) => void;
}

export function SearchModal({ open, onClose, onNavigate }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ReturnType<typeof searchContent>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchContent(query));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = useCallback((sectionId: string, subsectionId: string) => {
    onNavigate(sectionId, subsectionId);
    onClose();
    setQuery("");
  }, [onNavigate, onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        data-testid="search-modal"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
          <Search size={20} className="text-primary flex-shrink-0" />
          <input
            ref={inputRef}
            data-testid="search-input"
            type="text"
            placeholder="Search the handbook..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 text-base outline-none text-foreground placeholder:text-muted-foreground bg-transparent"
          />
          {query && (
            <button onClick={() => { setQuery(""); setResults([]); }} className="p-1 rounded-md hover:bg-muted text-muted-foreground">
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground text-xs font-medium border border-border"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {results.length > 0 && (
            <div className="py-2">
              <p className="text-xs text-muted-foreground px-5 py-1.5 font-medium uppercase tracking-wider">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              {results.map((r, idx) => (
                <button
                  key={idx}
                  data-testid={`search-result-${idx}`}
                  onClick={() => handleSelect(r.sectionId, r.subsectionId)}
                  className="w-full flex items-start gap-4 px-5 py-3 hover:bg-muted/50 transition-colors text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen size={14} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-secondary">{r.subsectionNumber}</span>
                      <span className="text-sm font-semibold text-foreground truncate">{r.subsectionTitle}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Section {r.sectionNumber} — {r.sectionTitle}</p>
                    <p className="text-xs text-foreground/70 line-clamp-2 leading-relaxed">{r.excerpt}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground flex-shrink-0 mt-1.5 group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="px-5 py-12 text-center">
              <Search size={32} className="mx-auto text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground font-medium">No results for "{query}"</p>
              <p className="text-sm text-muted-foreground/60 mt-1">Try a different search term</p>
            </div>
          )}

          {query.length < 2 && (
            <div className="px-5 py-10 text-center">
              <Search size={32} className="mx-auto text-muted-foreground/30 mb-3" />
              <p className="text-sm text-muted-foreground">Type at least 2 characters to search</p>
              <div className="flex flex-wrap gap-2 justify-center mt-5">
                {['safeguarding', 'checklist', 'streaming', 'Foireann', 'Féile', 'mouthguard', 'LTAD', 'grading'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs bg-muted hover:bg-muted/80 text-foreground px-3 py-1.5 rounded-full border border-border transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
