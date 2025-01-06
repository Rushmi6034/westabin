import React, { useEffect, useState } from 'react';
import { ref, get } from "firebase/database";
import { database } from "../firebase-config";  // Import database from firebase-config
import { Link } from 'react-router-dom';  // Add this import
import DustbinCard from '../components/DustbinCard';
import '../styles/Dashboard.css';  // Custom CSS for styling

const Dashboard = () => {
  const [dustbins, setDustbins] = useState([]);  // State to hold the fetched data
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Reference to the location in your Realtime Database where dustbin data is stored
    const dbRef = ref(database,);  // Path to your data in Firebase

    // Fetch data from Firebase Realtime Database
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        // Transform the data into a suitable format with placeholders for missing data
        const transformedData = Object.keys(data).map(key => ({
          id: key,
          name: key,  // The name of the bin is its key (e.g., BIN1, BIN2)
          level: data[key] !== undefined ? `${data[key]}%` : '0%',  // Show 0% if level data is missing
          // location: data[key]?.location || 'None',
          //   load: data[key]?.load !== undefined ? `${data[key]?.load}kg` : '0kg',
        }));

        setDustbins(transformedData);  // Set the transformed data to state
      } else {
        console.log("No data available");
      }
      setLoading(false);  // Stop loading once data is fetched
    }).catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);  // Stop loading in case of error
    });
  }, []);  // Empty dependency array to fetch data only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading message until data is fetched
  }

  return (
    <div className="class">
      <nav>
        <div className="navs-container">
          <div className="logs">🗑️ WastaBin</div>
          <div className="navs-links">
            <Link to="/" >Home</Link>
            <Link to="/aboutus-dashboard">About Us</Link>
            <Link to="#">Contact</Link>
            <div className="butto">
            <Link to="/login">Logout</Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="dashboard-container">
      <h1>Welcome to WestaBin Dashboard!!!</h1>
      <div className="dustbin-cards">
        {dustbins.map((dustbin) => (
          <DustbinCard 
            key={dustbin.id} 
            name={dustbin.name} 
            level={dustbin.level} 
            // location={dustbin.location} 
            // load={dustbin.load} 
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;