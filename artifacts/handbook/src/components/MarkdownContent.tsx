import type { JSX } from "react";

interface Props {
  content: string;
  highlight?: string;
}

function highlightText(text: string, query: string): string {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark class="bg-yellow-200 text-yellow-900 rounded px-0.5">$1</mark>');
}

export function MarkdownContent({ content, highlight }: Props) {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H1
    if (line.startsWith('# ')) {
      const text = line.slice(2);
      elements.push(
        <h1 key={i} className="text-3xl font-bold text-primary mt-2 mb-4 pb-3 border-b-2 border-secondary">
          {highlight ? <span dangerouslySetInnerHTML={{ __html: highlightText(text, highlight) }} /> : text}
        </h1>
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      const text = line.slice(3);
      elements.push(
        <h2 key={i} className="text-xl font-semibold text-primary mt-8 mb-3 flex items-center gap-2">
          <span className="w-1 h-6 bg-secondary rounded-full flex-shrink-0" />
          {highlight ? <span dangerouslySetInnerHTML={{ __html: highlightText(text, highlight) }} /> : text}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      const text = line.slice(4);
      elements.push(
        <h3 key={i} className="text-base font-semibold text-foreground mt-5 mb-2">
          {highlight ? <span dangerouslySetInnerHTML={{ __html: highlightText(text, highlight) }} /> : text}
        </h3>
      );
      i++;
      continue;
    }

    // Table — collect all table lines
    if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter(l => !l.match(/^\|[-| ]+\|$/));
      if (rows.length > 0) {
        const headers = rows[0].split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(h => h.trim());
        const dataRows = rows.slice(1);
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-5 rounded-lg border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {headers.map((h, idx) => (
                    <th key={idx} className="px-4 py-3 text-left font-semibold">
                      {highlight ? <span dangerouslySetInnerHTML={{ __html: highlightText(h, highlight) }} /> : h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, ridx) => {
                  const cells = row.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
                  return (
                    <tr key={ridx} className={ridx % 2 === 0 ? 'bg-white' : 'bg-muted/40'}>
                      {cells.map((cell, cidx) => (
                        <td key={cidx} className="px-4 py-2.5 border-t border-border text-foreground">
                          {highlight ? <span dangerouslySetInnerHTML={{ __html: highlightText(cell, highlight) }} /> : cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const text = line.slice(2);
      elements.push(
        <blockquote key={i} className="border-l-4 border-secondary bg-secondary/10 px-5 py-3 my-4 rounded-r-lg">
          <p className="text-foreground text-sm italic">
            {highlight ? <span dangerouslySetInnerHTML={{ __html: highlightText(text, highlight) }} /> : text}
          </p>
        </blockquote>
      );
      i++;
      continue;
    }

    // Unordered list — collect consecutive bullet lines
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-3 space-y-1.5 pl-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
              <span className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: highlight ? highlightText(renderInline(item), highlight) : renderInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Regular paragraph
    const rendered = renderInline(line);
    elements.push(
      <p key={i} className="text-sm leading-relaxed text-foreground my-2">
        <span dangerouslySetInnerHTML={{ __html: highlight ? highlightText(rendered, highlight) : rendered }} />
      </p>
    );
    i++;
  }

  return <div className="max-w-none">{elements}</div>;
}

function renderInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-xs font-mono">$1</code>');
}
