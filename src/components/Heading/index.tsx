import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'title';
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
  size?: 'small' | 'medium' | 'huge';
};

const Heading: React.FC<HeadingProps> = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium',
}: HeadingProps) => (
  <S.Container
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Container>
);

export default Heading;
