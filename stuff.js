
function fly(bool){
   if(bool == true){
     Player.setFlyingEnabled(true) 
     
     if(Player.getFlyingEnabled(true)){
  Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
      if(victim == -4294967295){
        if (damageType == 5) {
          Game.prevent()
          
        }}});
}} else if (bool == false){
  Player.setFlyingEnabled(false)
  
     if(
       Player.getFlyingEnabled(true)
       ){
  Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
      if (victim == -4294967295){
        if (damageType == 5) {
          Game.prevent()
        }
      
    }
    
  });
       

  
}
}}

