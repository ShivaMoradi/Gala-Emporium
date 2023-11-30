$(document).ready(function(){

    const mockEventData = [
        { id: 1, name: "Jazz Night", date: "2023-12-10", time: "20:00", club: "Blue Club", description: "A night with smooth jazz." },
        { id: 2, name: "Rock Concert", date: "2023-12-12", time: "18:00", club: "Rock Club", description: "Experience the best of rock." },
    ];

    function sortEvents(eventList){ // Sort events based on date.
        return eventList.sort((a,b) => new Date(a.date) - new Date(b.date))
    };







});