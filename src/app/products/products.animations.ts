import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata
} from '@angular/animations';

export function ZoomInUp(name: string, duration: number = 300, delay: number = 0, easing: string = 'ease'): AnimationTriggerMetadata {

  return trigger(name, [
    state('inactive', style({
      opacity: 0,
      transform: 'scale(0)'
    })),
    state('active', style({
      opacity: 1,
      transform: 'scale(1)'
    })),
    transition('inactive => active', [
      animate(`${duration / 1000}s ${(delay / 1000)}s ${easing}`)
    ])
  ]);

}

export function FadeInUp(name: string, duration: number = 300, delay: number = 0, easing: string = 'ease'): AnimationTriggerMetadata {

  return trigger(name, [
    state('inactive', style({
      opacity: 0,
      transform: 'translateY(120%)'
    })),
    state('active', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('inactive => active', [
      animate(`${(duration / 1000)}s ${(delay / 1000)}s ${easing}`)
    ])
  ]);

}
