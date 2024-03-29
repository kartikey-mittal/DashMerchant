import React from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Barchart = () => {

        

        const data = {
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June',],
          datasets: [
            {
              data: [33, 45, 28, 80, 99, 43,],
            },
          ],
        };
      
        const chartConfig = {
          backgroundGradientFrom: '#1E2923', // Dark green
          backgroundGradientTo: '#08130D',   // Darker green
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,  // Green bars
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White labels
        };
      
        return (
          <View >
            <BarChart
              data={data}
              width={screenWidth - 30}
              height={220}
              yAxisLabel="₹ "
              chartConfig={chartConfig}
              verticalLabelRotation={15}
              style={{ marginVertical: 8 ,borderRadius:10,paddingRight:40}}
            />
          </View>
        );
      };
      
      export default Barchart;
      