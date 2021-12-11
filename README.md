# Mentoring FbW D03-1

## 2021-12-17

### Review topics

- `if/else/switch` 
	- given an array of colors, display "warning!" if color is red, display "go!" if color is green, and for all other colors display "---"
		- do this task again with `switch` instead of `if/else`
	- make a function which receives a country and returns the capital, use `switch`
	- use `switch` to return a function that returns what to wear depending on the weather
	- :muscle: CHALLENGE: use `switch` to create a function that takes "add", "subtract", "divide", or "multiply" and returns a function to perform this task 
- `.forEach() / for-of / for / for-in` 
	- display numbers 1 to 10
	- display numbers 10 to 1
	- display numbers 0 to 100 in increments of 5
	- display numbers 100 to 0 in decrements of 10
	- display numbers 1 to 1000 but stop at 23 
	- :muscle: CHALLENGE: display numbers 1 to 10 on HTML page in a UL/LI list
	- display an array of five colors
	- display an array of five colors except for yellow
	- :muscle: CHALLENGE: display numbers 1 to 10 on HTML page in a dropdown list
	- :muscle: CHALLENGE: display colors on HTML page in their own color
	- :muscle: CHALLENGE: display all company names of [Northwind](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/json) customers
	- display all Northwind company names with company id in parentheses
- `array functions: .join() .slice() .pop() .push() .shift() .unshift() .reverse() .sort() .splice() .indexOf() .lastIndexOf() .includes()` 
	- display numbers 1 to 10 separated by hyphens (`join`)
	- display numbers 1 to 10 in square brackets separated by hypens (`map`, `join`)
	- :muscle: CHALLENGE: display numbers 1 to 10 in colored boxes on HTML page (`map`, `join`)
	- display 
	- :muscle: CHALLENGE: use map() on HTML page to display divs
	- display the 2nd, 3rd and 4th Northwind customer (`slice`)
	- build an array of customer names (`push`)
	- remove the last customer name from Northwin name array (`pop`)
	- remove the first customer name in Northwind name array(`shift`)
	- add a new customer name to end of Northwind name array (`push`)
	- add a new customer name to beginning of Northwind name array (`unshift`)
	- sort the array alphabetically (`sort`)
	- replace a name in the array with "ERROR" (`splice`)
	- find out the index of the "ERROR" entry (`indexOf`)
	- add "ERROR" to end of array (`push`), then get the index of the last occurance of "ERROR"
	- if any company name is "ERROR" then output "invalid customer collection" (`includes`)

### Specific topics 

- **:construction: How to change VSCode font to cursive**: *"das war die Fira Nerd Font bzw FiraMono Nerd Font und dann noch die Schrift flottflott und editor.fontLigatures"*
- **:construction: bugfix**: on page load, force certain number to be default (doesn't work with window.onload)
- **:construction: localStorage Live-Coding**: use the star-dropdown example where the browser remembers the number for each customer, e.g. test: Firefox has one 3, Chrome has 4, you close them, open them, and they still have 3 and 4
- **:construction: star-clicking Live-Coding**: instead of the dropdown, one has 5 empty stars, when one clicks a star, that number of stars is selected, if you click e.g. 5, all 5 are selected
- **:construction: message-notification Live-Coding**: when user enters name and comment on site, and clicks send button, website admin receives an e-mail (e.g. https://formspree.io)
- **:muscle: Vim editor basics:** learn how to use the vim editor in VSCode: [Vim editor basics](https://onespace.netlify.app/howtos?id=458)
- **VSCode Debugging:** [Debugging JavaScript in Node with VSCode](https://onespace.netlify.app/howtos?id=454)

## 2021-12-10

### Review topics

- `if/else/switch` 
	- given an array of numbers from 1-10, display numbers if greater than 3
	- given an array of colors, display "warning!" if color is red, but if not then display "neutral"

### Specific topics

- **VSCode Extension:** display live preview of markdown files with the [Markdown Preview Enhanced](https://onespace.netlify.app/howtos?id=452) extension
- **JavaScript/DOM Live-Coding:** [Create a number dropdown which shows that number of icons](https://onespace.netlify.app/howtos?id=453)

## 2021-12-03

### Review topics

- **Howto:** [List of JavaScript basic topics](https://onespace.netlify.app/howtos?id=449)

### Specific topics

- **VSCode Extension:** display live results of `console.log()` in VSCode with [Quokka](https://quokkajs.com/docs/index.html) extension
- **Howto:** [The crazy truth that JavaScript arrays are really objects](https://onespace.netlify.app/howtos?id=448)