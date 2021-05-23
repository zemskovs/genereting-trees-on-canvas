export type SystemSettings = {
  rules: RuleSet;
  initiator: Axiom;
  iterations: IterationsCount;
};

export interface SystemBuilder {
  build(settings: SystemSettings): Expression;
}

export interface StartSelector {
  selectStart(): Point;
}
