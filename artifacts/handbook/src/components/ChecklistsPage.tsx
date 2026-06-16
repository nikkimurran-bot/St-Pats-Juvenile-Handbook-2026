import { useState } from "react";
import { checklists } from "../data/checklists";
import { useChecklist } from "../hooks/useChecklist";
import { CheckSquare, Square, RotateCcw, ChevronDown, ChevronUp, Printer } from "lucide-react";

export function ChecklistsPage() {
  const { checked, toggle, resetChecklist, getProgress } = useChecklist();
  const [expanded, setExpanded] = useState<string | null>(checklists[0].id);
  const [printMode, setPrintMode] = useState(false);

  const allItemIds = (checklistId: string) => {
    const cl = checklists.find(c => c.id === checklistId);
    return cl?.sections.flatMap(s => s.items.map(i => i.id)) ?? [];
  };

  const handlePrintAll = () => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 250);
  };

  const handlePrintSingle = (checklistId: string) => {
    const cl = checklists.find(c => c.id === checklistId);
    if (!cl) return;

    const lines: string[] = [];
    cl.sections.forEach(sec => {
      lines.push(`<h3 style="font-size:13px;font-weight:600;margin:14px 0 6px;color:#333;">${sec.title}</h3>`);
      sec.items.forEach(item => {
        const done = !!checked[item.id];
        const box = done
          ? `<span style="display:inline-block;width:14px;height:14px;border:1.5px solid #333;background:#333;margin-right:8px;vertical-align:middle;flex-shrink:0;"></span>`
          : `<span style="display:inline-block;width:14px;height:14px;border:1.5px solid #aaa;margin-right:8px;vertical-align:middle;flex-shrink:0;"></span>`;
        lines.push(
          `<div style="display:flex;align-items:flex-start;margin-bottom:5px;">` +
          `${box}<span style="font-size:12px;color:#111;${done ? 'text-decoration:line-through;color:#888;' : ''}">${item.text}</span></div>`
        );
      });
    });

    const html = `<!DOCTYPE html><html><head><title>${cl.title}</title>
<style>
  body { font-family: Arial, sans-serif; margin: 24px 32px; color: #111; }
  h1 { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
  p { font-size: 11px; color: #666; margin: 0 0 16px; }
  @media print { body { margin: 16px 24px; } }
</style>
</head><body>
<h1>Checklist ${cl.number}: ${cl.title}</h1>
<p>St Pats Donabate GAA — Juvenile Handbook 2026 &nbsp;|&nbsp; ${cl.description}</p>
${lines.join('\n')}
<script>window.onload = function(){ window.print(); window.close(); }</script>
</body></html>`;

    const w = window.open('', '_blank', 'width=700,height=900');
    if (w) {
      w.document.write(html);
      w.document.close();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--app-font-serif)' }}>
            Mentor Checklists
          </h1>
          <p className="text-muted-foreground text-sm">
            11 interactive checklists to help you stay prepared throughout the season. Progress is saved automatically on this device.
          </p>
        </div>
        <button
          onClick={handlePrintAll}
          className="no-print flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
        >
          <Printer size={15} />
          Print All
        </button>
      </div>

      {/* Print header (only shows when printing all) */}
      <div className="hidden print:block mb-8">
        <h1 className="text-2xl font-bold text-black">St Pats Donabate GAA — Mentor Checklists 2026</h1>
        <p className="text-sm text-gray-600 mt-1">Printed from the St Pats Juvenile Handbook 2026</p>
      </div>

      {/* Summary cards */}
      <div className="no-print grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
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
          const isOpen = expanded === cl.id || printMode;
          const ids = allItemIds(cl.id);
          const { done, total, pct } = getProgress(ids);

          return (
            <div
              key={cl.id}
              data-testid={`checklist-${cl.id}`}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden print:shadow-none print:border-gray-300 print:rounded-none print:mb-4 print:break-inside-avoid"
            >
              {/* Checklist header */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => !printMode && setExpanded(isOpen && !printMode ? null : cl.id)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); !printMode && setExpanded(isOpen && !printMode ? null : cl.id); } }}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/30 transition-colors cursor-pointer print:cursor-default print:hover:bg-transparent select-none"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 print:w-8 print:h-8 print:rounded-lg">
                  <span className="text-secondary font-bold text-lg print:text-sm">{cl.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-foreground text-base print:text-sm">{cl.title}</h2>
                  <p className="text-xs text-muted-foreground mt-0.5 print:hidden">{cl.description}</p>
                  <div className="flex items-center gap-3 mt-2 no-print">
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
                <div className="flex items-center gap-2 flex-shrink-0 no-print">
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
                  <button
                    data-testid={`print-checklist-${cl.id}`}
                    onClick={e => { e.stopPropagation(); handlePrintSingle(cl.id); }}
                    className="p-1.5 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                    title="Print this checklist"
                  >
                    <Printer size={14} />
                  </button>
                  {isOpen
                    ? <ChevronUp size={18} className="text-muted-foreground" />
                    : <ChevronDown size={18} className="text-muted-foreground" />
                  }
                </div>
              </div>

              {/* Checklist body */}
              {isOpen && (
                <div className="border-t border-border px-5 pb-5 pt-4 space-y-6 print:pt-2 print:pb-2">
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
                          <span className="text-xs text-muted-foreground no-print">{secDone}/{secIds.length}</span>
                        </div>
                        <div className="space-y-1.5">
                          {sec.items.map(item => {
                            const isDone = !!checked[item.id];
                            return (
                              <button
                                key={item.id}
                                data-testid={`checklist-item-${item.id}`}
                                onClick={() => toggle(item.id)}
                                className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all print:rounded-none print:p-1.5 print:cursor-default ${
                                  isDone
                                    ? 'bg-primary/5 border border-primary/15 print:bg-transparent print:border-transparent'
                                    : 'bg-muted/40 border border-transparent hover:bg-muted hover:border-border print:bg-transparent'
                                }`}
                              >
                                {isDone ? (
                                  <CheckSquare size={18} className="text-primary flex-shrink-0 mt-0.5 print:text-black" />
                                ) : (
                                  <Square size={18} className="text-muted-foreground flex-shrink-0 mt-0.5 print:text-gray-400" />
                                )}
                                <span className={`text-sm leading-relaxed print:text-xs print:text-black ${isDone ? 'text-primary/60 line-through print:no-underline print:line-through' : 'text-foreground'}`}>
                                  {item.text}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  {pct === 100 && !printMode && (
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center no-print">
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
