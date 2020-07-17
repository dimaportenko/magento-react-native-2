/**
 * @flow
 * Created by Dima Portenko on 17.07.2020
 */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

type SelectProps = {|
  title: string,
|}

export const Select = ({ title }: SelectProps) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(!show)} >
        <Text>{title}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        // transparent={true}
        visible={show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <SafeAreaView>
          <TouchableOpacity onPress={() => setShow(false)} >
            <Icon name="close" size={24} />
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </View>
  );
};
