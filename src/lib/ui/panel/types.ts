import type { Writable } from "svelte/store";

export type PanelContextType = Writable<{
  activePanelId?: string;
  activePanelSlideData: Record<string, any>;
  panelSlides: Record<string, any>;
  panels: Record<string, any>;
}>;
