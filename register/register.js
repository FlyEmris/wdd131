// Importing the functions and variables
import { submitForm, participantCount, participantTemplate, totalFees, addParticipant } from './template.js';



document.getElementById('add').addEventListener('click', addParticipant);
document.querySelector('form').addEventListener('submit', submitForm);