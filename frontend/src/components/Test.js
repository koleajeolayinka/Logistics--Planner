import React, { useState, useEffect } from "react";
import Form from "./Form";
import LogisticsSlot from "./LogisticsSlot";
import LogisticsTask from "./LogisticsTask";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Test = () => {
  const [queue, setQueue] = useState([]);
  const [nextTaskId, setNextTaskId] = useState(0);
  const [showDate, setShowDate] = useState(false);
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDate();
    fetchData(); // Fetch data when the component mounts
  }, [showDate]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/logisticsTasks");
      const data = await response.json();
      setQueue(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addQueueFunction = async () => {
    const custName = document.getElementById("customer-name");
    const pickupLoc = document.getElementById("pickup-location");
    const dropOffLoc = document.getElementById("drop-off-location");

    if (
      custName.value.trim() === "" &&
      pickupLoc.value.trim() === "" &&
      dropOffLoc.value.trim() === ""
    ) {
      return alert(`You can't input an empty string`);
    }

    try {
      const response = await fetch("http://localhost:3001/logisticsTasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: nextTaskId,
          customerName: custName.value,
          pickupLocation: pickupLoc.value,
          dropOffLocation: dropOffLoc.value,
        }),
      });

      if (response.ok) {
        const newTask = await response.json();
        setQueue([...queue, newTask]);
        setNextTaskId(nextTaskId + 1);
        custName.value = "";
        pickupLoc.value = "";
        dropOffLoc.value = "";
        setShowDate(true);
      } else {
        console.error("Failed to add task:", response.status);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const setDate = () => {
    let date = new Date();
    setDays(
      [...Array(7)].map((_, index) => {
        let currentDate = new Date(date);
        currentDate.setDate(date.getDate() + index + 1);
        return `${currentDate.toDateString()}`;
      })
    );
  };

  const onDragStart = (e, task) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(task));
  };

  const onDrop = (e, slotId, dayIndex) => {
    e.preventDefault();
    const droppedTask = JSON.parse(e.dataTransfer.getData("text/plain"));

    // Update the dropped task with slot and day information
    const updatedTask = {
      ...droppedTask,
      slot: slotId,
      day: dayIndex + 1,
    };

    // Update the queue with the modified task
    const updatedQueue = queue.map((task) =>
      task.id === droppedTask.id ? updatedTask : task
    );

    setQueue(updatedQueue);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <DndProvider backend={HTML5Backend}>
        <div className="LogisticsContainer">
          <LogisticsTask queue={queue} onDragStart={onDragStart} />
          <LogisticsSlot
            days={days}
            queue={queue}
            onDragOver={onDragOver}
            onDrop={onDrop}
          />
        </div>
      </DndProvider>
      <Form addQueueFunction={addQueueFunction} />
    </section>
  );
};

export default Test;
