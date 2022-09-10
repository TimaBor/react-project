import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [invites, setInvites] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении пользователей');
      });
    setIsLoading(false);
  }, []);

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          invites={invites}
          onClickInvite={onClickInvite}
          items={users}
          isLoading={isLoading}
          setSuccess={setSuccess}
        />
      )}
      {/* <Success /> */}
    </div>
  );
}

export default App;
