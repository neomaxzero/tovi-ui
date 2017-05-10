import { keyframes } from 'styled-components';
import * as animations from 'react-animations';
import { JSONtoCSS } from './object';

export const animate = (eff, duration) => {
  const effectOnAnimate = animations[eff];
  const keyEffect = keyframes`${JSONtoCSS(effectOnAnimate)}`;
  return `animation: ${keyEffect} ${duration};`
}

