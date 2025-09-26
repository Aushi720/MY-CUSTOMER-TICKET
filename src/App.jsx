
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './Components/Navbar/Footer/Footer';




function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [loading, setLoading] = useState(true);




 // Fetch tickets from public/card.json
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("/card.json"); 
        const data = await res.json();

        // console.log(data);
        
        setTickets(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        toast.error("Failed to load tickets");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  
  const handleAddToTask = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.info("Ticket already in progress!");
      return;
    }
    setInProgress([...inProgress, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.success(`"${ticket.title}" added to In Progress`);
  };

  
  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    toast.success(`"${ticket.title}" marked as Resolved`);
  };

  if (loading) {
    return <p className="p-6 text-gray-600">Loading tickets...</p>;
  }



  return (
    <>
     <Navbar/>
      
       


 <div className="min-h-screen bg-gray-100 p-6 ">
      
      <div className="grid grid-cols-2 gap-4 mb-6 container mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white h-48  flex flex-col items-center justify-center  rounded-2xl p-6 text-center shadow-md">
          <h2 className="text-2xl font-bold">In-Progress</h2>
          <p className="text-3xl">{inProgress.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-emerald-600 shadow-md text-white flex flex-col items-center justify-center h-48 w-full rounded-2xl p-6 text-center ">
          <h2 className="text-2xl font-bold">Resolved</h2>
          <p className="text-3xl">{resolved.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 container mx-auto">
        
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>
          <div className="grid grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-lg"
                onClick={() => handleAddToTask(ticket)}
              >
               

                <h3 className="font-semibold text-lg">{ticket.title}</h3>
                <p className="text-sm text-gray-600">{ticket.description}</p>

              <p
          className={`mt-2 text-xs font-semibold ${
            ticket.priority === "High"
              ? "text-red-600"
              : ticket.priority === "Medium"
              ? "text-orange-500"
              : "text-green-600"
          }`}
        >
          {ticket.priority.toUpperCase()} PRIORITY
        </p>

                <p className="mt-2 text-xs text-gray-500">
                  
                  #{ticket.id} • {ticket.priority} • {ticket.customer}
                </p>
                <p className="text-xs text-gray-400">Created: {ticket.createdAt}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Task Status</h2>
          {inProgress.length === 0 && (
            <p className="text-gray-500 text-sm">Select a ticket to add to Task Status</p>
          )}
          {inProgress.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white p-4 rounded-xl shadow mb-3 flex justify-between items-center"
            >
              <span>{ticket.title}</span>
              
              <button
                onClick={() => handleComplete(ticket)}
                // className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md shadow"
              >
                Complete
              </button>
              
            </div>
          ))}

          <h3 className="text-lg font-semibold mt-6">Resolved Task</h3>
          {resolved.length === 0 && (
            <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
          )}
          {resolved.map((ticket) => (
            <p key={ticket.id} className="text-sm text-green-600">
              ✅ {ticket.title}
            </p>
          ))}
        </div>
      </div>

      
      <ToastContainer position="top-right" autoClose={2000} />

    </div>


   <Footer/>
      
    </>
  )
}

export default App
