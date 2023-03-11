<!DOCTYPE html>
<html>
<head>
<title>Javascript</title>
	<script>
		var today=newDate();
		var day=today.getDay();
		var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		document.write("Today is:"+daylist[day]+",");
		var hour=today.getseconds();
		var prepand=(hour>=12)?"PM","AM";
		hour=(hour>=12)?hour=12:hour;
		if(hour===0 && prepand==='PM')
		{
			if(minute===0 && second===0)
			{
				hour=12;
				prepand='Noon';
			}
			else
			{
				hour=12;
				prepand='PM';
			}
		}
		if(hour===0 && prepand==='AM')
		{
			if(minute===0 && second===0)
			{
				hour=12;
				prepand='AM';
			}
		}
		document.write("Current time:"+hour+prepand+":"+minute+":"+second);
	</script>
</head>
<body>
</body>
</html>

