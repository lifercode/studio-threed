import { useControls, folder } from "leva";
import { useEffect } from 'react';

import useProviderControls from '@/hooks/useProviderControls';
import { useElementsStore } from '@/store/elements';
import props from './props';

export default function Controls() {
  const { mountObject, normalizeControls, updateControl } = useProviderControls()
  const { current } = useElementsStore()

  const [_, set] = useControls(() => (
    normalizeControls(props.inject, {
      'Point Light Props': folder(mountObject([
        'decay',
        'distance',
        'power',
        'shadow',
      ])),
    })
  ), [current])

  useEffect(() => {
    if(current.id) {
      updateControl(set, props.inject, {
        decay: current.decay,
        distance: current.distance,
        power: current.power,
        shadow: current.shadow,
      })
    }
  }, [current])

  return <div />
}