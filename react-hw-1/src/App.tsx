import React from 'react';
import "./style.css"


const UsersBlock = (props: any) => {
  const users = props.users
  console.log(users);
  
 
 const result = users.map(user => {
 
  return (
        <>
          <div className='main-block' key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.textStatus}</p>
            <img src={user.ava} alt="" />
            <p><i> {user.status}</i></p>
          </div>
        </>
      )
 })
 
  return (
    <>
      {result}
    </>
  )
}

function App() {
  const users = [
    {
      id: 1,
      name: "Madina",
      textStatus: "I'm businesswoman!",
      ava: "https://avatars.mds.yandex.net/i?id=a129b50e80fb503343d665c47f783f26d8cd2810-5325822-images-thumbs&n=13",
      status: "online"
    },
    {
      id: 2,
      name: "Aigerim",
      textStatus: "I'm a operator!",
      ava: "https://creazilla.com/nodes/7913094-avatar-icon",
      status: "online"
    },
    {
      id: 3,
      name: "Ainash",
      textStatus: "I'm a teacher!",
      ava: "https://imgbin.com/png/F8PG5Zfy/woman-icon-avatar-icon-png",
      status: "offline"
    },
    {
      id: 4,
      name: "Messi",
      textStatus: "i'm a artist",
      ava: "https://imgbin.com/png/bhAZhcNT/france-culture-avatar-icon-png",
      status: "online"
    },
  ]
  return (
    <UsersBlock user = {users}/>
  );
}

export default App;
