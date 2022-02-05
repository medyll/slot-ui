import * as effects from 'svelte/easing';
import {afterUpdate, createEventDispatcher} from 'svelte';

function slideOut(node, {duration, delay}) {
  return {
    duration,
    delay,
    css: t => {
      const eased = effects.quadOut(t);
      return `transform: translate(-${50 - (eased * 50)}px,0);
        opacity: ${t}`;
    }
  };
}

function slideOutRt(node, {duration, delay}) {
  return {
    duration,
    delay,
    css: t => {
      const eased = effects.quadOut(t);
      return `transform: translate(${50 - (eased * 50)}px,0);
        opacity: ${t}`;
    }
  };
}

function slideIn(node, {duration, delay}) {
  return {
    duration,
    delay,
    css: t => {
      const eased = effects.quadOut(t);
      return `transform: translate(${250 - (eased * 250)}px,0);
        opacity: ${t}`;
    }
  };
}

function slideInRtl(node, {duration, delay}) {
  return {
    duration,
    delay,
    css: t => {
      const eased = effects.quadOut(t);
      return `transform: translate(-${250 - (eased * 250)}px,0);
        opacity: ${t}`;
    }
  };
}

export const transitions = {slideOut, slideOutRt, slideIn, slideInRtl};