declare module 'vanta/dist/vanta.waves.min' {
  interface VantaOptions {
    el: HTMLElement | null
    THREE: unknown
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number
    color?: number
    shininess?: number
    waveHeight?: number
    waveSpeed?: number
    zoom?: number
  }
  function WAVES(options: VantaOptions): { destroy: () => void }
  export default WAVES
}
