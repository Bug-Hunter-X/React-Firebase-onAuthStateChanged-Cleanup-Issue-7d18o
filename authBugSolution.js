import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// ... Firebase configuration
const firebaseConfig = {
  // ...
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
function useAuthState() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);
  return user;
}
export default function MyComponent() {
  const user = useAuthState();
  return (
    <div>
      {user ? <p>Logged in as {user.email}</p> : <p>Not logged in</p>}
    </div>
  );
}
