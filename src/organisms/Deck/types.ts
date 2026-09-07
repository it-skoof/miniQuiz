import { TWordLibArray } from "@/atoms/types";

export interface DeckProps{
    lib: TWordLibArray
    onChangeLib: (nextState: TWordLibArray) => void
}