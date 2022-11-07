document.querySelectorAll('[id^="PlanningBoard_RadScheduler"]').forEach(div => {
    let name = div.title.split('\n')[1];
    div.querySelector('.AppointmentDescription').innerText = name;
  });
