import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Heart from "../../assets/Heart.svg";
import image from "../../assets/image.png";
import Logo from "../../assets/logo.svg";
import Message from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import Share from "../../assets/Share.svg";
import Stroke from "../../assets/stroke.svg";
import eueela1 from "../../assets/eueela1.png";
import eueela2 from "../../assets/eueela2.png";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
];

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={127} height={49} />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={styles.stores}>
          <FlatList
            data={DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <LinearGradient
                colors={["#D52865", "#F7B55A"]}
                style={styles.storesCard}
                key={item.item.id}
              >
                <Image
                  style={styles.storesCardImage}
                  source={item.item.pathURL}
                />
              </LinearGradient>
            )}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://github.com/marceloabbadia.png" }}
              />
              <Text style={styles.contentHeaderLeftText}>marceloabbadia</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={eueela2} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                marceloabbadia Aniversário de casamento comemorando da melhor
                maneira, comendo!
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                Ver todos os 3 comentários
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                Há 8 horas - Ver tradução
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{
                  uri: "https://media.licdn.com/dms/image/D4D03AQE5_VhtwqF4Ug/profile-displayphoto-shrink_200_200/0/1679768629115?e=1692835200&v=beta&t=AnTEjOBE7WCm7ylzUPbnEVngnZh1G03IvD2z45ZWFqQ",
                }}
              />
              <Text style={styles.contentHeaderLeftText}>jessicaabbadia</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={eueela1} style={{ height: 350 }} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                jessicaabbadia Comendo massas, minha comida predileta!
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                Ver todos os 6 comentários
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                Há 7 horas - Ver tradução
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  stores: {
    height: 104,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  storesCard: {
    borderRadius: 50,
    marginRight: 14,
  },
  storesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    margin: 2,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 20,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
  Image: {
    maxHeight: 150,
  },
});
