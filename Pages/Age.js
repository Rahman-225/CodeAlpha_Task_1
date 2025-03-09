// Age Calculater 

function calculate() {
    let DOBInput = document.getElementById("DOB").value;
    
    if (DOBInput === "") {
        document.getElementById("result").innerText = " PLESSE ENTER YOUR DATE OF BIRTH.";
        return;
    }

    let DOB = new Date(DOBInput);
    let today = new Date();

    let age = today.getFullYear() - DOB.getFullYear();
    let monthDiff = today.getMonth() - DOB.getMonth();
    let dayDiff = today.getDate() - DOB.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").innerText = `Your Age is: ${age} years`;
}
