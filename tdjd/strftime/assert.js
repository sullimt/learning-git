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
