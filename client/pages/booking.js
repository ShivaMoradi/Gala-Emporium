export async function bookEvent(eventsId) {
  try {
    // Use window.prompt to get user email
    const email = window.prompt("Ange din e-postadress:");

    if (email) {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventsID: eventsId, userEmail: email }),
      });

      console.log('Response from server:', response);

      if (!response.ok) {
        console.error(`Error booking event: ${response.statusText}`);
        alert("Ett fel inträffade vid bokningen. Försök igen senare.11");
        console.log('Error condition reached');
        return;
      }

      const result = await response.json();
      console.log('Result from server:', result);
      alert(`Du är bokad! Din order-ID är: ${result.orderNr}`);
    }
  } catch (error) {
    console.error('Error booking event:', error);
    alert("Ett fel inträffade vid bokningen. Försök igen senare.22");
  }
}