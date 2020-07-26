/**
 * @flow
 * Created by Dima Portenko on 17.07.2020
 */
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { View, Text, TouchableOpacity, Modal, Alert, Constants } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../theme/colors';

type SelectProps<DataType, KeyType> = {|
  title: string,
  data: Array<{
    ...DataType,
    [KeyType]: string,
  }>,
  labelKey: KeyType,
  selectedLabel: ?string,
  onSelect(item: DataType): void,
|}

export const Select = <DataType, KeyType>({ title, data, labelKey, onSelect, selectedLabel }: SelectProps<DataType, KeyType>) => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<Array<{...DataType, [KeyType]: string}>>([]);

  useEffect(() => {
    if (data?.length) {
      const filteredData = data.filter(item => item?.[labelKey] && item[labelKey].includes(search));
      setFiltered(filteredData);
    }
  }, [data, search, labelKey]);

  const onPress = (item) => {
    onSelect(item);
    setShow(false);
  };

  const renderItem = (item, index) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View padding-10 style={styles.item}>
        <Text defaultF>{item[labelKey]}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(!show)} >
        <View paddingL-5>
          <Text defaultF>{selectedLabel || title}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <SafeAreaView>
          <View padding-10>
            <View row style={styles.containerStyle}>
              <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={setSearch}
                value={search}
              />
              <TouchableOpacity onPress={() => setShow(false)} >
                <Icon name="close" size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View paddingH-10>
            <FlatList
              data={filtered}
              renderItem={({ item, index }) => renderItem(item, index)}
              keyExtractor={item => item[labelKey]}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    borderColor: colors.black,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 8,
    width: Constants.screenWidth - 45,
    fontSize: 18,
  },
  item: {
    borderColor: colors.black,
    borderBottomWidth: 1,
  },
});
