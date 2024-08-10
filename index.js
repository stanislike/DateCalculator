const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
const tomorrow = tomorrowDate.toISOString().split("T")[0];
end_date.value = tomorrow;
end_date.min = tomorrow;

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  totalPerNight.textContent = diffDays * nightPrice.textContent;

  //   console.log(diffDays * nightPrice.textContent);
};

start_date.addEventListener("change", (e) => {
  const day = new Date(e.target.value);

  if (end_date.value <= start_date.value) {
    day.setDate(day.getDate() + 1);
    const tomorrow = day.toISOString().split("T")[0];
    end_date.value = tomorrow;
  }
  bookingCalc();
});

end_date.addEventListener("change", (e) => {
  const day = new Date(e.target.value);

  if (end_date.value <= start_date.value) {
    day.setDate(day.getDate() - 1);
    const yesterday = day.toISOString().split("T")[0];
    start_date.value = yesterday;
  }
  bookingCalc();
});
bookingCalc();
