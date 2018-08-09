<script>

	//	Current Timestamp
	function ct()
	{
		return new Date().getTime();
	}

	//	Truncate
	function tc(strx, l)
	{
		return strx.substring( (strx.length)-l , strx.length);
	}

	//	Hash
	function hashCode(str)
	{
		return str.toString().split('').reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0).toString();
	}

	//	Random String of length(5) here
	console.log( tc( hashCode( ct() ),  5 ).split('').reverse().join('') );

</script>
