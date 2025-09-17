// ======= Config =======
$("#view-map").hidden = view!=="map";
}


// ======= Export/Import =======
function exportJSON(){
const data = JSON.stringify(state.businesses, null, 2);
const blob = new Blob([data], {type:"application/json"});
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url; a.download = "negocios.json"; a.click();
URL.revokeObjectURL(url);
}
function importJSON(file){
const reader = new FileReader();
reader.onload = () => {
try{
const data = JSON.parse(reader.result);
if(Array.isArray(data)){
state.businesses = data.filter(x=>x && typeof x==="object");
persist(); rerender();
} else alert("JSON inválido");
}catch{ alert("No se pudo leer el JSON"); }
};
reader.readAsText(file);
}


// ======= Init =======
window.addEventListener("DOMContentLoaded", () => {
load();
rerender();


// Navbar
$$(".nav__btn").forEach(btn => btn.addEventListener("click", ()=> switchView(btn.dataset.view)));


// Login
$("#loginBtn").addEventListener("click", openLogin);
$("#logoutBtn").addEventListener("click", logout);
$("#loginForm").addEventListener("submit", handleLoginSubmit);
$("#togglePass").addEventListener("click", () => {
const p = $("#password");
p.type = p.type === "password" ? "text" : "password";
});


// Admin tools
$("#addMarkerBtn").addEventListener("click", () => { state.editMode = true; $("#editState").textContent = "ON"; alert("Haz clic en el mapa para colocar el nuevo negocio"); });
$("#toggleEditBtn").addEventListener("click", () => { state.editMode = !state.editMode; $("#editState").textContent = state.editMode? "ON":"OFF"; });
$("#exportBtn").addEventListener("click", exportJSON);
$("#importFile").addEventListener("change", (e)=> e.target.files[0] && importJSON(e.target.files[0]));


// Map click to add
$("#map").addEventListener("click", (e) => {
if(!state.admin || !state.editMode) return;
const {x,y} = pctFromEvent(e, $("#map"));
addMarkerAt(+x.toFixed(2), +y.toFixed(2));
});


// Filters
$("#search").addEventListener("input", (e)=>{ state.filter.q = e.target.value; rerender(); });
$("#categoryFilter").addEventListener("change", (e)=>{ state.filter.category = e.target.value; rerender(); });
});


function renderAdminTools(){
const tools = $("#adminTools");
tools.hidden = !state.admin;
$("#editState").textContent = state.editMode? "ON":"OFF";
}
