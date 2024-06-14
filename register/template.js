
export function submitForm(event) {
    event.preventDefault();
    const summary = document.getElementById('summary');
    summary.innerHTML = '<h2>Summary</h2>';
    for (let i = 1; i <= participantCount; i++) {
        const fname = document.getElementById(`fname${i}`).value;
        const activity = document.getElementById(`activity${i}`).value;
        const fee = document.getElementById(`fee${i}`).value;
        const date = document.getElementById(`date${i}`).value;
        const grade = document.getElementById(`grade${i}`).value;
        summary.innerHTML += `
            <h3>Participant ${i}</h3>
            <p>Name: ${fname}</p>
            <p>Activity: ${activity}</p>
            <p>Fee: ${fee}</p>
            <p>Date: ${date}</p>
            <p>Grade: ${grade}</p>
        `;
        // Calculate total fees
        total += parseInt(totalFees);
    }

    summart.innerHTML += `<p>Total Fees: $${total.toFixed(2)}</p>`;
}

export let participantCount = 1;

export function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date<span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select id="grade${count}" name="grade${count}">
                    <option selected value="" disabled></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `;
}

export function addParticipant() {
    participantCount++;
    const participantsFieldset = document.querySelector('.participants');
    const newParticipant = document.createElement('div');
    newParticipant.innerHTML = participantTemplate(participantCount);
    participantsFieldset.insertBefore(newParticipant, document.getElementById('add'));
}

export function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.

    feeElements = [...feeElements];

    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    
    // once you have your total make sure to return it!
    const total = feeElements.reduce((total, fee) => total + parseInt(fee.value), 0);
    // const feeValue = parseFLoat(feeElement.value);
    // return sum + (isNAN(feeValue) ? 0 : feeValue); 
    // }, 0);

    return total;
}