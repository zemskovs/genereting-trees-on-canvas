import { ElementSource } from "./types";

export class DomSource implements ElementSource {
  // todo: window implementation
  // constructor(private window: Window) {}

  public getElement(id: string): Nullable<HTMLElement> {
    return window.document.getElementById(id);
  }
}