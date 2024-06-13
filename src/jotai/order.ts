import { atom } from "jotai";
export type StepStype = "ORDER_CHECK" | "PAYMENT" | "RESULT";
export const stepIndex = atom<StepStype>("ORDER_CHECK");
