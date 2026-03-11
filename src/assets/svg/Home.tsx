import React from 'react';
import Svg, {Path} from 'react-native-svg';

type HomeProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const Home: React.FC<HomeProps> = ({
  width = 24,
  height = 24,
  color = '#2555FF',
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 10.6L12 3L21 10.6V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10.6Z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 21V13H15V21"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
