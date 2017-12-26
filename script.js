var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	dinosaur = 'triceratops';
	dinosaurUpperCase = dinosaur.toUpperCase();
	changeDinosaur = text.replace('Velociraptor', dinosaurUpperCase);
	halfText = (changeDinosaur.length/2);
	endText = changeDinosaur.substr(0, halfText);

console.log(halfText);
console.log(endText);