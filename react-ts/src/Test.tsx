import React from "react";

// type Props = {
//     firstName: string;
//     lastName?: string; //? becuse the ? its optional to get from App
//     age: number | null | string; // | its or.. its can be one of them..
// };

interface Props {
  firstName: string;
  lastName?: string; //? becuse the ? its optional to get from App
  age?: number | null | string; // | its or.. its can be one of them..
}

interface obJectrStudent {
  person: Props;
  desc?: string[];
}

// const Test: React.FC<{ firstName: string; lastName: string; age: number }> = ({
//   firstName,
//   lastName,
//   age
// }) => {

// const Test: React.FC<Props> = ({ firstName, lastName, age }) => {
const Test: React.FC<obJectrStudent> = ({
  person: { firstName, lastName, age }
}) => {
  return (
    <div>
      <p>Test</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
    </div>
  );
};

export default Test;
