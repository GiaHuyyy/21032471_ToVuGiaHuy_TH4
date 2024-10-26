import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  // const category = [
  //   { name: "Resort", image: require("./assets/baiTH4/resort.png") },
  //   { name: "Homestay", image: require("./assets/baiTH4/homestay.png") },
  //   { name: "Hotel", image: require("./assets/baiTH4/hotel.png") },
  //   { name: "Lodge", image: require("./assets/baiTH4/lodge.png") },
  //   { name: "Villa", image: require("./assets/baiTH4/villa.png") },
  //   { name: "Apartement", image: require("./assets/baiTH4/apartment.png") },
  //   { name: "Hostel", image: require("./assets/baiTH4/hostel.png") },
  //   { name: "See all", image: require("./assets/baiTH4/seeall.png") },
  // ];

  // const location = [
  //   { image: require("./assets/baiTH4/photo1.png") },
  //   { image: require("./assets/baiTH4/photo2.png") },
  //   { image: require("./assets/baiTH4/photo3.png") },
  //   { image: require("./assets/baiTH4/photo1.png") },
  //   { image: require("./assets/baiTH4/photo2.png") },
  //   { image: require("./assets/baiTH4/photo3.png") },
  // ];

  const footer = [
    { image: require("./assets/baiTH4/homeicon.png"), name: "Home" },
    { image: require("./assets/baiTH4/exploreicon.png"), name: "Explore" },
    { image: require("./assets/baiTH4/searchicon.png"), name: "Search" },
    { image: require("./assets/baiTH4/profileicon.png"), name: "Profile" },
  ];

  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://6459bfa395624ceb21eebb61.mockapi.io/TH4/v1/category");
        const data = await response.json();
        setCategory(data);

        const response1 = await fetch("https://6459bfa395624ceb21eebb61.mockapi.io/TH4/v1/location");
        const data1 = await response1.json();
        setLocation(data1);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* Header */}
        <View
          style={{
            backgroundColor: "#5959b3",
            height: 160,
            paddingHorizontal: 40,
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
            <Image source={require("./assets/baiTH4/logoicon.png")} style={{ width: 46 }} resizeMode="contain" />
            <View
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                height: 36,
                borderRadius: 10,
                flex: 1,
              }}
            >
              <TextInput placeholder="Search here" style={{ flex: 1, height: "100%", outline: "none" }} />
              <Image source={require("./assets/baiTH4/findicon.png")} style={{ width: 24 }} resizeMode="contain" />
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("./assets/baiTH4/personicon.png")}
              style={{ width: 40, height: 40, borderRadius: "50%", marginLeft: 5 }}
              resizeMode="cover"
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>Wellcome!</Text>
              <Text style={{ color: "#fff", fontSize: 12 }}>Donna Stroupe</Text>
            </View>

            <Image
              source={require("./assets/baiTH4/ringicon.png")}
              style={{ width: 40, marginLeft: "auto" }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: 40 }}>
          {/* Category */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 20 }}>Category</Text>
            <TouchableOpacity>
              <Image source={require("./assets/baiTH4/3gach.png")} style={{ width: 30 }} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          {/* Category List */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              rowGap: 10,
              marginTop: 20,
            }}
          >
            {category.map((item, index) => (
              <View key={index} style={{ alignItems: "center", width: "25%" }}>
                {/* <Image source={item.image} style={{ width: 70, height: 70 }} resizeMode="contain" /> */}
                <Image source={{ uri: item.image }} style={{ width: 70, height: 70 }} resizeMode="contain" />
                <Text style={{ fontSize: 12, marginTop: 5 }}>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* Location */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Popular Destination</Text>
            <TouchableOpacity>
              <Image source={require("./assets/baiTH4/3gach.png")} style={{ width: 30 }} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          {/* Location List */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
            {location.map((item, index) => (
              // <Image
              //   key={index}
              //   source={item.image}
              //   style={{ width: 102, height: 106, borderRadius: 10, marginRight: 10 }}
              // />
              <Image
                key={index}
                source={{ uri: item.image }}
                style={{ width: 102, height: 106, borderRadius: 10, marginRight: 10 }}
              />
            ))}
          </ScrollView>

          {/* Recommended */}
          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "500" }}>Recommended</Text>
          <View style={{ flexDirection: "row", marginTop: 10, columnGap: 10 }}>
            <Image source={require("./assets/baiTH4/photo4.png")} style={{ flex: 1, height: 120, borderRadius: 6 }} />
            <Image source={require("./assets/baiTH4/photo5.png")} style={{ flex: 1, height: 120, borderRadius: 6 }} />
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#5959b3",
          height: 90,
          paddingHorizontal: 40,
        }}
      >
        {footer.map((item, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={item.image} style={{ width: 40, height: 40 }} resizeMode="contain" />
            <Text style={{ color: "#fff", fontSize: 12, marginTop: 4 }}>{item.name}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
