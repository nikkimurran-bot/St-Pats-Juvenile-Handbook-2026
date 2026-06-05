import { sections } from "../data/sections";
import { checklists } from "../data/checklists";
import { appendices } from "../data/appendices";
import { ChevronRight, ClipboardList, FileText, ExternalLink } from "lucide-react";

interface Props {
  activeSectionId: string;
  activeSubsectionId: string;
  onNavigate: (sectionId: string, subsectionId: string) => void;
  mobile?: boolean;
  onClose?: () => void;
}

const NAV_ICONS: Record<string, string> = {
  "s1": "🏟️",
  "s2": "👤",
  "s3": "⚽",
  "s4": "🏆",
  "s5": "🌿",
  "s6": "📚"
};

export function Sidebar({ activeSectionId, activeSubsectionId, onNavigate, mobile, onClose }: Props) {
  const handleNav = (sectionId: string, subsectionId: string) => {
    onNavigate(sectionId, subsectionId);
    if (mobile && onClose) onClose();
  };

  const checklistsActive = activeSectionId === 's6' && activeSubsectionId === '6-2';

  return (
    <nav
      data-testid="sidebar"
      className="h-full flex flex-col overflow-hidden"
      style={{ background: 'hsl(150 70% 10%)' }}
      aria-label="Handbook navigation"
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-white/10 flex-shrink-0">
        <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Contents</p>
      </div>

      {/* Pinned: Checklists tab */}
      <div className="px-3 pt-3 pb-1 flex-shrink-0">
        <button
          data-testid="nav-checklists-tab"
          onClick={() => handleNav('s6', '6-2')}
          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all ${
            checklistsActive
              ? 'bg-secondary shadow-md'
              : 'bg-secondary/15 hover:bg-secondary/25'
          }`}
        >
          <ClipboardList size={15} className={checklistsActive ? 'text-white flex-shrink-0' : 'text-secondary flex-shrink-0'} />
          <span className={`text-sm font-semibold ${checklistsActive ? 'text-white' : 'text-secondary'}`}>
            Mentor Checklists
          </span>
          <span className={`ml-auto text-xs font-bold px-1.5 py-0.5 rounded-full ${
            checklistsActive ? 'bg-white/20 text-white' : 'bg-secondary/20 text-secondary'
          }`}>
            {checklists.length}
          </span>
        </button>
      </div>

      <div className="px-3 pb-2 flex-shrink-0">
        <div className="border-t border-white/10 pt-2" />
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto sidebar-scroll py-1">
        {sections.map(section => {
          const isActive = section.id === activeSectionId;
          const isSpecial = section.id === 's6';

          return (
            <div key={section.id} className="mb-1">
              <button
                data-testid={`nav-section-${section.id}`}
                onClick={() => handleNav(section.id, section.subsections[0].id)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-all ${
                  isActive
                    ? 'bg-secondary/20 border-r-2 border-secondary'
                    : 'hover:bg-white/5'
                }`}
              >
                <span className="text-base leading-none flex-shrink-0">{NAV_ICONS[section.id]}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-secondary' : 'text-white/40'}`}>
                    Section {section.number}
                  </p>
                  <p className={`text-sm font-medium leading-tight truncate ${isActive ? 'text-white' : 'text-white/70'}`}>
                    {section.title}
                  </p>
                </div>
                <ChevronRight
                  size={14}
                  className={`flex-shrink-0 transition-transform ${isActive ? 'rotate-90 text-secondary' : 'text-white/20'}`}
                />
              </button>

              {isActive && (
                <div className="pb-1">
                  {section.subsections.map(sub => {
                    const subIsActive = sub.id === activeSubsectionId;

                    if (isSpecial && sub.id === '6-2') {
                      return (
                        <button
                          key={sub.id}
                          data-testid={`nav-sub-${sub.id}`}
                          onClick={() => handleNav(section.id, sub.id)}
                          className={`w-full flex items-center gap-2 pl-8 pr-3 py-2 text-left transition-colors group ${
                            subIsActive ? 'bg-white/10' : 'hover:bg-white/5'
                          }`}
                        >
                          <ClipboardList size={12} className={subIsActive ? 'text-secondary' : 'text-white/40 group-hover:text-white/60'} />
                          <span className={`text-xs leading-tight ${subIsActive ? 'text-white font-medium' : 'text-white/60'}`}>
                            {sub.number} {sub.title}
                          </span>
                          {subIsActive && <span className="ml-auto text-secondary text-xs font-bold">({checklists.length})</span>}
                        </button>
                      );
                    }

                    if (isSpecial && sub.id === '6-3') {
                      return (
                        <button
                          key={sub.id}
                          data-testid={`nav-sub-${sub.id}`}
                          onClick={() => handleNav(section.id, sub.id)}
                          className={`w-full flex items-center gap-2 pl-8 pr-3 py-2 text-left transition-colors group ${
                            subIsActive ? 'bg-white/10' : 'hover:bg-white/5'
                          }`}
                        >
                          <FileText size={12} className={subIsActive ? 'text-secondary' : 'text-white/40 group-hover:text-white/60'} />
                          <span className={`text-xs leading-tight ${subIsActive ? 'text-white font-medium' : 'text-white/60'}`}>
                            {sub.number} {sub.title}
                          </span>
                          {subIsActive && <span className="ml-auto text-secondary text-xs font-bold">({appendices.length})</span>}
                        </button>
                      );
                    }

                    if (isSpecial && sub.id === '6-1') {
                      return (
                        <button
                          key={sub.id}
                          data-testid={`nav-sub-${sub.id}`}
                          onClick={() => handleNav(section.id, sub.id)}
                          className={`w-full flex items-center gap-2 pl-8 pr-3 py-2 text-left transition-colors group ${
                            subIsActive ? 'bg-white/10' : 'hover:bg-white/5'
                          }`}
                        >
                          <ExternalLink size={12} className={subIsActive ? 'text-secondary' : 'text-white/40 group-hover:text-white/60'} />
                          <span className={`text-xs leading-tight ${subIsActive ? 'text-white font-medium' : 'text-white/60'}`}>
                            {sub.number} {sub.title}
                          </span>
                        </button>
                      );
                    }

                    return (
                      <button
                        key={sub.id}
                        data-testid={`nav-sub-${sub.id}`}
                        onClick={() => handleNav(section.id, sub.id)}
                        className={`w-full flex items-center gap-2 pl-8 pr-3 py-1.5 text-left transition-colors group ${
                          subIsActive ? 'bg-white/10' : 'hover:bg-white/5'
                        }`}
                      >
                        <span className={`text-xs font-mono flex-shrink-0 ${subIsActive ? 'text-secondary' : 'text-white/30'}`}>
                          {sub.number}
                        </span>
                        <span className={`text-xs leading-tight truncate ${subIsActive ? 'text-white font-medium' : 'text-white/60 group-hover:text-white/80'}`}>
                          {sub.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10 flex-shrink-0">
        <p className="text-white/25 text-xs text-center">
          St Pats Donabate GAA • 2026
        </p>
      </div>
    </nav>
  );
}
