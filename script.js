window.onload=function()
{
	function Calendar(ID,year,month,header)
	{
		this.ID=ID;
		var date=new Date();
		this.year=year || date.getFullYear();
		this.month=month-1 || date.getMonth();
		var mas=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];
		this.header=header || mas;
	}
	Calendar.prototype.setYear=function(year)
	{
		this.year=year;
	}
	Calendar.prototype.setMonth=function(month)
	{
		this.month=month-1;
	}
	Calendar.prototype.create=function()
	{
		var element=document.getElementById(this.ID);
		if(element==null)
		{
			alert("Елемент відсутній!")
			return;
		}
		var table=document.createElement("table");
		element.appendChild(table);
		var tr=document.createElement("tr");
		table.appendChild(tr);
		for(var i=0; i<this.header.length; i++)
		{
			var th=document.createElement("th");
			th.innerHTML=this.header[i];
			tr.appendChild(th);
		}
		var date=new Date(this.year,this.month,1);
		var count=date.getDay();
		if(count==0)
			count=7;
		var tr=document.createElement("tr");
		table.appendChild(tr);
		for(var i=1; i<count; i++)
			{
				var td=document.createElement("td")
				tr.appendChild(td);
			}
		while(true)
		{
			if(date.getDay()==1)
			{
				var tr=document.createElement("tr");
				table.appendChild(tr);
			}
			var td=document.createElement("td");
			td.innerHTML=date.getDate();
			tr.appendChild(td);
			date.setDate(date.getDate()+1);
			if(date.getMonth()!==this.month)
				break;
		}
		var rowsCount=table.rows.length;
		var countLastRow=table.rows[rowsCount-1].cells.length;
		for(var i=countLastRow; i<7; i++)
		{
			var td=document.createElement("td");
			tr.appendChild(td);
		}
		var mas=table.querySelectorAll("tr");
		for(var i=0; i<mas.length;i++)
			if(mas[i].innerHTML=="")
			{
				table.removeChild(mas[i]);
				rowsCount--;
			}
		for(var i=0; i<rowsCount; i++)
		{
			table.rows[i].cells[5].style.color = "red";
			table.rows[i].cells[5].style.backgroundColor = "lightpink";
			table.rows[i].cells[6].style.color = "red";
			table.rows[i].cells[6].style.backgroundColor = "lightpink";
		}
	}
	OK.onclick=function(){
		var year=+inputYear.value;
		var month=monthId.value;
		cal.setMonth(month);
		cal.setYear(year);
		if(!year || year<0)
		{
			alert("Невірний формат року!")
			return;
		}
		calendar.removeChild(calendar.firstElementChild);
		cal.create();
	}

	var cal=new Calendar("calendar");
	cal.create();
}
