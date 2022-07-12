import { ScrollView, View } from "react-native";

import CategoryItem from "./item";
import Items from '../../utils/categories'
import tw from "twrnc";

const Categories = () => {
  return (
    <View style={tw`w-full py-1`}>
      <ScrollView horizontal scrollEnabled >
      {
        Items.map((item, index) => (
          <CategoryItem key={index} category={item} />
        ))
      }
      </ScrollView>
    </View>
  );
};

export default Categories;
