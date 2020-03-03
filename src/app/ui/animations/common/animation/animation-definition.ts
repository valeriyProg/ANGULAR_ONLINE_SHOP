import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '800%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0})
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ opacity: 0}))
        ],{ optional: true }),
        query(':enter', [
          animate('600ms ease-out', style({ opacity : 1}))
        ],{ optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    transition('* <=> HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '800%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0})
      ],{ optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('2000ms ease-out', style({ opacity: 1}))
        ],{ optional: true }),
        query(':enter', [
          animate('3090ms ease-out', style({ opacity: 0}))
        ],{ optional: true })
      ]),
      query(':enter', animateChild()),
    ])
  ]);
