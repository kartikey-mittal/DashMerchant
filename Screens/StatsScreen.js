import {
        View,
        Text,
        StatusBar,
        ScrollView,
        TouchableOpacity,
        Modal,
        Pressable
} from "react-native";
import React,{useState} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import NavBar from "../components/Home/NavBar";
import FontLoader from "../FontLoader";
import Cardtwo from "../components/Home/Cardtwo";
import TotalSaleCard from "../components/Home/TotalSaleCard";
import DashRecommendCard from "../components/Home/DashRecommendCard";
import Barchart from "../components/Home/Barchart";



const StatsScreen = () => {

        const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Last 6 Months");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleModal();
    // Perform any additional actions based on the selected option
  };

        return (
                <FontLoader>
                        <StatusBar
                                backgroundColor="#131927"
                                barStyle="light-content"
                        />
                        <NavBar />
                        <ScrollView
                                style={{ height: "100%" }}
                                showsVerticalScrollIndicator={false}
                        >
                                <View
                                        style={{
                                                backgroundColor: "#131927",
                                                height: "52%",
                                                borderBottomLeftRadius: 30,
                                                borderBottomRightRadius: 30,
                                                paddingTop: 10,
                                                marginBottom: 10,
                                        }}
                                >
                                        <View style={{ alignItems: "center" }}>
                                                <TotalSaleCard
                                                        backgroundColor="#66be84"
                                                        iconName="progress-check"
                                                        title="Total Sale"
                                                        iconNametwo="progress-check"
                                                />
                                        </View>
                                        <View
                                                style={{
                                                        flexDirection: "row",
                                                        justifyContent:
                                                                "space-between",
                                                        alignItems: "center",
                                                        paddingHorizontal: 10,
                                                        paddingVertical: 10,
                                                }}
                                        >
                                                <Cardtwo
                                                        backgroundColor="#e68943"
                                                        iconName="arrow-down-circle"
                                                        rotationDegree={45}
                                                        title="Average Order Value"
                                                />
                                                <Cardtwo
                                                        backgroundColor="#66be84"
                                                        iconName="progress-check"
                                                        rotationDegree={0}
                                                        title="Minimum Order Value"
                                                />
                                        </View>

                                        <View
                                                style={{
                                                        flexDirection: "row",
                                                        justifyContent:
                                                                "space-between",
                                                        alignItems: "center",
                                                        marginTop: 10,
                                                        paddingHorizontal: 10,
                                                }}
                                        >
                                                <Cardtwo
                                                        backgroundColor="#fa5a55"
                                                        iconName="close-circle"
                                                        rotationDegree={0}
                                                        title="Total Number of Products"
                                                />
                                                <Cardtwo
                                                        backgroundColor="#e3c02c"
                                                        iconName="check-circle"
                                                        rotationDegree={0}
                                                        title="Best Selling Items"
                                                />
                                        </View>
                                </View>
                                <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 80,
            height: "45%",
          }}
        >
          <DashRecommendCard
            backgroundColor="#131927"
            iconName="arrow-down-circle"
            rotationDegree={45}
            title="Dash Recommendations"
          />
          {/* Dropdown */}
          <View
            style={{
              flex: 1,
              paddingTop: 20,
              paddingBottom: 30,
            }}
          >
            <TouchableOpacity onPress={toggleModal}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginRight: 10,
                    fontWeight: "600",
                  }}
                >
                  {selectedOption}
                </Text>
                <Icon
                  name="arrow-down-drop-circle-outline"
                  style={{ fontSize: 18, color: "black", marginTop: 5 }}
                />
              </View>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    elevation: 5,
                  }}
                >
                  <Pressable
                    onPress={() => handleOptionSelect("Last Month")}
                    style={{ paddingVertical: 10 }}
                  >
                    <Text>Last Month</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => handleOptionSelect("Last 3 Months")}
                    style={{ paddingVertical: 10 }}
                  >
                    <Text>Last 3 Months</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => handleOptionSelect("Last 6 Months")}
                    style={{ paddingVertical: 10 }}
                  >
                    <Text>Last 6 Months</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            {/* Barchart component */}
            <Barchart />
          </View>
        </View>
      </ScrollView>
    </FontLoader>
  );
};

export default StatsScreen;