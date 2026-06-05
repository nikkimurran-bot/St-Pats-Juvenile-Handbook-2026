import { useState, useCallback } from "react";

const STORAGE_KEY = "stpats-checklist-v1";

function loadState(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveState(state: Record<string, boolean>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function useChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>(loadState);

  const toggle = useCallback((itemId: string) => {
    setChecked(prev => {
      const next = { ...prev, [itemId]: !prev[itemId] };
      saveState(next);
      return next;
    });
  }, []);

  const resetChecklist = useCallback((checklistId: string, itemIds: string[]) => {
    setChecked(prev => {
      const next = { ...prev };
      for (const id of itemIds) {
        delete next[id];
      }
      saveState(next);
      return next;
    });
  }, []);

  const getProgress = useCallback((itemIds: string[]) => {
    const done = itemIds.filter(id => checked[id]).length;
    return { done, total: itemIds.length, pct: itemIds.length ? Math.round((done / itemIds.length) * 100) : 0 };
  }, [checked]);

  return { checked, toggle, resetChecklist, getProgress };
}
