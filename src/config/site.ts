export type BackgroundVariant = 'transformer-stream' | 'scaling-curves';

export const siteConfig = {
  // EDIT THIS FILE only for visual and animation behavior.
  backgroundVariant: 'scaling-curves' as BackgroundVariant,
  // Homepage portrait width in pixels; the portrait keeps its 4:5 aspect ratio.
  portraitSize: 180,
  // Same control surface as the CV motif. Strength is a percentage of gray ink.
  scalingBackgroundStrength: 15,
  // Smaller values flatten the implicit power-law endpoint frontier.
  // Recommended range: 0.25–1.25; 1 reproduces the original steepness.
  scalingPowerLawSlope: 3.14159265,
  // Plot offsets as percentages of the viewport: +X right, +Y down.
  scalingPlotOffsetX: 0,
  scalingPlotOffsetY: 0,
  // Baseline is 22. Larger values add larger-model trajectories rather than
  // compressing the same family into denser spacing.
  scalingCurveCount: 44,
  // 0 = regular; 1 = deterministic model-family clusters with widening gaps.
  scalingTrajectoryClustering: 1,
  // Tightness inside each six-run cluster: 0 = spread out, 1 = tightly packed.
  // The former fixed spacing corresponds to 0.3111.
  scalingClusterCompactness: 0.0,
  // Complete curves include the post-Pareto tail; its length is independently adjustable.
  scalingFullCurves: true,
  scalingPostParetoLength: 1,
  // Spatial opacity: faint origin, strongest middle, faint endpoint.
  scalingOpacityProfile: true,
  scalingInitialOpacityFactor: 0.25,
  scalingMiddleOpacityFactor: 1,
  scalingFinalOpacityFactor: 0.05,
  // Smoothly attenuate the dense region where trajectories converge. The fade
  // starts at this fraction of a complete curve and reaches the opacity factor
  // at the Pareto contact point. Set the factor to 1 to disable the effect.
  scalingParetoFadeStart: 0.52,
  scalingParetoOpacityFactor: 0.2,
  // Linear opacity ramp across runs, independently of opacity along each curve.
  scalingCurveOpacityGradient: true,
  scalingFirstCurveOpacityFactor: 0.25,
  scalingLastCurveOpacityFactor: 1,
  // Tangent of each curve at its staggered entrance.
  scalingInitialSlope: 1,
  // Seconds from the first curve starting until the final curve finishes.
  // Curves are drawn strictly one at a time, then the animation restarts.
  scalingCycleSeconds: 300,
};
