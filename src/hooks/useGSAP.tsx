import React from 'react'
import useScrollToTop from './useScrollToTop'
import useGsapOpacity from './useGsapOpacity'
import useGsapOpacityTransAppear from './useGsapOpacityTransAppear'
import useGsapStagger from './useGsapStagger'
import useGsapScale from './useGsapScale'
import useGsapStagger2 from './useGsapStagger2'
import useGsapSlideFromRight from './useGsapSlideRight'
import useGsapSlideFromLeft from './useGsapSlideLeft'
import useGsapAnimation from './useGsapAnimation'
import useGsapOpacityTransAppear2 from './useGsapOpacityTransAppear2'
import useGsapSlideUp from './useGsapSlideUp'
import useGsapSlideDown from './useGsapSlideDown'
import useGsapOpacityTransAppearTop from './useGsapOpacityTransAppearTop'
import useGsapStaggerSlow from './useGsapStaggerSlow'
import useGsapStaggerBounceUp from './useGsapStaggerBounceUp'

const useGSAP = (pageClassName: string) => {
  useScrollToTop()
  useGsapOpacity(pageClassName + ' .gsap-opacity')
  useGsapOpacityTransAppear(pageClassName + ' .gsap-opacity-trans-appear')
  useGsapOpacityTransAppearTop(
    pageClassName + ' .gsap-opacity-trans-appear-top',
  )
  useGsapOpacityTransAppear2(pageClassName + ' .gsap-opacity-trans-appear2')
  useGsapStagger(
    pageClassName + ' .gsap-stagger',
    pageClassName + ' .gsap-stagger-parent',
  )
  useGsapStagger2(
    pageClassName + ' .gsap-stagger2',
    pageClassName + ' .gsap-stagger2-parent',
  )

  useGsapSlideUp(pageClassName + ' .gsap-slide-up')
  useGsapSlideDown(pageClassName + ' .gsap-slide-down')
  useGsapScale(pageClassName + ' .gsap-scale')
  useGsapSlideFromRight(pageClassName + ' .gsap-slide-from-right')
  useGsapSlideFromLeft(pageClassName + ' .gsap-slide-from-left')
  useGsapAnimation({
    combinedSelector:
      pageClassName + ' .stagger-child.gsap-opacity-trans-appear-animation',
    singleSelector: pageClassName + ' .gsap-opacity-trans-appear-animation',
    childSelector: pageClassName + ' .stagger-child',
    parentSelector: pageClassName + ' .stagger-parent',
  })
  useGsapStaggerSlow(pageClassName + ' .gsap-slow-stagger')

  useGsapStaggerBounceUp(
    pageClassName + ' .gsap-stagger-bounce',
    pageClassName + ' .gsap-stagger-bounce-parent',
  )
}

export default useGSAP

// GSAP animation classes :-
// --------------------------------------
// gsap-opacity
// gsap-opacity-trans-appear
// gsap-stagger
// gsap-stagger-parent
// gsap-scale

// CSS animation classes for banners :-
// ---------------------------------------
// text-appear-anim
// text-appear-anim-delayed
