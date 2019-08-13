import React from 'react';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if (props.name === 'group') {
    return (
      <MaterialIcons
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  } else if (props.name === 'bookmark') {
    return (
      <Feather
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  } else {
    return (
      <Ionicons
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  }
}
