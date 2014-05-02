function assert( message, expression )
{
	if( !expression )
	{
		throw new Error( message );		  
	}
	
	assert.count++;
	return true;
}

assert.count = 0;

function output( text, color )
{
	var p = document.createElement('p');
	p.innerHTML = text;
	p.style.color = color;
	document.body.appendChild(p);
}
