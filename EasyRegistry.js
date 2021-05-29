
const ItemPrototiepes = {
}
var EasyRegistry = {
creatItem(id, name, texture, meta, stack, category, glint/*, callbacks*/){
   IDRegistry.genItemID(id); 
Item.createItem(id, name, {name: texture, meta: meta}, {stack: stack});
/*Item.registerUseFunction(id, function(coords, item, block){
callbacks.use//.func
});*/
/*Item.registerNoTargetUseFunction(id, function(coords, item, block){
callbacks.NoTargetUse.funcc
});*/
    Item.setCategory(ItemID[id], category)
    Item.setGlint(id, glint ? glint : false)
/*  Callback.addCallback('EntityInteract', function () {
callbacks.UseEntity//.interact
});*/
}}