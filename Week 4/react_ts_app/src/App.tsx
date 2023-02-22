import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState<string>("")

  return (
    <div className="App">
      <div>
        <h1>Sup,</h1>
        <h4><Out name={name}/></h4>
        <label>Name:</label>
        <In name={name} setName={setName} />
        <PeopleViewer />
      </div>
    </div>
  )
}

const In = ({name, setName}:{name:string, setName:React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div><input name="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
  )
};

const Out = ({name}:{name:string}) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

class Person {
  id: number;
  age: number;
  name?: string;
  city?: string;

  constructor(id : number, name: string, age: number, city: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

async function loadPeople() {
  const response = await fetch("http://localhost:3008/person");
  const names = await response.json();
  return names;
}

const PeopleViewer = ({}) => {
  const [people, setPeople] = useState<Person[]>([]);
  
  loadPeople().then((_people) => {
    setPeople(_people);
  });

  return (
    <div>
      <h1>People</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
