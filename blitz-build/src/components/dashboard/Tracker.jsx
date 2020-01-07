import React from "react";
import Circle from "react-circle";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 280px;
  height: 280px;
  background: #fff;
  margin-bottom: 55px;
`;
//dont know what this is doing...

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
        bgColor="#fff" // String: Color of "empty" portion of circle.
        textColor="#282828" // String: Color of percentage text color.
        textStyle={{
          font: "bold 60px Roboto" // CSSProperties: Custom styling for percentage.
        }}
        percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
        roundedStroke={false} // Boolean: Rounded/Flat line ends
        showPercentage={true} // Boolean: Show/hide percentage.
        showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
      />
    </ProgressContainer>
  );
}

export default Tracker;
