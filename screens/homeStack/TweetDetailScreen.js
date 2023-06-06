import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import TweetContent from "../../components/TweetContent";
import { useLayoutEffect } from "react";

export default function TweetDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TweetContent tweet={params.tweet} />
    </SafeAreaView>
  );
}
