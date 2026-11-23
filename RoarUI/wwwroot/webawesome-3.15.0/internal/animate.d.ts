/** Same as `el.animate()`, except returns a promise that doesn't throw an error when the animation is canceled. */
export declare function animate(el: Element, keyframes: Keyframe[], options?: KeyframeAnimationOptions): Promise<void | Animation>;
/**
 * Applies a class to the specified element, waits for its finite CSS animations to finish or be canceled, then removes
 * the class. Transitions and animations created with the Web Animations API do not delay completion.
 */
export declare function animateWithClass(el: Element, className: string): Promise<void>;
/** Parses a CSS duration and returns the number of milliseconds. */
export declare function parseDuration(duration: number | string): number;
/** Tells if the user has enabled the "reduced motion" setting in their browser or OS. */
export declare function prefersReducedMotion(): boolean;
