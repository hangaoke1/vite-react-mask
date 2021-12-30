import { useEffect, RefObject } from 'react'
import { useTouch } from './use-touch'
import { getScrollParent } from '../utils/get-scroll-parent'
import { supportsPassive } from '../utils/supports-passive'

let totalLockCount = 0

const BODY_LOCK_CLASS = 'fm-overflow-hidden'

export function useLockScroll(rootRef: RefObject<HTMLElement>, shouldLock: boolean) {
  const touch = useTouch()

  const onTouchMove = (event: TouchEvent) => {
    touch.move(event)

    if (!touch.isVertical()) {
      return
    }

    const el = getScrollParent(event.target as Element, rootRef.current) as HTMLElement
    if (!el) return

    const { scrollHeight, offsetHeight, scrollTop } = el

    /**
     * touch.deltaY.current > 0  页面向上，手指向下滑动
     * touch.deltaY.current <= 0 页面向下，手指向上滑动
     */
    if (touch.deltaY.current > 0 && scrollTop === 0) {
      if (event.cancelable) {
        event.preventDefault()
      }
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (touch.deltaY.current <= 0 && scrollTop + offsetHeight >= scrollHeight) {
      if (event.cancelable) {
        event.preventDefault()
      }
    }
  }

  const lock = () => {
    document.addEventListener('touchstart', touch.start)
    document.addEventListener(
      'touchmove',
      onTouchMove,
      supportsPassive ? { passive: false } : false,
    )

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS)
    }

    totalLockCount++
  }

  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start)
      document.removeEventListener('touchmove', onTouchMove)

      totalLockCount--

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS)
      }
    }
  }

  useEffect(() => {
    if (shouldLock) {
      lock()
      return () => {
        unlock()
      }
    }
  }, [shouldLock])
}
