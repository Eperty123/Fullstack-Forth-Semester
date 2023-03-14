import { useState } from "react";
import { Person } from "./Person";

export const In = ({name, setName}:{name:string, setName:React.Dispatch<React.SetStateAction<string>>}) => {
    return (
      <div><input name="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
    )
};
  
export const Out = ({name}:{name:string}) => {
    return (
      <div>
        <p>{name}</p>
      </div>
    )
}
  
async function loadPeople() {
    const response = await fetch("http://localhost:3008/person");
    const names = await response.json();
    return names;
}
  
export const PeepViewer = ({}) => {
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