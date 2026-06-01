"use client";

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { WorkNavState } from "@/app/work/work-nav";

export function useExperienceNavigation() {
  const navigate = useNavigate();

  return useCallback(
    (section: string) => {
      navigate("/work", { state: { section } satisfies WorkNavState });
    },
    [navigate],
  );
}
