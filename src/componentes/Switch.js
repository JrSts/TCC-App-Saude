import * as React from 'react';
import { Switch } from 'react-native-paper';
import THEME from '../theme';

const SwitchButton = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={THEME.COLORS.CARD4} />
  
};

export default SwitchButton;