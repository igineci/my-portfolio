"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useCvContent } from "../hooks/useCvContent";

export interface CvInteractionState {
  focusedExperienceId: string | null;
  hoveredSkillSlug: string | null;
  setFocusedExperienceId: (id: string | null) => void;
  setHoveredSkillSlug: (slug: string | null) => void;
  isExperienceHighlighted: (id: string) => boolean;
  isSkillHighlighted: (slug: string) => boolean;
}

const CvInteractionContext = createContext<CvInteractionState | null>(null);

export function CvInteractionProvider({ children }: { children: ReactNode }) {
  const { workItems, experienceIdsBySkill } = useCvContent();
  const [focusedExperienceId, setFocusedExperienceId] = useState<string | null>(
    null,
  );
  const [hoveredSkillSlug, setHoveredSkillSlug] = useState<string | null>(
    null,
  );

  const isExperienceHighlighted = useCallback(
    (id: string) => {
      const filterActive =
        focusedExperienceId !== null || hoveredSkillSlug !== null;
      if (!filterActive) return true;
      if (focusedExperienceId === id) return true;
      if (
        hoveredSkillSlug &&
        (experienceIdsBySkill.get(hoveredSkillSlug) ?? []).includes(id)
      ) {
        return true;
      }
      return false;
    },
    [focusedExperienceId, hoveredSkillSlug, experienceIdsBySkill],
  );

  const isSkillHighlighted = useCallback(
    (slug: string) => {
      if (hoveredSkillSlug === slug) return true;
      if (focusedExperienceId) {
        const entry = workItems.find((e) => e.id === focusedExperienceId);
        return entry?.relatedSkills.some((s) => s === slug) ?? false;
      }
      if (!hoveredSkillSlug) return true;
      return false;
    },
    [focusedExperienceId, hoveredSkillSlug, workItems],
  );

  const value = useMemo(
    () => ({
      focusedExperienceId,
      hoveredSkillSlug,
      setFocusedExperienceId,
      setHoveredSkillSlug,
      isExperienceHighlighted,
      isSkillHighlighted,
    }),
    [
      focusedExperienceId,
      hoveredSkillSlug,
      isExperienceHighlighted,
      isSkillHighlighted,
    ],
  );

  return (
    <CvInteractionContext.Provider value={value}>
      {children}
    </CvInteractionContext.Provider>
  );
}

export function useCvInteraction(): CvInteractionState {
  const value = useContext(CvInteractionContext);
  if (!value) {
    throw new Error(
      "useCvInteraction must be used within CvInteractionProvider",
    );
  }
  return value;
}
