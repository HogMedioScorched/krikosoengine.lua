function createSidebarContent(prefix) {
	// Create elements
	if(prefix == null) prefix = '';
	const sidebarNav = document.getElementsByClassName('sidebar')[0];
	sidebarNav.style.visibility = 'visible';

	const searchInput = document.createElement('input');
	searchInput.type = 'text';
	searchInput.id = 'searchInput';
	searchInput.placeholder = 'Search for Anything...';

	const selectablesDiv = document.createElement('div');
	selectablesDiv.className = 'selectables';

	const itemList = document.createElement('ul');
	itemList.className = 'searchbar-child';
	itemList.id = 'itemList';

	// List items
	const items = {
		'Variables': 'variables.html',
	};

	// Create list elements and append to itemList
	let num = 0;
	for (let item in items)
	{
		const link = document.createElement('a');
		link.href = prefix + items[item] + "#" + item;
		link.className = 'selectable-link';

		const listItem = document.createElement('li');
		listItem.textContent = item;
		listItem.className = 'searchbar-child';
		link.appendChild(listItem);
		itemList.appendChild(link);
		num++;
	}
	console.log('Found ' + num + ' functions');

	// Append elements to their parents
	selectablesDiv.appendChild(itemList);
	sidebarNav.appendChild(searchInput);

	const collapsingArrow = document.createElement('i')
	collapsingArrow.classList.add('arrow')
	sidebarNav.append(collapsingArrow)

	collapsingArrow.addEventListener('click', function() {
		if (sidebarNav.getAttribute('collapsed') != 'true') {
			sidebarNav.setAttribute('collapsed', 'true')
		} else {
			sidebarNav.setAttribute('collapsed', 'false')
		}
	})

	sidebarNav.appendChild(selectablesDiv);
}
