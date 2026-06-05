import { Search, Menu, X, BookOpen } from "lucide-react";

interface Props {
  onSearch: () => void;
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export function Header({ onSearch, onMenuToggle, menuOpen }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="flex items-center gap-3 px-4 h-16">
        {/* Mobile menu toggle */}
        <button
          data-testid="menu-toggle"
          onClick={onMenuToggle}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo + Title */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img
            src="/logo.png"
            alt="St Pats Donabate"
            className="h-10 w-10 rounded-full object-contain bg-white/10 p-0.5 flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="font-bold text-base leading-tight truncate" style={{ fontFamily: 'var(--app-font-serif)' }}>
              St Pats Donabate
            </p>
            <p className="text-secondary text-xs font-medium leading-tight flex items-center gap-1">
              <BookOpen size={10} />
              Juvenile Handbook 2026
            </p>
          </div>
        </div>

        {/* Search button */}
        <button
          data-testid="search-button"
          onClick={onSearch}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-3 py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground border border-white/10"
          aria-label="Open search"
        >
          <Search size={15} />
          <span className="hidden sm:inline text-xs">Search handbook…</span>
          <kbd className="hidden md:inline text-xs bg-white/10 px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>
      </div>
    </header>
  );
}
