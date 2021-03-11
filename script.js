let lastUL = document.querySelectorAll('.root>li>ul');

lastUL.forEach(function (elem) {
	let internalLI = elem.children;

	let lastChildLi = internalLI[internalLI.length - 1];
	lastChildLi.classList = 'last';

	setTimeout(function () {
		lastChildLi.classList.add('dark_green');
	}, 2000);
});

let list = document.querySelector('.root');

function setFirstItemClassName(level, ul) {
	if (ul.children.length && level > 0) {
		level -= 1;
		let currentFirstLi = ul.children[0];
		if (currentFirstLi == document.querySelector('li')) {
			currentFirstLi = ul.children[1]
		}
		setFirstItemClassName(level, currentFirstLi);
	} else {
		ul.style.backgroundColor = 'red';
		ul.classList.add('first-item');
		setTimeout(function () {
			ul.classList.add('dark_blue');
		}, 2000);
	};
}

setFirstItemClassName(3, list);



