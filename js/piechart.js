  <script>
	$(document).ready(function(){
        $("button").click(function(){
        $.getJSON('http://api.thingspeak.com/channels/79448/feed/last.json?callback=?', function(data){
           
                $("div").append(data.field1 + " ");
				$data1=data.field1;
				var data = [
                { "CountryName": "Filled", "Pop1990": 1141, "Pop2008":data.field1*10, "Pop2025": 1458 },
                { "CountryName": "Remaining", "Pop1990": 849, "Pop2008": 1000-data.field1*10, "Pop2025": 1398 },

            ];

            $("#chart").igPieChart({
                width: "435px",
                height: "435px",
                dataSource: data, //JSON data defined above
                valueMemberPath: "Pop2008",
                labelMemberPath: "CountryName",
                labelsPosition: "bestFit"
            });
        });
    });
});
        $(function () {
        });
		
    </script>
