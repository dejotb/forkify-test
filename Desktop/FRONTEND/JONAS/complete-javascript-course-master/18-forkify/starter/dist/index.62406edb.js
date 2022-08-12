const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
/// ////////////////////////////////////
// console.log('elo');
const showRecipe = async function() {
    try {
        const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        const data = await res.json();
        console.log(res, data);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
