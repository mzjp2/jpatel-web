"use client";

import { useReducer } from "react";
import type { BookingFormData } from "@/types/booking";

type Step = 1 | 2 | 3 | 4;

interface WizardState {
  step: Step;
  data: Partial<BookingFormData>;
}

type WizardAction =
  | { type: "NEXT"; data?: Partial<BookingFormData> }
  | { type: "BACK" }
  | { type: "RESET" };

function reducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "NEXT":
      return {
        step: Math.min(4, state.step + 1) as Step,
        data: { ...state.data, ...action.data },
      };
    case "BACK":
      return { ...state, step: Math.max(1, state.step - 1) as Step };
    case "RESET":
      return { step: 1, data: {} };
    default:
      return state;
  }
}

export function useBookingWizard() {
  const [state, dispatch] = useReducer(reducer, { step: 1, data: {} });

  const next = (data?: Partial<BookingFormData>) => dispatch({ type: "NEXT", data });
  const back = () => dispatch({ type: "BACK" });
  const reset = () => dispatch({ type: "RESET" });

  return { step: state.step, data: state.data, next, back, reset };
}
