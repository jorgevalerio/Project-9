
var ctx = document.getElementById("trafficChart");
var dailyTrafficChart = document.getElementById("dailyTrafficChart");
var mobileUsersChart = document.getElementById("mobileUsersChart");
const warningbox = document.querySelector(".warning-box");
const closediv = document.querySelector(".closebox");
 

closediv.addEventListener("click", RemoveDIV);

function RemoveDIV() {
    warningbox.style.display = 'none';
}



var trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        label: 'TRAFFIC',
        data: [750, 1250, 1000, 1500, 2000, 1450,1750,1250,1750,2250,1750,2500],
        borderWidth: 1,
			backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
			lineTension: 0,
			pointBackgroundColor: '#ffffff',
			pointBorderWidth: 2,
			responsive: true,
			maintainAspectRatio: false,
        }]
    },
	
	options: {
        legend: {
        display: false
    }
    }
	
});

var myBarChart = new Chart(dailyTrafficChart, {
    type: 'bar',
	data : {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "Daily Traffic",
			 backgroundColor: [
				
                'rgba(75, 192, 192, 0.2)',
				 'rgba(75, 192, 192, 0.2)',
				 'rgba(75, 192, 192, 0.2)',
				 'rgba(75, 192, 192, 0.2)',
				 'rgba(75, 192, 192, 0.2)',
				 'rgba(75, 192, 192, 0.2)',
				 'rgba(75, 192, 192, 0.2)',
               
            ],
            borderWidth: 1,
            data: [75, 100, 175, 125, 225, 200, 100],
        }
    ]
},
	options: {
        legend: {
        display: false
    }
    }
	
	
	
    
});



var myDoughnutChart = new Chart(mobileUsersChart, {
    type: 'doughnut',
    data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktops"
    ],
    datasets: [
        {
            data: [100, 50, 300],
            backgroundColor: [
                "#558C89",
                "#74AFAD",
                "#D9853B"
            ],
            hoverBackgroundColor: [
                "#558C89",
                "#74AFAD",
                "#D9853B"
            ]
        }]
},
    options: {
        legend: {
        display: true,
			position: "right",
    }
    }
});





function validateForm() {
    var x = document.forms["message_user"]["uname"].value;
	var y = document.forms["message_user"]["umessage"].value;
    if (x == "" || y =="") {
        alert("Name and Message must be filled out");
        return false;
    } else{
		alert("Message has been Send!!");
	}
}
