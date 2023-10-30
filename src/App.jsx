import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xqajhabyerlotgmbxatb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxYWpoYWJ5ZXJsb3RnbWJ4YXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2Mjk5NTksImV4cCI6MjAxNDIwNTk1OX0.YglYtK26iVVJ9r6WG-QavavCX14E6oVJI6LItNrh0tg'
);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    console.log(123213);
    const { data } = await supabase.from('countries').select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
