# Mentoring FbW D03-1

## 2021-12-17

### Housekeeping: The Structure of Mentoring

- From the DCI Mentoring Concept: 
	- *"The structure of the Mentoring varies and **depends on the activity of the students** as much as the Mentor. The **questions of the students have priority**. The content of the mentoring lessons are **adapted to the students needs**.*
		- :star: The more you continually communicate to me what you want and need to learn, the more you determine the content of the mentoring. 
	- *"Recap **complex content**, build on **current topics**, answer **open questions**, support **student projects**, explain **new technologies**."*
		- :star: The more you continually communicate to me what content is complex to you, what current topics are difficult for you to understand and why, what open questions you have, what your projects are, and what new technologies you want to learn, the more mentoring will make you a better developer. 
	-  *"Mentoring aims to **respond to the different levels** within a class and to **support especially slow learners**."*
		- :star: We can structure our mentoring time anyway you feel is best. My recommendation is the following:
			1. first half (9:00-10:30) - **Review Topics**: repetition of the easiest material, make sure everybody understands everything covered this week and up to this point in the course, ask anything you want and it will be explained, no question is too simple, "leave nobody behind"
			2. second half (10:45-12:00) - **Specific Topics**: any question regarding any technology matter how advanced, live-coding requests on any topic, help with any specific project, request to learn new technology, etc. 
			3. keep **breakout rooms open** at all times: if the current topic is too easy, too difficult, or not interesting to you, feel free to work on your own or in groups in the breakout rooms, I will send a notice out via Zoom when we have a major change in topic
			4. **continually suggest new topics** that you want to do in mentoring, either mention them in class or write them in Slack and I will record and schedule them here in this document: the more **detailed** the request the better :muscle:, the more **prenotice** you give me the better :muscle:

### Review topics

- von Jan: Lösungen zu den Aufgaben könnten im Mentoring von den Studenten präsentiert werden:
	- https://github.com/FBW-W21-d03/christmas-project
	- https://github.com/FBW-W21-d03/advent-calendar
		- getDate(): https://www.w3schools.com/js/js_date_methods.asp
		- setDate(): https://www.w3schools.com/js/js_date_methods_set.asp
		- find bug: line 7
		- CSS
			- modal
				- move in devtools
			- find bug: scroll bars

- `if/else/switch` 
	- given an array of colors, display "warning!" if color is red, display "go!" if color is green, and for all other colors display "---"
		- do this task again with `switch` instead of `if/else`
	- make a function which receives a country and returns the capital, use `switch`
	- use `switch` to return what to wear depending on the weather
	- :muscle: CHALLENGE: use `switch` to create a function that takes "add", "subtract", "divide", or "multiply" and returns a function to perform this task 
- best-choices when to use which loops
	- a range of numbers: `for`
	- an array: `for-of` or `forEach()`
	- an array that is chained onto another ES6 array function: `forEach()`
	- properties in an object: `for-in`
- `.forEach() / for-of / for / for-in` 
	- display numbers 1 to 10
	- display numbers 10 to 1
	- display numbers 0 to 100 in increments of 5
	- display numbers 100 to 0 in decrements of 10
	- display numbers 1 to 1000 but stop at 23 
	- :muscle: CHALLENGE: display numbers 1 to 10 on HTML page in a UL/LI list
	- :muscle: CHALLENGE: display numbers 1 to 10 on HTML page in a dropdown list
	- display an array of five colors
	- display an array of five colors except for yellow
	- :muscle: CHALLENGE: display colors on HTML page in their own color
	- :muscle: CHALLENGE: display all company names of [Northwind](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/json) customers
	- display all Northwind company names with company id in parentheses
- `array functions: 
	- `.join()` - **joins** array items together into a string
	- `.slice()` - **slices** a section out of array to produce another array 
		- `.slice(2,5)` - *slice starting at 2 and stop before 5*
	- `.splice()` - **splices** items out of an array and can insert other items into that space
		- `months.splice(4, 1, 'May');` - *before item with index 4, delete 1 item and insert "May"*
	- `.push(item)` - **push** an item onto the end of an array
	- `.pop()` - **pop** an item off the end of an array
	- `.unshift(item)` - **unshifts** an item onto the beginning of an array (like push but on the left)
	- `.shift()` - **shift** the first element off the array (like pop but on the left)
	- `.reverse()` - **reverses** the order of the array
	- `.sort()` - **sorts** the list (of strings) in alphabetical order
	- `.indexOf()` - gets the **index of** an item 
	- `.lastIndexOf()` - gets the **index of** the **last instance** of an item 
	- display numbers 1 to 10 separated by hyphens (`join`)
	- display numbers 1 to 10 in square brackets separated by hypens (`map`, `join`)
	- :muscle: CHALLENGE: display numbers 1 to 10 in colored boxes on HTML page (`map`, `join`)
	- display 
	- :muscle: CHALLENGE: use map() on HTML page to display divs
	- display the 2nd, 3rd and 4th Northwind customer (`slice`)
	- build an array of customer names (`push`)
	- remove the last customer name from Northwind name array (`pop`)
	- remove the first customer name in Northwind name array(`shift`)
	- add a new customer name to end of Northwind name array (`push`)
	- add a new customer name to beginning of Northwind name array (`unshift`)
	- sort the array alphabetically (`sort`)
	- replace a name in the array with "ERROR" (`splice`)
	- find out the index of the "ERROR" entry (`indexOf`)
	- add "ERROR" to end of array (`push`), then get the index of the last occurance of "ERROR"
	- if any company name is "ERROR" then output "invalid customer collection" (`includes`)

### Specific topics 

- **:star: How to change VSCode font to cursive**: *"das war die Fira Nerd Font bzw FiraMono Nerd Font und dann noch die Schrift flottflott und editor.fontLigatures"*
	- https://onespace.netlify.app/howtos?id=461
- **:heavy_check_mark: bugfix**: on page load, force certain number to be default (doesn't work with window.onload)
	- hack: `let _value = rankElem.value;`
- **:star: star-clicking Live-Coding**: instead of the dropdown, one has 5 empty stars, when one clicks a star, that number of stars is selected, if you click e.g. 5, all 5 are selected
	- https://onespace.netlify.app/howtos?id=462
- **:star: localStorage Live-Coding**: use the star-dropdown example where the browser remembers the number for each customer, e.g. test: Firefox has one 3, Chrome has 4, you close them, open them, and they still have 3 and 4
	- https://onespace.netlify.app/howtos?id=462
- **:construction: message-notification Live-Coding**: when user enters name and comment on site, and clicks send button, website admin receives an e-mail (e.g. https://formspree.io)
- **:muscle: Vim editor basics:** learn how to use the vim editor in VSCode: [Vim editor basics](https://onespace.netlify.app/howtos?id=458)
- **:question: Veaceslav: Github pushen in ein remote repository** - von VSCode, vom Terminal, hast du das schon probiert und bekommst einen Fehler oder willst du das nur allgemein wissen, usw.? 
- **:question: Aisha: Github rejected non-fast-forward Fehler** - kannst du das ein bisschen näher beschreiben, was hast du genau versucht und was war die genaue Fehlermeldung?
- **:question: Algorithmen, API's, 2D-Canvas** - bestimmte Algorithmen z.B. Bubblesorts oder nur allgemeine Algorithmen? - wollen wir ein API zusammen aufstellen? das wäre cool :muscle:, oder APIs vom Frontend abrufen? auch cool :muscle: - und mit 2D-Canvas, meinst du das Canvas Element in HTML5?
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