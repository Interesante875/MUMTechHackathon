'use strict';
const KEYWORDS = {
    FIRSTNAME: "firstName",
    LASTNAME: "lastName",
    EMAIL: "email",
    PHONENUMBER: "phoneNumber",
    GENDER: "gender",
    DAY: "day",
    MONTH: "month",
    YEAR: "year",
    STREET_ADDRESS_1: "streetAddress1",
    STREET_ADDRESS_2: "streetAddress2",
    CITY: "city",
    STATE: "state",
    POSTAL_CODE: "postalCode",
    COUNTRY: "country",
    EDUCATION_HISTORY: "educationHistory",
    PAST_EXPERIENCES: "pastExperiences",
    REFERECNES_PHONE: "referencesPhone",
    REFERECNES_EMAIL: "referencesEmail",
    REFERECNES_NAME: "referencesName",
    PITCH: "pitch",
    THUMB_RESUME: ".drop-zone__thumb_resume",
    THUMB_CERT: ".drop-zone__thumb_cert",
    PROMPT_RESUME: ".drop-zone__prompt",
    PROMPT_CERT: ".drop-zone__prompt_cert",
    SUBMIT: "submitApplicationButton",

    JOB_POS = "jobPosition"
};



function receiveSubmission(){
    let firstNameRef = document.getElementById(KEYWORDS.FIRSTNAME).value;
    let lastNameRef = document.getElementById(KEYWORDS.LASTNAME).value;
    let emailRef = document.getElementById(KEYWORDS.EMAIL).value;
    let phoneNumRef = document.getElementById(KEYWORDS.PHONENUMBER).value;
    let dayRef = document.getElementById(KEYWORDS.DAY).value;
    let monthRef = document.getElementById(KEYWORDS.MONTH).value;
    let yearRef = document.getElementById(KEYWORDS.YEAR).value;
    let straddr1Ref = document.getElementById(KEYWORDS.STREET_ADDRESS_1).value;
    let straddr2Ref = document.getElementById(KEYWORDS.STREET_ADDRESS_2).value;
    let cityRef = document.getElementById(KEYWORDS.CITY).value;
    let stateRef = document.getElementById(KEYWORDS.STATE).value;
    let poscodeRef = document.getElementById(KEYWORDS.POSTAL_CODE).value;
    let countryRef = document.getElementById(KEYWORDS.COUNTRY).value;
    let pastExpRef = document.getElementById(KEYWORDS.PAST_EXPERIENCES).value;
    let refPhoneRef = document.getElementById(KEYWORDS.REFERECNES_PHONE).value;
    let refEmailRef = document.getElementById(KEYWORDS.REFERECNES_EMAIL).value;
    let refNameRef = document.getElementById(KEYWORDS.REFERECNES_NAME).value;
    let genderRef = document.getElementById(KEYWORDS.GENDER).value;
    let pitchRef = document.getElementById(KEYWORDS.PITCH);
    
    let studentProfile = new StudentProfile(true, false, false, "Personal", new Date(), 
        true, dateOfBirth = new Date(monthRef, dayRef, yearRef), gender = genderRef);
    
    let address = new Address(straddr1Ref, straddr2Ref, poscodeRef, cityRef, stateRef, countryRef);

    let personalContactInfo = new PersonalContactInfo(firstNameRef + lastNameRef, mobilePhone = phoneNumRef,
        workEmailAddress = emailRef);
    
    let makeApplication = new Application(studentProfile, pastExpRef, address, personalContactInfo,
        refPhoneRef, refNameRef, refEmailRef, pitchRef);

    jsonStorage = JSON.stringify(makeApplication);
    jobPosition = localStorage.getItem(JOB_POS);
    //organization received application then
}


function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("pdf/")) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    }else{
        thumbnailElement.style.backgroundImage = null;
    }
}
  

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
    
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }
    
        dropZoneElement.classList.remove("drop-zone--over");
    });
});
  

