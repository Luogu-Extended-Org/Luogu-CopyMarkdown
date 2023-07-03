// 获取讨论markdown源代码
// Module by 2044_space_elevator Queue_Hao

function main(code) {
	// To Do
}
function text(code) {
	return code.innerText;
}
function title(code) {
	var content = code.innerText
	if (code.innerHTML.includes('h1'))	return '# ' + content;
	if (code.innerHTML.includes('h2'))	return '## ' + content;
	if (code.innerHTML.includes('h3'))	return '### ' + content;
	if (code.innerHTML.includes('h4'))	return '#### ' + content;
	if (code.innerHTML.includes('h5'))	return '##### ' + content;
	if (code.innerHTML.includes('h6'))	return '###### ' + content;
}
function link(code) {
	return '[' + code.innerText + ']' + '(' + code.href + ')';
}
function strongText(code) {
	return '**' + code.innerText + '**';
}
function image(code) {
	return '![' + code.alt + ']' + '(' + code.src + ')';
}
function inline_code(code) {
	return '`' + code.innerText + '`';
}
function code(code) {
	return '```' + code.data-rendered-lang + '\n' + code.innerText + '\n' + '```';
}
function latex(code) {
	// todo
	return '$' + code.getElementsByTagName('annotation')[0].innerText + '$';
}