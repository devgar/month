<script>
export let company = "", worker = "", generate = false
export let ccc = "", nif = "", boss = "", obs = ""

$: show = !company || !worker || !ccc || !nif || !boss && generate
</script>

<style>
  #outerForm {
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0; right: 0; left: 0; top: 0;
  }
  #outerForm form {
    background: white;
    box-sizing: border-box;
    padding: 8px 4px;
    width: 320px;
    height: 100vh;
  }
  form input, form textarea {
    width: calc(100% + 4px);
    border-left: none;
    margin-left: -4px;
    box-sizing: border-box;
    resize: vertical;  
  }
  form input:focus, form textarea:focus {
    outline: none;
    transition: 0.3s;
    background: #EEE;
    padding: 0.4em 0.2em 0.4em 0.6em;
  }
  form button {
    float: right;
  }
</style>

{#if show}
<div id="outerForm">
  <form on:submit>
    <input type="hidden" value="true" name="generate" />
    <div class="line"><label for="company">Empresa</label><input id="company" name="company" value="{company}"></div>
    <div class="line"><label for="worker">Trabajador</label><input id="worker" name="worker" value="{worker}"></div>
    <div class="line"><label for="nif">N.I.F.</label><input id="nif" name="nif" value="{nif}"></div>
    <div class="line"><label for="ccc">C.C.C Nº</label><input id="ccc" name="ccc" value="{ccc}"></div>
    <div class="line"><label for="boss">Empleador</label><input id="boss" name="boss" value="{boss}"></div>
    <div class="line"><label for="obs">Observaciones</label><textarea id="obs" name="obs" value="{obs}"></textarea></div>
    <div class="line"><button>Generar</button></div>
    <div class="line"></div>
  </form>
</div>
{/if}
