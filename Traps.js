
const Traps = {
CreateTrap(blockID, through, events){
  
   TileEntity.registerPrototype(blockID, {
     click: function() {
       events.click
     },
     tick: function() {
       events.tick
     }
   })
   TileRenderer.setEmptyCollisionShape(through)

 
},
CreateFireTrap(blockID, tick, range){
  var blo = World.getBlock(blockID)
  var r = Entity.getAllInRange(blo.x, blo.y, blo.z, range);

  TileEntity.registerPrototype(blockID, {
        tick: function() {
         


         for (var c in r) {
        var m = r[c]
          if (
            Entity.getType(m) !== 64) {
 


          Entity.setFire(r, tick, true);


        }
      }
        }
      });
}
}