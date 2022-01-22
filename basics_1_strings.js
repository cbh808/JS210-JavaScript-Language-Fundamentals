/*
Explantion of what problem is and explanation of issues:
A code snippet is provided, that has a variable `paragraph` declared with the
`const` keyword.

A multiline string is assigned to the variable that has backslashes at the
end of each line. The backslashes are used to escape newline characters.
The left sides of lines 2 - 6 of the string are alinged with the assignment
operator, possibly intended to make the code easier to read.

After the snippet, the value referenced by the variable is logged to the
console.

We are asked to copy the code snippet and run it in a JavaScript console in
a web browser.

Issues: 
Upon pasting into the console, a syntax error is raised:
"Uncaught SyntaxError: '' string literal contains an unescaped line break."
The error is caused by blank spaces after the occurence of one of the
 backslash chacters . 
This error could have been detected after pasting into the browser, 
because the text after the spaces was colored differently that the text 
that came before the bug.

Now the text will output to the console, but there are large sections of
white spaces between the sentences.
This is because aligning of the text on the left side leaves whitespace
within the body of the string.
*/
