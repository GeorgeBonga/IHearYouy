import * as React from 'react';
import { Appbar, Menu, Divider, Provider } from "react-native-paper";
import { themeColors } from '../theme';
import { Ionicons } from "react-native-vector-icons";
const CustomHeader = () => (
    <Appbar.Header style={{ backgroundColor:themeColors.slv }}>
          <Appbar.Content
            title="IHEARYOU"
           
            color={themeColors.bg}
            titleStyle={{ fontSize: 25 }}
          />
          <Appbar.Action
            icon="magnify"
            size={30}
            color={themeColors.bg}
           
          />
           <Appbar.Action
              icon={() => (
                <Ionicons name="person" size={24} color={themeColors.bg} />
              )}
                size={25}
                color={themeColors.bg}
                
              />

        </Appbar.Header>

);


export default CustomHeader