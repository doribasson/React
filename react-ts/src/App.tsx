import { useState, useEffect } from "react";
import Child from "./Child";
import Test from "./Test";

export type Person = {
  id?: undefined;
  age?: number;
  firstName: string;
  lastName: string;
  items?: Array<string>;
};

const App: React.FC = () => {
  const [person, setPerson] = useState({ firstName: "", lastName: "" } as {});

  useEffect(() => {
    setPersonArr(prev => [...prev, MyPerson]);
    console.log({ personArr });
  }, []);

  let MyPerson: Person = {
    id: undefined,
    age: Math.floor(Math.random() * (120 - 1 + 1) + 1),
    firstName: "ll",
    lastName: "sss",
    items: ["item1", "item2"]
  };

  // const [personArr, setPersonArr] = useState([] as Person[]);
  const [personArr, setPersonArr] = useState([] as Person[]);

  const addPerson = (person: Person) => {
    // const newPerson: Person = {
    //   id: undefined,
    //   age: 8,
    //   firstName: "firstName newPerson",
    //   lastName: "lastName newPerson",
    //   items: ["item4", "item5"]
    // }

    setPersonArr(prev => [...prev, person]);

    // console.log(personArr);
  };

  const { id, firstName, lastName, items } = MyPerson;
  return (
    <div>
      {console.log({ personArr })}

      <p>lala</p>
      {/* <p>{MyPerson.id}</p>
      <p>{MyPerson.FirstName}</p>
      <p>{MyPerson.lastName}</p>
      <p>{MyPerson.items}</p> */}
      <Child addPerson={addPerson} {...MyPerson} />
      {/* <p>{id}</p>
      <p>{FirstName}</p>
      <p>{lastName}</p> */}

      <Test
        person={{ firstName: "personObject", lastName: "basson", age: 44 }}
      />
      {/* <Test firstName={"dori"} lastName={"basson"} age={33} /> */}
      <hr />
      {/* <Test firstName={"roni"} lastName={"basson"} age={"34"} /> */}
      <hr />
      {/* <Test firstName={"eli"} lastName={"basson"} /> */}
    </div>
  );
};

export default App;
