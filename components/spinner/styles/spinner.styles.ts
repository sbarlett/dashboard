import { style, keyframes } from "typestyle";

const containerRotator = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(270deg)" },
});
const spinnerRotator = keyframes({
  "0%": {
    strokeDashoffset: 187,
  },
  "50%": {
    strokeDashoffset: 46.75,
    transform: "rotate(135deg)",
  },
  "100%": {
    strokeDashoffset: 187,
    transform: "rotate(450deg)",
  },
});
const styles: { [className: string]: string } = {
  container: style({
    animationName: containerRotator,
    animationDuration: "1.4s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    
  }),
  fullScreen: style({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  }),
  spinner: style({
    strokeDasharray: 187,
    strokeDashoffset: 0,
    transformOrigin: "center",
    animation: spinnerRotator,
    animationDuration: "1.4s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  }),
  inverse: "#ffffff",
  color: "#5bc500",
  colorBlue: "#00a9e0",
  dark: "#002d45",
};

export default styles;
