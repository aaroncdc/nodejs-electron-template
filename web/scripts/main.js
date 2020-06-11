// jquery test

$(".testcol").click(function(){
	$(this).fadeOut(1000);
});

// Send button click event to node
$(".btn").click(function() {
	console.log("Value: " + $(this).val());
	ipcRenderer.send('buttonPress', $(this).val());
});