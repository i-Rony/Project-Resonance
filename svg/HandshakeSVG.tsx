import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, { Path, PathProps } from 'react-native-svg';
import { SVGProps } from './types';

const AnimatedPath = (Animated.createAnimatedComponent(
  Path
) as any) as React.ComponentClass<
  Animated.AnimateProps<{}, PathProps & { style?: any }>
>;

Animated.addWhitelistedNativeProps({
  stroke: true,
});

const HandshakeSVG = ({ color, size }: SVGProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <AnimatedPath
        d=""
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HandshakeSVG;