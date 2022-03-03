$(document).ready(function() {
    window.addEventListener('message', function(event) {
        var data = event.data;
		
		$("#idtext").html(data.id);
        var food = event.data.food;
        $("#boxHunger").css("height", food + "%");
        var water = event.data.water;
		$("#boxThirst").css("height", water + "%");

		if (data.health != -100){
			$('#healttext').html(Math.round(data.health) +'%');
		}else if(data.health == 0){
			$('#healttext').html("0")
		}

		if (data.health >= 100) {
			$('#alertHeal').css('animation', 'blinker-stop')
			$('#alertHeal').css('background-color', 'transparent')
		} else if (data.health <= 20) {
			$('#alertHeal').css('animation', 'blinker 1s linear infinite')
			$('#alertHeal').css('background-color', 'rgb(255, 0, 0, 0.5)')
		}

        if (data.armor == 0) {
            $("#armor").show();
		} else if (data.armor > 10) {
			$('#armortext').html(Math.round(data.armor)+'%')
            $("#armor").show();
			$("#boxArmor").css("height", data.armor + "%");
		} else if (data.armor <= 10) {
			$("#armor").show();
			$("#boxArmor").css("height", data.armor + "%");
		}

        if (data.stamina >= 100) {
            $("#stamina").hide();
		} else if (data.stamina > 1) {
			$('#staminatext').html(Math.round(data.stamina) +'%')
			$("#stamina").show();
			$("#boxStamina").css("height", data.stamina + "%");
			$('#alertStamina').css('animation', 'blinker-stop')
			$('#alertStamina').css('background-color', 'transparent')
		} else if (data.stamina <= 1) {
			$("#stamina").show();
			$("#boxStamina").css("height", data.stamina + "%");
			$('#staminatext').html("0")
			$('#alertStamina').css('animation', 'blinker 1s linear infinite')
			$('#alertStamina').css('background-color', 'rgb(255, 0, 0, 0.5)')
        }

		if (data.stress >= 100) {
            $("#stress").show();
		} else if (data.stress > 1) {
			$('#stresstext').html(Math.round(data.stress) +'%')
			// $('#stresstext').html("50" +'%')
			$("#stress").show();
			$("#boxStress").css("height", data.stress + "%");
			$('#alertStress').css('animation', 'blinker-stop')
			$('#alertStress').css('background-color', 'transparent')
		} else if (data.stress <= 1) {
			$("#stress").show();
			$("#boxStress").css("height", data.stress + "%");
			$('#stresstext').html("0")
        }
        
        if (data.dive >= 100) {
			$("#dive").hide();
		} else if (data.dive > 1) {
			$('#divetext').html(Math.round(data.dive) +'%')
			$("#dive").show();
			$("#boxDive").css("height", data.dive + "%");
			$('#alertDive').css('animation', 'blinker-stop')
			$('#alertDive').css('background-color', 'transparent')
		} else if (data.dive <= 1) {
			$("#dive").show();
			$("#boxDive").css("height", data.dive + "%");
			$('#diveatext').html("0")
			$('#alertDive').css('animation', 'blinker 1s linear infinite')
			$('#alertDive').css('background-color', 'rgb(255, 0, 0, 0.5)')
		}

		if (data.food != 100) {
			$('#hungertext').html(Math.round(data.food) +'%')
		}else if(data.food == 0) {
			$('#hungertext').html("0")
		}

		if (data.water != 100) {
			$('#watertext').html(Math.round(data.water))
		} else if(data.water <= 10) {
			$('#watertext').html("0")
		}

		if (data.food >= 100) {
			$("#hunger").show();
		} else if (data.food > 10) {
			$('#hungertext').html(Math.round(data.food) +'%')
			$("#hunger").show();
			$("#boxHunger").css("height", data.food + "%");
			$('#alertHunger').css('animation', 'blinker-stop')
			$('#alertHunger').css('background-color', 'transparent')
		} else if (data.water <= 10) {
			$("#hunger").show();
			$("#boxHunger").css("height", data.food + "%");
			$('#alertHunger').css('animation', 'blinker 1s linear infinite')
			$('#alertHunger').css('background-color', 'rgb(255, 0, 0, 0.5)')
		}

		if (data.water >= 100) {
			$("#thirst").show();
		} else if (data.water > 10) {
			$('#watertext').html(Math.round(data.water) +'%')
			$("#thirst").show();
			$("#boxThirst").css("height", data.water + "%");
			$('#alertThirst').css('animation', 'blinker-stop')
			$('#alertThirst').css('background-color', 'transparent')
		} else if (data.water <= 10) {
			$("#thirst").show();
			$("#boxThirst").css("height", data.water + "%");
			$('#alertThirst').css('animation', 'blinker 1s linear infinite')
			$('#alertThirst').css('background-color', 'rgb(255, 0, 0, 0.5)')
		}

    })
})
