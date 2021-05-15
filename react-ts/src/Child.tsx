import React, { useState, useRef } from "react";
import { Person } from "./App";

type Props = {
  id?: undefined;
  age?: number;
  firstName: string;
  lastName: string;
  items?: Array<string>; //items?: string[];
  addPerson: (person: Person) => void;

  //   addPerson: Person;
  // cartItems: CartItemType[];
  // addToCart: (clickedItem: CartItemType) => void;
  // removeFromCart: (id: number) => void;
};

const Child: React.FC<Props> = ({
  id = Math.floor(Math.random() * (10 - 1 + 1) + 1),
  age,
  firstName,
  lastName,
  items,
  addPerson
}) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: ""
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addPerson(person);
    console.log("submit");
    inputRef.current?.focus();
  };

  //   const overlayEl = useRef(document.createElement("div"));
  //   if(overlayEl.current) {
  //     // will be type HTMLDivElement NOT HTMLDivElement | null
  //     const whattype = overlayEl.current;
  // }
  const mystyle = {
    width: "120px",
    color: "red",
    background: "blue"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // const temp = inputRef.current?.classList.add("mystyle");
    // const bgColor = document.querySelector(".mystyle");

    console.log(document.querySelector(".mystyle"));

    // inputRef.currentstyle.backgroundColor = "Red";
    // const temp = document.querySelector("mystyle");
    // console.log(temp);
    console.log(inputRef.current?.style);

    // console.log(e.target);

    // [e.target.] = e.target.value;
    // console.log([e.target.name]);

    // console.log(e.target.value);
    // [e.currentTarget.name] = e.currentTarget.value;
    // console.log([e.target.name]);
    // [e.target.name] = e.target.value;

    setPerson({ ...person, [e.target.name]: e.target.value });
    // setPerson(prev => {
    //     return { ...prev, [e.target.name]: e.target.value };
    //   });
  };

  return (
    <div>
      {/* {console.log(person)} */}

      <p>iam child with id: {id}</p>
      <p>iam child with age: {age}</p>
      <p>iam child with firstName: {firstName}</p>
      <p>iam child with lastName: {lastName}</p>
      <p>iam child with lastName: {items}</p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Firstname</label>
          <input
            ref={inputRef}
            type="text"
            id="name"
            name="firstName"
            onChange={handleChange}
            value={person.firstName}
          />
        </div>
        <div className="field">
          <label htmlFor="text">lastName</label>
          <input
            type="text"
            id="email"
            name="lastName"
            onChange={e => handleChange(e)}
            value={person.lastName}
          />
        </div>
        <div className="field">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="score"
            name="age"
            required
            onChange={e => handleChange(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Child;
