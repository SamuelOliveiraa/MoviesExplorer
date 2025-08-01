import { config } from "@/config/config";
import colors from "@/utils/colors";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Tabs } from "expo-router";
import {
  BookmarksSimpleIcon,
  FilmSlateIcon,
  MagnifyingGlassIcon,
  MonitorPlayIcon
} from "phosphor-react-native";
import { StatusBar, View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray200 }}>
      <StatusBar hidden />
      <GluestackUIProvider config={config}>
        <Tabs
          initialRouteName="Movies"
          backBehavior="history"
          screenOptions={{
            lazy: false,
            headerShown: false,
            tabBarActiveTintColor: `${colors.purpleLight}`, // cor quando está selecionado
            tabBarInactiveTintColor: `${colors.gray400}`,

            tabBarStyle: {
              borderColor: `${colors.gray300}`,
              backgroundColor: `${colors.gray300}`
            }
          }}
        >
          <Tabs.Screen
            name="Movies"
            options={{
              title: "Movies",
              tabBarIcon: ({ color }) => (
                <FilmSlateIcon size={26} color={color} />
              )
            }}
          />
          <Tabs.Screen
            name="Series"
            options={{
              title: "Series",
              tabBarIcon: ({ color }) => (
                <MonitorPlayIcon size={26} color={color} />
              )
            }}
          />
          <Tabs.Screen
            name="Search"
            options={{
              title: "Search",
              tabBarIcon: ({ color }) => (
                <MagnifyingGlassIcon size={26} color={color} />
              )
            }}
          />
          <Tabs.Screen
            name="Favorites"
            options={{
              title: "Favorites",
              tabBarIcon: ({ color }) => (
                <BookmarksSimpleIcon size={26} color={color} />
              )
            }}
          />
          <Tabs.Screen
            name="(stack)"
            options={{
              tabBarButton: () => null,
              tabBarItemStyle: {
                display: "none"
              }
            }}
          />
        </Tabs>
      </GluestackUIProvider>
    </View>
  );
}
