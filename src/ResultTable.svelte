<script>
export let company = "", worker = "", generate = false
export let ccc = "", nif = "", boss = "", obs = ""
const months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
const TODAY = new Date()

function monthArray() {
  const TODAY = new Date()
  const arr = []
  for(let i = 1; i < 32; i++) {
    let date = new Date(TODAY.getFullYear(), TODAY.getMonth(), i)
    if (date.getMonth() !== TODAY.getMonth()) break
    const day = date.getDay()
    if (day === 2 || day === 4)
      arr.push({i, dark: true})
    else if (day === 6 || day === 0)
      arr.push({i, end: true})
    else arr.push({i})
  }
  return arr;
}
</script>

<style>
h1 {
  font-size: 100%;
}
#resource #columns {
  font-size: 10px;
  display: flex;
  justify-content: space-between;
}

#resource #columns > div > div {
  margin: 0 0 2px;
}

#resource #columns > div > div > * {
  display: inline-block;
  min-width: 120px;
}

#resource #columns > div > div > strong {
  min-width: 300px;
}

#resource table {
  width: 100%;
  border-spacing:1px;
}

#resource thead th {
  font-size: 60%;
}

#resource #table tr {
  background: #EEE;
  text-align: center;
  font-family: monospace;
}

#resource #table tr.dark {
  background: #DDD;
}

#resource #table tr.black {
  font-size: 50%;
  margin: 0;
  background: #000;
  color: white;
}

#resource #table tr td {
  height: 32px;
  color: #DDD;
  width: 16%;
}
#resource #table tr td:first-child {
  color: black !important;
  width: auto;
}

#resource #table tr td:nth-child(2n) {
  width: 9%;
}

#resource #table tr.black td{
  color: black;
  height: 5px;
}
#resource #table tr.black td:first-child {
  color: #CCC !important;
}
#resource #table tr.dark td{
  color: #CCC;
}

@media print {
  form, button {
    display: none;
  }
}

</style>

<div id="resource">
  <h1>Registro de Jornada de los Trabajadores</h1>
  <div style="display: flex;">
    <form style="margin-right: 8px;">
      {#if company}
      <input type="hidden" name="company" value="{company}">
      {/if}
      {#if worker}
      <input type="hidden" name="worker" value="{worker}">
      {/if}
      {#if ccc}
      <input type="hidden" name="ccc" value="{ccc}">
      {/if}
      {#if nif}
      <input type="hidden" name="nif" value="{nif}">
      {/if}
      {#if boss}
      <input type="hidden" name="boss" value="{boss}">
      {/if}
      {#if obs}
      <input type="hidden" name="obs" value="{obs}">
      {/if}
      <button>Formulario</button>
    </form>
    <button on:click="{e=>window.print()}">Imprimir</button>
  </div>
  <div id="columns">
    <div>
      <div><b>EMPRESA</b> <span>{company}</span></div>
      <div><b>TRABAJADOR</b> <span>{worker}</span></div>
      <div style="min-height:1em;"></div>
      <div><strong>Nº HORAS SEMANALES SEGÚN CONTRATO</strong> <span>40</span></div>
    </div>
    <div>
      <div><b>C.C.C. Nº</b> <span>{ccc}</span></div>
      <div><b>N.I.F.</b> <span>{nif}</span></div>
      <div><b>MES</b> <span>{months[TODAY.getMonth()]}</span></div>
      <div><b>AÑO</b> <span>{TODAY.getFullYear()}</span></div>
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th>DIA</th>
        <th colspan="2">ENTRADA</th>
        <th colspan="2">SALIDA</th>
        <th colspan="2">ENTRADA</th>
        <th colspan="2">SALIDA</th>

      </tr>
    </thead>
    <tbody id="table">
      {#each monthArray() as day}
      {#if day.end}
      <tr class="black"><td>{day.i}</td><td colspan="8"></td></tr>
      {:else}
      <tr class:dark="{day.dark}">
        <td>{day.i}</td>
        {#each new Array(2) as i}
        <td>HH:MM</td>
        <td>FIRMA</td>
        <td>HH:MM</td>
        <td>FIRMA</td>
        {/each}
      </tr>
      {/if}
      {/each}
    </tbody>
  </table>
  <div id="columns">
    <div>
      <div style="min-height:1em;"></div>
      <div><b>OBSERVACIONES</b> <span>{obs}</span></div>
    </div>
    <div>
      <div style="min-height:1em;"></div>
      <div><b>POR LA EMPRESA</b></div>
      <div style="min-height:1em;"></div>
      <div style="min-height:1em;"></div>
      <div style="min-height:1em;"></div>
      <div style="min-height:1em;"></div>
      <div><span>Fdo: {boss}</span> <span>2020</span></div>
    </div>
  </div>
</div>