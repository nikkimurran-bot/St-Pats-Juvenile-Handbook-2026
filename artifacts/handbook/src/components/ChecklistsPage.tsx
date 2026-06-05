import { useState } from "react";
import { checklists } from "../data/checklists";
import { useChecklist } from "../hooks/useChecklist";
import { CheckSquare, Square, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";

export function ChecklistsPage() {
  const { checked, toggle, resetChecklist, getProgress } = useChecklist();
  const [expanded, setExpanded] = useState<string | null>(checklists[0].id);

  const allItemIds = (checklistId: string) => {
    const cl = checklists.find(c => c.id === checklistId);
    return cl?.sections.flatMap(s => s.items.map(i => i.id)) ?? [];
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--app-font-serif)' }}>
          Mentor Checklists
        </h1>
        <p className="text-muted-foreground text-sm">
          10 interactive checklists to help you stay prepared throughout the season. Progress is saved automatically on this device.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {checklists.map(cl => {
          const ids = allItemIds(cl.id);
          const { done, total, pct } = getProgress(ids);
          return (
            <button
              key={cl.id}
              data-testid={`checklist-summary-${cl.number}`}
              onClick={() => setExpanded(cl.id)}
              className={`rounded-xl p-3 text-left transition-all border-2 ${
                expanded === cl.id
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border bg-white hover:border-primary/30 hover:shadow-sm'
              }`}
            >
              <p className="text-2xl font-bold text-primary mb-1">{cl.number}</p>
              <p className="text-xs font-medium text-foreground leading-tight mb-2 line-clamp-2">{cl.title}</p>
              <div className="w-full bg-muted rounded-full h-1.5 mb-1">
                <div
                  className="bg-secondary rounded-full h-1.5 transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">{done}/{total}</p>
            </button>
          );
        })}
      </div>

      {/* Expanded checklists */}
      <div className="space-y-4">
        {checklists.map(cl => {
          const isOpen = expanded === cl.id;
          const ids = allItemIds(cl.id);
          const { done, total, pct } = getProgress(ids);

          return (
            <div
              key={cl.id}
              data-testid={`checklist-${cl.id}`}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              {/* Checklist header */}
              <button
                onClick={() => setExpanded(isOpen ? null : cl.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary font-bold text-lg">{cl.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-foreground text-base">{cl.title}</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">{cl.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex-1 bg-muted rounded-full h-1.5">
                      <div
                        className="bg-secondary rounded-full h-1.5 transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground flex-shrink-0">
                      {done}/{total} ({pct}%)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {done > 0 && (
                    <button
                      data-testid={`reset-checklist-${cl.id}`}
                      onClick={e => { e.stopPropagation(); resetChecklist(cl.id, ids); }}
                      className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                      title="Reset checklist"
                    >
                      <RotateCcw size={14} />
                    </button>
                  )}
                  {isOpen ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
                </div>
              </button>

              {/* Checklist body */}
              {isOpen && (
                <div className="border-t border-border px-5 pb-5 pt-4 space-y-6">
                  {cl.sections.map(sec => {
                    const secIds = sec.items.map(i => i.id);
                    const secDone = secIds.filter(id => checked[id]).length;
                    return (
                      <div key={sec.title}>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-primary flex items-center gap-2">
                            <span className="w-4 h-0.5 bg-secondary rounded-full" />
                            {sec.title}
                          </h3>
                          <span className="text-xs text-muted-foreground">{secDone}/{secIds.length}</span>
                        </div>
                        <div className="space-y-1.5">
                          {sec.items.map(item => {
                            const isDone = !!checked[item.id];
                            return (
                              <button
                                key={item.id}
                                data-testid={`checklist-item-${item.id}`}
                                onClick={() => toggle(item.id)}
                                className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                                  isDone
                                    ? 'bg-primary/5 border border-primary/15'
                                    : 'bg-muted/40 border border-transparent hover:bg-muted hover:border-border'
                                }`}
                              >
                                {isDone ? (
                                  <CheckSquare size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                ) : (
                                  <Square size={18} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                                )}
                                <span className={`text-sm leading-relaxed ${isDone ? 'text-primary/60 line-through' : 'text-foreground'}`}>
                                  {item.text}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  {pct === 100 && (
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center">
                      <p className="text-primary font-semibold text-sm">✓ Checklist complete!</p>
                      <p className="text-primary/60 text-xs mt-0.5">All items checked for {cl.title}.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
