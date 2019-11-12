<script>
	import DataForm from './DataForm.svelte'
	import ResultTable from './ResultTable.svelte'

	export let name;

	function parseQuery(queryString) {
		var query = {}
		var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&')
		for (var i = 0; i < pairs.length; i++) {
				var pair = pairs[i].split('=')
				query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '').replace(/\+/g, ' ')
		}
		return query;
	}

	$: query = parseQuery(window.location.search)
</script>

<svelte:head>
	<title>Hoja de registro de trabajadores</title>
</svelte:head>

<DataForm {...query}/>
<ResultTable {...query} />
