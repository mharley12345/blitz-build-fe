import React from "react";
import Circle from "react-circle";
import styled from "styled-components";

const ProgressContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  left: 1044px;
  top: 338px;

  background: #f1f1f1;
`;

function Tracker(props) {
    return (
      <ProgressContainer>
        <Circle
          animate={true} // Boolean: Animated/Static progress
          responsive={true} // Boolean: Make SVG adapt to parent size
          size={50} // Number: Defines the size of the circle.
          lineWidth={14} // Number: Defines the thickness of the circle's stroke.
          progress={props.percentage} // Number: Update to change the progress and percentage.
          progressColor="#282828" // String: Color of "progress" portion of circle.
          bgColor="#f1f1f1" // String: Color of "empty" portion of circle.
          textColor="#282828" // String: Color of percentage text color.
          textStyle={{
            font: "bold 60px Roboto" // CSSProperties: Custom styling for percentage.
          }}
          percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
          roundedStroke={true} // Boolean: Rounded/Flat line ends
          showPercentage={true} // Boolean: Show/hide percentage.
          showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
        />
      </ProgressContainer>
    );
}

export default Tracker