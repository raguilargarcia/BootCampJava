import { useState } from 'react';
import './App.css';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

function App() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValues({
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p id="message">
        {values.name && values.email && values.password && `${values.name}, ${values.email}, ${values.password}`}
      </p>
    </>
  );
}

export default App;
